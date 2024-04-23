"use client"
import Darkmode from "@/components/darkmode";
import Navbar from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import SectionHeading from "@/components/sectionheading";
import NowShowing from "@/components/nowshowing";
import PopularMovies from "@/components/popular";
import Axios from "axios";
import MovieListItem from "@/components/movie-list-item";
import { useState } from "react";


export default function Home() {
  const [searchResults, setSearchResults] = useState([])

  async function searchHandler(event) {
    console.log(event.target.value)
    const response = await Axios.get(`https://api.themoviedb.org/3/search/multi?query=${event.target.value}`, {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    })
    setSearchResults(response.data.results)
  }

  return (
    <NextUIProvider>
      <header className=" mx-5 grid grid-cols-3 items-center">
        <div className="relative">
          <input onChange={searchHandler} type="search" className="border border-gray-300" />
          <div className="absolute h-[80dvh] w-[90vw] px-6 py-6 bg-white z-50">
            Results
            {searchResults.map(result => result.media_type === "movie" && <MovieListItem movie={result} key={result.id} />)}
          </div>
        </div>

        <h1 className="col-start-2 text-center py-5 text-2xl font-bold dark:text-blue-200">MyMovies</h1>
        <div className="col-start-3 right-0 absolute">
          <Darkmode className=" " />
        </div>
      </header>
      <main className="mx-5">
        <article>
          <SectionHeading heading="now showing" />
          <ul className="flex overflow-x-auto">
            <NowShowing />
          </ul>
        </article>
        <article className="pt-5 mb-40 pb-20">
          <SectionHeading heading="popular" />
          <ul>
            <li><PopularMovies /></li>
          </ul>
        </article>
      </main>

      <Navbar />

    </NextUIProvider>

  );
}
