import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  submit = () => {
    console.log(this.text);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" ref={input => (this.text = input)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome message="IT'S A SMARTER PROP MENSSAGE!" />
        <button onClick={this.submit}> Show Value </button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { message } = this.props;
    return <h1>{message}</h1>;
  }
}

export default App;
