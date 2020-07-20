import React from 'react';

class ToDo extends React.Component{

    constructor()
    {
        super();
        this.state= {style : {display : 'inline', margin : '1rem', textDecoration : 'none'}}
    }

    render(){
        return(
            <li>
                <p style={this.state.style}>{this.props.message}</p>
            </li>
        );
    }
    
} 
   
export default ToDo;