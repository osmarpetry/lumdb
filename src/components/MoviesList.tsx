import Axios, { AxiosError } from 'axios'
import React from 'react'
import styled from 'styled-components'
import { useSWRInfinite } from 'swr'

import Movie from './Movie'
import useInfiniteScroll from 'react-infinite-scroll-hook'

interface Movie {
    id: string
    title: string
    poster_path: string
}

interface Data {
    data: { results: Movie[]; total_pages: number }
}

const MoviesList = () => {
    const { data, isValidating, size, setSize } = useSWRInfinite<Data, AxiosError>(
        index => [
            'https://api.themoviedb.org/3/discover/movie?api_key=ddc64ae5e8e8de2f777406819ea8ee0f&language=' +
                'en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' +
                index +
                1
        ],
        Axios.get
    )

    const infiniteRef = useInfiniteScroll({
        loading: isValidating,
        hasNextPage: data?.length ? data[0].data.total_pages !== size : false,
        onLoadMore: () => setSize(size + 1)
    })

    return (
        <MovieGrid ref={infiniteRef as any}>
            {data?.map((movies: any) => {
                return movies.data.results.map((movie: Movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))
            })}
        </MovieGrid>
    )
}

export default MoviesList

const MovieGrid = styled.div`
    display: flex;
    margin-top: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
`
