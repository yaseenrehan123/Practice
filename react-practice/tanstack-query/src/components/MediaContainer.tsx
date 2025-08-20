import { useQuery } from '@tanstack/react-query'
import React from 'react'

const MediaContainer = () => {
    const fetchMovies = async () => {
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const OPTIONS = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                accept: 'application/json'
            }
        };
        const URL: string = 'https://api.themoviedb.org/3/discover/movie'
        const response = await fetch(URL, OPTIONS);
        if (!response.ok)
            throw new Error("RESPONSE NOT OK!");
        const data = await response.json();
        return data;
    }
    const { data, isLoading, isError,error,isSuccess } = useQuery({
        queryFn: () => fetchMovies(),
        queryKey: ['movies']
    });
    if (isLoading)
        return (<div className='text-2xl text-yellow-500'>Loading...</div>) 
    if (isError)
        return (<div className='text-2xl text-red-500'>{error.message}</div>)
    if(isSuccess) console.log(data);
        return (
            <div>MediaContainer</div>
        )
}

export default MediaContainer