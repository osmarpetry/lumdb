import { GET_MOVIE, GET_MOVIES, RESET_MOVIE } from './actions'

const initialState = {
    movies: [],
    isMoviesLoaded: false,
    moviesLoadedAt: null,
    movie: {},
    isMovieLoaded: false
}

export default (state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: data,
                isMoviesLoaded: true,
                moviesLoadedAt: new Date()
            }
        case GET_MOVIE:
            return { ...state, movie: data, isMovieLoaded: true }
        case RESET_MOVIE:
            return { ...state, movie: {}, isMovieLoaded: false }
        default:
            return state
    }
}
