import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, markCompleted } from '../redux/slices/taskSlice';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// TaskList component to display tasks and handle their actions
const TaskList = () => {
    // Access tasks from the Redux store
    const tasks = useSelector(state => state.tasks);
    // Access dispatch function from the Redux store
    const dispatch = useDispatch();

    // Function to handle marking a task as completed
    const handleCompleteTask = (taskId) => {
        // Dispatch markCompleted action with the taskId
        dispatch(markCompleted(taskId));
    };

    // Function to handle deleting a task
    const handleDeleteTask = (taskId) => {
        // Dispatch deleteTask action with the taskId
        dispatch(deleteTask(taskId));
    };

    return (
        <ul>
            {tasks?.map(task => (
                <div key={task.id} className="item">
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox onChange={() => handleCompleteTask(task.id)} />}
                            label={task.text}
                        />
                    </FormGroup>
                    <IconButton aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ))}
        </ul>
    );
};

export default TaskList;