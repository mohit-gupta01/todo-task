import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';

// TaskInput component to handle user input for adding tasks
const TaskInput = () => {
    // useState hook to manage the state of the task text input
    const [taskText, setTaskText] = useState('');

    // useDispatch hook to access the dispatch function from the Redux store
    const dispatch = useDispatch();

    // handleAddTask function to add a task to the Redux store
    const handleAddTask = () => {
        // Check if the task text input is not empty
        if (taskText.trim() !== '') {
            // Dispatch the addTask action with the current task text and a unique id
            dispatch(addTask({ id: Date.now(), text: taskText }));

            // Reset the task text input to an empty string
            setTaskText('');
        }
    };

    // handleKeyPress function to handle the 'Enter' key press event
    const handleKeyPress = (e) => {
        // Check if the 'Enter' key was pressed
        if (e.key === 'Enter') {
            // Call the handleAddTask function to add the task
            handleAddTask();
        }
    };

    return (
        <form className="item" onSubmit={(e) => { e.preventDefault(); }}>
            {/* Input field for the task text */}
            <input
                type="text"
                placeholder="Enter task..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            {/* Button to add the task */}
            <button className='add-button' onClick={handleAddTask}>+</button>
        </form>
    );
};

export default TaskInput;