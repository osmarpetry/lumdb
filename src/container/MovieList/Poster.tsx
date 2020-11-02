import React from 'react'
import { Link } from 'react-router-dom'

import { Movie as MovieInterface } from 'core/domains/Movie'

import { PosterImage } from 'components'

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154'

interface MovieProps {
    movie: MovieInterface
}

function Poster({ movie }: MovieProps) {
    return (
        <Link to={`/${movie.id}`}>
            <PosterImage
                src={`${POSTER_PATH}${movie.poster_path}`}
                alt={movie.title}
            />
        </Link>
    )
}

export default Poster
