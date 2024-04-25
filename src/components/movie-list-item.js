"use client"
import Image from "next/image"
import ImdbRating from "./imdb-rating"
import { GoClock } from "react-icons/go";
import Link from "next/link"

export default function MovieListItem({ movie }) {
    return (
        <ul className="">
            <li key={movie.id} className="mb-4 snap-start mx-2">
                <Link href={`/movie/${movie.id}`} className="block after:clear-both after:content-[''] after:table ">
                    <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={500} height={500} className="float-left mr-4 w-[6em] h-auto rounded-md" alt={`Poster for the movie ${movie.title}`} />
                    <p className="text-md font-semibold">{movie.title}</p>
                    <ImdbRating rating={movie.vote_average.toFixed(1)} />
                    <p><GoClock className="text-gray-500 inline" /> {movie.runtime} minutes</p>
                </Link>
            </li>
        </ul>
    )
}
