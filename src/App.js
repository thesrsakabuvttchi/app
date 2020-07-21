import React from 'react';
import './App.css';
import ToDo from './Components/toDoElement';
import ToDoItems from './Components/data';
import Button from './button';

class App extends React.Component {

  constructor()
  {
    super();
    this.state ={
      data : ToDoItems.map(data => <ToDo message={data.message}/>),
      toDel : []
    };
  }

  render(){
    return (
      <div>
        <h1>To Do List</h1>
        <ul id = 'box'>
          {this.state.data}
        </ul>
      </div>
    );
  }
  
}

export default App;
