import React, { Component } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

import { Poster } from './Movie'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovie, resetMovie } from '../redux/movies/actions'

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

class MovieDetails extends Component {
    componentDidMount() {
        const { getMovie, match } = this.props
        getMovie(match.params.id)
    }

    componentWillUnmount() {
        const { resetMovie } = this.props
        resetMovie()
    }

    render() {
        const { movie } = this.props
        if (!movie.id) {
            return null
        }

        return (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                <MovieInfo>
                    <Overdrive id={movie.id}>
                        <Poster
                            src={`${POSTER_PATH}${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </Overdrive>
                    <div>
                        <h1>{movie.title}</h1>
                        <h3>{movie.release_date}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movies.movie,
    isMovieLoaded: state.movies.isMovieLoaded
})

const mapDispatchProps = dispatch =>
    bindActionCreators(
        {
            getMovie,
            resetMovie
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchProps
)(MovieDetails)

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`

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
`
