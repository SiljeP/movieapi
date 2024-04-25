"use client"
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react"
import Image from "next/image";

export default function NowShowing() {
    //first API fetch insert here 

    //NOW SHOWING

    const KEY = "2c721e0d8526bcfb16eb555b28fb11a0"
    const [movies, setMovies] = useState([])

    useEffect(function () {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: '2c721e0d8526bcfb16eb555b28fb11a0'
            }
        };
        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${KEY}`, options)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
                //console.log(data.results);

            })

    }, []) //dependecy array must be empty for the useeffect to only run once.


    //{movies[2].title}
    //classNames="shadow-md shadow-black"  on images


    return (
        <>

            {movies.map((movie) => (
                <li key={movie.id} className='pt-2 pr-2 pb-2 flex-shrink-0 w-[143px]'>
                    <Link href={"/movie/" + movie.id}>
                        <Image key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} priority={true} height={600} width={500} alt="movie poster" className="h-auto w-[120px]" />
                    </Link>
                    <h1 className='font-bold pt-2'>{movie.title}</h1>
                    <div className='flex gap-1 items-center'>
                        <FaStar className="text-yellow-500 text-sm mr-1" />
                        <p className='text-xs text-slate-500 '>{movie.vote_average.toFixed(1)}/10 IMDb</p>
                    </div>
                </li>

            ))}



        </>

    );
}