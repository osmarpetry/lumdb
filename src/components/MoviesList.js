import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Movie from './Movie';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../redux/movies/actions';

class MoviesList extends PureComponent {
  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

const mapDispatchProps = dispatch =>
  bindActionCreators(
    {
      getMovies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchProps
)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
