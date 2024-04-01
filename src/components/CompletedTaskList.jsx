import React from 'react';
import { useSelector } from 'react-redux';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// The CompletedTaskList component is a functional component that renders a list of completed tasks.

const CompletedTaskList = () => {
    const tasks = useSelector(state => state.deletedTasks);
    return (
        <ul>
            {tasks?.map(task => (
                <div key={task.id} className="item">
                    <FormGroup>
                        <FormControlLabel sx={{
                            ".css-ahj2mt-MuiTypography-root": {
                                marginLeft: '10px',
                                padding: '20px',
                                fontSize: '20px',
                                fontWeight: '200',
                                color: '#00204a',
                                textDecoration: "line-through",
                            }
                        }} control={<Checkbox defaultChecked color='success' />} label={task.text} />
                    </FormGroup>
                </div>
            ))}
        </ul>
    )
}

export default CompletedTaskList;