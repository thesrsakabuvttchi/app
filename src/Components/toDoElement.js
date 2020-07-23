import React from 'react';
import {ToDel} from './data';

class ToDo extends React.Component{

    constructor(){
        super();
        this.state= {style : {display : 'inline', margin : '1rem', textDecoration : 'none'}}
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps.style !== this.props.style)
            this.setState({display : 'inline', margin : '1rem', textDecoration : 'none'});
    }

    clickHandler(){
        if(this.state.style.textDecoration==='none')
            ToDel.push(this.props.message);
        else
            ToDel.splice(ToDel.indexOf(this.props.message),1); 
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