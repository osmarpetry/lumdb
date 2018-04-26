import React, { Component } from 'react';
import styled from 'styled-components';

import { Poster } from './Movie';

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

class MovieDetails extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=ddc64ae5e8e8de2f777406819ea8ee0f&language=en-US`
      );
      const movie = await res.json();
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <div>
            <Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
            />
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetails;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
