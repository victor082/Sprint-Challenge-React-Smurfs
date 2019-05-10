import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    }
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
    });
  };

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurf);
    // add code to create the smurf using the api
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
