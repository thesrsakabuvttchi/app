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
        this.props.del();
    }

    render(){
        return(
            <li>
                <p style={this.state.style}>{this.props.message}</p>
                <img src="https://img.icons8.com/metro/26/000000/trash.png" style={{float:"right"}}  onClick={this.clickHandler} alt=''/>
            </li>
        );
    }
    
} 
   
export default ToDo;