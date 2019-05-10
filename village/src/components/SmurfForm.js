import React, { Component } from 'react';
import './smurfs.css';
import { Link } from 'react-router-dom';

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
 refreshPage = () => { 
    window.location.reload(); 
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
          <div className="baseline" />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <div className="baseline" />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <div className="baseline" />
          <br></br>
          <button type="submit" onClick={ this.refreshPage }>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
