import React from 'react';
import {ToDel} from './data';

class ToDo extends React.Component{

    constructor(){
        super();
        this.state= {style : {display : 'inline-block', margin : '0.5rem',textDecoration : 'none', width : '85%'}}
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps.style !== this.props.style)
            this.setState({display : 'inline-block', margin : '0.5rem', textDecoration : 'none'});
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
            <li style={{overflowWrap: 'break-word', overflow: 'auto',padding: "0.5em", display: "flex",alignItems: "center"}}>
                <div style={{overflowWrap: 'break-word', flex: 1}}>
                    <p style={this.state.style}>{this.props.message}</p>
                </div>
                <img src="https://img.icons8.com/metro/26/000000/trash.png" style={{float:"right"}}  onClick={this.clickHandler} alt=''/>
            </li>
        );
    }
    
} 
   
export default ToDo;