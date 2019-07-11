import React, { PureComponent } from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'
import InifiniteScroll from 'react-infinite-scroll-component'

import Movie from './Movie'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies } from '../redux/movies/actions'

class MoviesList extends PureComponent {
    state = {
        count: 1
    }

    fetchMovies = () => {
        this.props.getMovies(this.state.count)
        this.setState({ count: this.state.count + 1 })
    }

    renderLoading = () =>
        <div style={ {
            display: 'flex',
            justifyContent: 'center'
        } }>
            <ReactLoading type='bubbles' color='#fff' />
        </div>

    componentDidMount() {
        const { isMoviesLoaded, moviesLoadedAt } = this.props
        const oneHour = 60 * 60 * 1000
        if (
            !isMoviesLoaded ||
            new Date() - new Date(moviesLoadedAt) > oneHour
        ) {
            this.fetchMovies()
        }
    }

    render() {
        const { movies, isMoviesLoaded } = this.props
        if (!isMoviesLoaded) {
            return this.renderLoading()
        }

        return (
            <InifiniteScroll
                dataLength={ movies.length }
                next={ this.fetchMovies }
                hasMore
                loader={ this.renderLoading() }>
                <MovieGrid>
                    { movies.map(movie =>
                        <Movie key={ movie.id } movie={ movie } />
                    ) }
                </MovieGrid>
            </InifiniteScroll>
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
    display: flex;
    margin-top: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
`
