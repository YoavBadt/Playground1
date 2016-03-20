import React from 'react'

var Spinner = React.createClass({
  getInitialState: function() {
    return {
      text: "24"
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
    console.log(event.target.value)
  },
  render(){
    return <div>
      <input onChange={this.handleChange} type="number" min="4" max="200" step ="2" value={this.state.text} ></input>
      
    </div>
  }
});

export default Spinner
