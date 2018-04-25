import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    input: 'Hello'
  };

  updateInput = event => {
    console.log(event.target.value);
    this.setState({
      input: event.target.value
    });
  };

  submit = () => {
    console.log(this.message.value);
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
        <Welcome message="IT'S A SMARTER PROP MENSSAGE!" />
        <input
          type="text"
          onChange={this.updateInput}
          value={this.state.input}
        />
        <input type="text" ref={input => (this.message = input)} />
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
