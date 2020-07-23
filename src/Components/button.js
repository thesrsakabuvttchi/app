import React from 'react';

var ButtonStyle ={
    backgroundColor: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    fontSize: '16px',
    margin: '5px',
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
                <button style={ButtonStyle} onClick={this.props.del}>Delete Selected</button><br/>
                <form onSubmit={()=>this.props.add(this.state.Input)}>
                    <input type="text" onChange={this.getVal}/><br/>
                    <button style={ButtonStyle}>Enter new</button>
                </form>
            </div>
        );
    }

}

export default Button;