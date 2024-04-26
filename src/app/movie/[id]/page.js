"use client"

import Cast from "@/components/cast";
import Darkmode from "@/components/darkmode";
import SectionHeading from "@/components/sectionheading";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useState, useEffect } from "react"
import ReactPlayer from 'react-player'
import AddToFavs from "@/components/add-to-favs";
import { useParams } from "next/navigation"




//Single movie detail overview
export default function Movie({ params }) {
    const { id } = useParams()

    const KEY = "2c721e0d8526bcfb16eb555b28fb11a0"
    const [movie, setMovie] = useState()
    const [genres, setGenres] = useState([])

    useEffect(function () {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: '2c721e0d8526bcfb16eb555b28fb11a0'
            }
        };
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?append_to_response=credits,videos&language=en-US&api_key=${KEY}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovie(data)
                setGenres(data?.genres)
            })
            .catch(err => console.error(err))

    }, [])

    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        // Round down the total hours to get the number of full hours
        var rhours = Math.floor(hours);
        // Calculate the remaining minutes after subtracting the full hours from the total hours
        var minutes = (hours - rhours) * 60;
        // Round the remaining minutes to the nearest whole number
        var rminutes = Math.round(minutes);
        // Construct and return a string representing the conversion result
        return rhours + " h " + rminutes + " min";
    }


    return (
        <>
            <div className="relative h-[650px] w-full object-contain">
                <ReactPlayer
                    light={
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={`https://image.tmdb.org/t/p/w500/${movie && movie?.poster_path}`}
                            alt="movie poster"
                            style={{
                                backgroundSize: "contain",
                                width: "100%",
                                height: "550px",
                                paddingTop: "2em"
                            }} />}
                    // className="overflow-x-hidden w-full mx-auto my-0 p-0 object-fit "
                    // style={{ height: "", width: "100%", objectFit: "scale down" }} />}
                    url={`https://www.youtube.com/watch?v=${movie?.videos.results[1].key}`}
                    height="450px"
                    width="100%"
                    style={{ height: "auto", padding: 0 }}
                />
            </div>
            <Link href="/" >
                <FaArrowLeft className='absolute top-0 left-0 mt-8 ml-5 text-2xl text-white' />
            </Link>
            <div className="top-0 mt-8 mr-5 right-0 absolute">
                <Darkmode className=" " />
            </div>
            {/* 
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <IoPlayCircle className=' text-6xl text-white rounded-full' />
                <p className="capitalize text-white">Play trailer</p>
            </div> */}
            <article className="bg-white px-5 rounded-t-lg absolute -mt-[60%] dark:bg-black">
                <div className="flex justify-between pt-5">
                    <h1 className=" text-black font-bold dark:text-blue-200">{movie?.title}</h1>
                    <AddToFavs id={id} className="text-xl mt-2" />
                </div>
                <div className='flex gap-1 items-center'>
                    <FaStar className="text-yellow-500 text-sm mr-1" />
                    <p className='text-xs text-slate-500 '>{movie?.vote_average?.toFixed(1)}/10 IMDb</p>
                </div>
                <div className='flex gap-3 py-2 flex-wrap'>
                    {genres.map((genre) => (
                        <div key={genre.id} className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs'>{genre.name}</div>
                    ))}

                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-1">
                    <h3 className="col-start-1 row-start-1 text-xs text-slate-500 dark:text-gray-500">Length</h3>
                    <p className="col-start-1 row-start-2 text-xs">{timeConvert(movie?.runtime)}</p>
                    <h3 className="col-start-2 row-start-1 text-xs text-slate-500 dark:text-gray-500">Language</h3>
                    <p className="col-start-2 row-start-2 text-xs capitalize">{movie && movie?.spoken_languages[0].name}</p>
                    <h3 className="col-start-3 row-start-1 text-xs text-slate-500 dark:text-gray-500">Rating</h3>
                    <p className="col-start-3 row-start-2 text-xs">PG-13</p>
                </div>
                <SectionHeading heading="description" showSeeMore={false} />
                <p className="text-slate-500 dark:text-gray-500 text-sm">{movie?.overview}</p>
                <SectionHeading heading="cast" />
                <div className="pt-4 mb-40 pb-20">
                    <Cast params={params} />
                </div>

            </article>
        </>
    );
}
