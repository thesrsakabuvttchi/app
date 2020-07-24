import React from 'react';

var InputStyle ={
    backgroundColor: '#e1b382',
    border: '#2d545e 25px solid',
    padding: '15px 32px',
    textAlign: 'center',
    fontSize: '16px',
    margin: '2em',
    borderRadius : '5px',
    width: '40%',
  }

class Button extends React.Component{

    constructor()
    {
        super();
        this.state = {Input : ''};
        this.getVal = this.getVal.bind(this);
    }

    getVal(event)
    {
        this.setState({Input : event.target.value});
        console.log(this.state.Input);
    }

    render(){
        return(
            <div style={{textAlign : 'center'}}>
                <form onSubmit={()=>this.props.add(this.state.Input)}>
                    <input type="text" onChange={this.getVal} style ={InputStyle} placeholder="enter To-Do items here"/><br/>
                </form>
            </div>
        );
    }

}

export default Button;