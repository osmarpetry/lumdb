import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './components/Movie';

const movies = [
  {
    id: 1,
    title: 'Mr. Nobody'
  },
  {
    id: 2,
    title: 'Spider Man',
    desc: 'Marvel Super-Hero Movie'
  },
  {
    id: 3,
    title: 'The Fifth Element'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
      </div>
    );
  }
}

export default App;
