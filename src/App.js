import React from 'react';
import './App.css';
import ToDo from './Components/toDoElement';
import {ToDoItems,ToDel} from './Components/data';
import Button from './Components/button';

class App extends React.Component {

  constructor()
  {
    super();
    this.state ={
      data : ToDoItems.map(data => <ToDo message={data.message} key={data.id}/>)
    };
    this.delToDo = this.delToDo.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  delToDo(){
    ToDel.map( 
        message => {
            if(ToDoItems.map(data => data.message).indexOf(message)===-1)
                return(null);
           return(ToDoItems.splice(ToDoItems.map(data => data.message).indexOf(message),1));
        }
    );
    ToDel.splice(0);
    this.setState ({data: ToDoItems.map(data => <ToDo message={data.message} key={data.id}/>)});
  }

  addToDo(message){
    if(message==='')
      return(null);
    ToDoItems.push({id: ToDoItems[ToDoItems.length-1].id+1, message: message});
    this.setState ({data: ToDoItems.map(data => <ToDo message={data.message} key={data.id}/>)});
    console.log(ToDoItems);
  }

  render(){
    return (
      <div>
        <h1>To Do List</h1>
        <ul id = 'box'>
          {this.state.data}
        </ul>
        <Button del={this.delToDo} add={this.addToDo}/>
      </div>
    );
  }
  
}

export default App;
