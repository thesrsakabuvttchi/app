import React from 'react';
import './App.css';
import ToDo from './Components/toDoElement'
import ToDoItems from './Components/data'

function App() {

  return (
    <div>
      <h1>To Do List</h1>
      <ul id = 'box'>
        {ToDoItems.map(data => <ToDo message={data.message}/>)}
      </ul>
    </div>
  );
  
}

export default App;
