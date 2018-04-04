import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('contructor');
  }

  componentWillMount() {
    console.log('Will Mount');
  }

  componentDidMount() {
    console.log('Did Mount');
  }

  state = {
    toggle: true
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome
          message="IT'S A SMARTER PROP MENSSAGE!"
          toggle={this.state.toggle}
        />
        {this.state.toggle && <p>I'M HERE!</p>}
        <button onClick={this.toggle}> Show / Hide </button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { message, toggle } = this.props;
    console.log(toggle);
    return <h1>{message}</h1>;
  }
}

export default App;
