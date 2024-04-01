import './App.css';
import React from 'react';
import TasksPanel from './components/TasksPanel';

const App = () => {
  return (
    <>
      <h1 id="heading">MY TODO APP</h1>
      <TasksPanel />
    </>
  );
}

export default App;