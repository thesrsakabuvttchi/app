import React from 'react';

class ToDo extends React.Component{

    render(){
        return(
            <li>
                <p style={{display : 'inline', margin : '1rem'}}>{this.props.message}</p>
            </li>
        );
    }
    
} 
   
export default ToDo;