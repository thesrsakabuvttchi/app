import React from 'react';

class ToDo extends React.Component{

    constructor(){
        super();
        this.state= {style : {display : 'inline', margin : '1rem', textDecoration : 'none'}}
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState((PrevState)=>{
            if(PrevState.style.textDecoration==='none')
                return({style : {display : 'inline', margin : '1rem', textDecoration : 'line-through'}});
            else
                return({style : {display : 'inline', margin : '1rem', textDecoration : 'none'}});
        });
    }

    render(){
        return(
            <li onClick={this.clickHandler}>
                <p style={this.state.style}>{this.props.message}</p>
            </li>
        );
    }
    
} 
   
export default ToDo;