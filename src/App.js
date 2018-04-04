import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        <Welcome message="IT'S A PROP MENSSAGE!" />
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

export default App;
