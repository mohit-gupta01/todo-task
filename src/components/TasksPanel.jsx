import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllCompletedTasks } from '../redux/slices/taskSlice';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import CompletedTaskList from './CompletedTaskList';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Custom TabPanel component for rendering tab content
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// Function to generate accessibility props for tabs
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Main TasksPanel component
const TasksPanel = () => {
    const [value, setValue] = React.useState(0); // State to manage the selected tab
    const dispatch = useDispatch(); // Redux dispatch function

    // Event handler for tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Event handler for deleting all completed tasks
    const handleDelete = () => {
        dispatch(deleteAllCompletedTasks());
    }

    return (
        <div className="box">
            <Box sx={{
                width: '100%',
                '.css-heg063-MuiTabs-flexContainer': {
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '100%',
                }
            }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    {/* Tabs for switching between pending and completed tasks */}
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Pending" {...a11yProps(0)} />
                        <Tab label="Completed" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                {/* TabPanel for pending tasks */}
                <CustomTabPanel value={value} index={0}>
                    <TaskList /> {/* Component to display pending tasks */}
                    <TaskInput /> {/* Component for adding new tasks */}
                </CustomTabPanel>
                {/* TabPanel for completed tasks */}
                <CustomTabPanel value={value} index={1}>
                    <CompletedTaskList /> {/* Component to display completed tasks */}
                    <div className='delete-button'>
                        {/* Button to clear all completed tasks */}
                        <Button variant="outlined" color='error' onClick={handleDelete} startIcon={<DeleteIcon />}>
                            Clear History
                        </Button>
                    </div>
                </CustomTabPanel>
            </Box>
        </div>
    )
}

export default TasksPanel;
