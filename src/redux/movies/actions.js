export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIE = 'GET_MOVIE'
export const RESET_MOVIE = 'RESET_MOVIE'

export const getMovies = pageNumber =>
    async function(dispatch) {
        const res = await fetch(
            'https://api.themoviedb.org/3/discover/movie?api_key=' +
                'ddc64ae5e8e8de2f777406819ea8ee0f&language=' +
                'en-US&sort_by=popularity.desc' +
                '&include_adult=false&include_video=false&page=' + pageNumber
        )
        const movies = await res.json()

        return dispatch({
            type: 'GET_MOVIES',
            data: movies.results
        })
    }

export const getMovie = id =>
    async function(dispatch) {
        const res = await fetch(
            'https://api.themoviedb.org/3/movie/' +
                id +
                '?api_key=' +
                'ddc64ae5e8e8de2f777406819ea8ee0f&language=en-US'
        )
        const movie = await res.json()

        return dispatch({
            type: 'GET_MOVIE',
            data: movie
        })
    }

export const resetMovie = () => ({
    type: 'RESET_MOVIE'
})
