
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        deletedTasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        markCompleted: (state, action) => {
            const deletedTask = state.tasks.find(task => task.id === action.payload);
            if (deletedTask) {
                state.deletedTasks.push(deletedTask);
                state.tasks = state.tasks.filter(task => task.id !== action.payload);
            }
        },
        deleteAllCompletedTasks: (state) => {
            state.deletedTasks = [];
        }
    }
});

export const { addTask, deleteTask, markCompleted, deleteAllCompletedTasks } = taskSlice.actions;
export default taskSlice.reducer;
