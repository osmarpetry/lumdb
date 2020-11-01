import React from 'react'
import styled from 'styled-components'
import { useSWRInfinite } from 'swr'
import Axios, { AxiosError } from 'axios'

import useInfiniteScroll from 'react-infinite-scroll-hook'
import Movie from './Movie'
import {Movie as MovieInterface} from './MovieDetails'

interface Data {
    data: { results: MovieInterface[]; total_pages: number }
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
                return movies.data.results.map((movie: MovieInterface) => (
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
