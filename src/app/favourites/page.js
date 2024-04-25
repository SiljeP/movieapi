"use client"

import getIds from "@/actions/get-ids"
import Header from "@/components/header"
import MovieListItem from "@/components/movie-list-item"
import Navbar from "@/components/navbar"
import SectionHeading from "@/components/sectionheading"
import Axios from "axios"
import { useEffect, useState } from "react"

export default function FavouritePage() {
    const [movies, setMovies] = useState([])

    async function init() {
        const ids = await getIds()
        const response = await Axios.get(`https://api.themoviedb.org/3/account/${ids.account_id}/favorite/movies?language=en-US&page=1&sort_by=created_at.desc`, {
            headers: {
                Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
            }
        })

        setMovies(response.data.results)
    }

    useEffect(function () {
        init()
    }, [])

    return (
        <>
            <Header />
            <SectionHeading heading="Favourites" showSeeMore={false} className={"m-10"} />
            {movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
            <Navbar />
        </>
    )
}