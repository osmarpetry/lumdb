import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import useSWR from 'swr'
import Axios, { AxiosError } from 'axios'
import styled, { css } from 'styled-components'

import Overdrive from 'react-overdrive'
import { PosterImage } from 'components'

import { Movie } from 'core/domains/Movie'

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w154'

interface MovieDetailsProps {
    id: string
}

function MovieDetails({ match }: RouteComponentProps<MovieDetailsProps>) {
    const { data } = useSWR<{ data: Movie }, AxiosError>(
        'https://api.themoviedb.org/3/movie/' +
            match.params.id +
            '?api_key=' +
            'ddc64ae5e8e8de2f777406819ea8ee0f&language=en-US',
        Axios.get
    )
    const movie = data?.data

    if (!movie) {
        return <h1>Loading</h1>
    }

    return (
        <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
            <MovieInfo>
                <Overdrive id={movie.id}>
                    <PosterImage
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

export default withRouter(MovieDetails)

const MovieWrapper = styled.div<{ backdrop: string }>`
    position: relative;
    padding-top: 50vh;
    ${({ backdrop }) =>
        css`
            background: url(${backdrop}) no-repeat;
        `}
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
