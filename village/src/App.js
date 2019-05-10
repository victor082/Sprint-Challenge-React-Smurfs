import React, { Component } from 'react';
import { BrowserRouter as Route} from "react-router-dom";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {console.log(res)
      this.setState({ smurfs: res.data })
    })
    .catch(err => {console.log(err)
    })
  }

  addSmurf = smurf => {
    axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {console.log(res)
      this.setState({ smurf: res.data })
      this.props.history.push('/smurfs')
    })
    .catch(err => {console.log(err)
    })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
       <SmurfForm addSmurf={this.addSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
