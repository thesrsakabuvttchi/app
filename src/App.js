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
      data : []
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
    document.cookie = "JSONData="+JSON.stringify(ToDoItems)+"; expires=Fri, 31 Dec 2037 23:59:59 GMT";
    this.setState ({data: ToDoItems.map(data => <ToDo message={data.message} key={data.id} del={this.delToDo}/>)});
  }

  addToDo(message){
    if(message==='')
      return(null);
    else if(ToDoItems.filter(data => data.message===message).length>0){
      alert('please enter non-duplicate values');
      return(null);
    }
    else if(message.indexOf(';')!== -1){
      alert('semicolons break the script, pls refrain from using them');
      return(null);
    }
    ToDoItems.push({id: ToDoItems.length<1?1:ToDoItems[ToDoItems.length-1].id+1, message: message});
    document.cookie = "JSONData="+JSON.stringify(ToDoItems)+"; expires=Fri, 31 Dec 2037 23:59:59 GMT";
    this.setState ({data: ToDoItems.map(data => <ToDo message={data.message} key={data.id} del={this.delToDo}/>)});
  }

  componentDidMount()
  {
    this.setState ({data: ToDoItems.map(data => <ToDo message={data.message} key={data.id} del={this.delToDo}/>)});
  }

  render(){
    return (
      <div style={{backgroundColor: '#12343b',height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'auto'}}>
        <h1 style={{backgroundColor: '#c89666', margin: '0px', padding: '0.5em'}}>
            To Do List
        </h1>
        {ToDoItems.length>0?
        <ul id = 'box' style={{margin: '1.5em auto',padding:'1em', backgroundColor: '#2d545e'}}>
          {this.state.data}
        </ul>
        :null}
        <Button add={this.addToDo}/>
        <div style={{height:'63%'}}></div>
        <footer style={{backgroundColor: '#101010', color:'white',float: 'bottom',padding:'2em',width: '100%'}}>
          copyleft © thesrsbuvttchi
        </footer>
      </div>
    );
  }
  
}

export default App;
