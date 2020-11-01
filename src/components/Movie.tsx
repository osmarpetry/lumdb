import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

import { Movie as MovieInterface } from 'core/domains/Movie'

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154'

interface MovieProps {
    movie: MovieInterface
}

function Movie({ movie }: MovieProps) {
    return (
        <Link to={`/${movie.id}`}>
            <Overdrive id={movie.id}>
                <Poster
                    src={`${POSTER_PATH}${movie.poster_path}`}
                    alt={movie.title}
                />
            </Overdrive>
        </Link>
    )
}

export default Movie

export const Poster = styled.img`
    box-shadow: 0 0 35px black;
`
