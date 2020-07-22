import React from 'react';

class Button extends React.Component{

    render(){
        return(
            <button onClick={this.props.onClick}>click me</button>
        );
    }

}

export default Button;