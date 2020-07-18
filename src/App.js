import React from 'react';
import './App.css';
import ToDo from './Components/toDoElement'

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <ul id = 'box'>
      <ToDo message ='Learn React'/>
      </ul>
    </div>
  );
}

export default App;
