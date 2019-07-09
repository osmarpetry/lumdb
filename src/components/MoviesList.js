import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Movie from './Movie'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies } from '../redux/movies/actions'

class MoviesList extends PureComponent {
    componentDidMount() {
        const { getMovies, isMoviesLoaded, moviesLoadedAt } = this.props
        const oneHour = 60 * 60 * 1000
        if (
            !isMoviesLoaded ||
            new Date() - new Date(moviesLoadedAt) > oneHour
        ) {
            getMovies()
        }
    }

    render() {
        const { movies, isMoviesLoaded } = this.props
        if (!isMoviesLoaded) return <h1>Loading...</h1>
        return (
            <MovieGrid>
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </MovieGrid>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    isMoviesLoaded: state.movies.isMoviesLoaded,
    moviesLoadedAt: state.movies.moviesLoadedAt
})

const mapDispatchProps = dispatch =>
    bindActionCreators(
        {
            getMovies
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchProps
)(MoviesList)

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`
