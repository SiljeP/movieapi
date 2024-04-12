"use client"

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react"

//SHOWING MORE INFO UNDER POPULAR MOVIES


export default function PopularMovies() {


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
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${KEY}&append_to_response=videos,credits`, options)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
                console.log(data.results);

            })

    }, []) //dependecy array must be empty for the useeffect to only run once.

    //{movie.genre_ids} map over genres??


    return (
        <>
            {movies.map((movie) => (
                <section
                    key={movie.id}
                    className='pt-2 pr-2 pb-2'>
                    <div className='flex flex-wrap row gap-1 '>
                        <Link href={"/movie/" + movie.id}>
                            <Image key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} height={170} width={120} alt="movie poster" />
                        </Link>
                        <div className='px-2 w-[40%]'>
                            <h1 className='font-bold pt-2'>{movie.title}</h1>
                            <div className='flex flex-row py-2 items-center '>
                                <FaStar className="text-yellow-500 text-sm mr-1" />
                                <p className='text-xs text-slate-500 '>{movie.vote_average.toFixed(1)}/10 IMDb</p>
                            </div>
                            <div className='flex gap-3 py-2'>
                                <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                                <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                                <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                            </div>
                            <div className='flex flex-row gap-2 py-2 items-center'>
                                <Image
                                    src="/images/clock.svg"
                                    width={24}
                                    height={24}
                                    alt="Icon of a clock"
                                />
                                <p>1h 47m</p>
                            </div>

                        </div>
                    </div>
                </section>
            ))}



        </>

    );
}