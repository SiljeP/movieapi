"use client"
import MoreMovieOverview from "@/components/more-movie-overview";
import MovieOverview from "@/components/movie-overview";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <>
      <header className="w-full">
        <h1 className="text-center py-5 text-2xl font-bold">MyMovies</h1>
      </header>
      <main>
        <article>
          <h2 className="capitalize text-xl font-bold px-5">Now showing</h2>
          <ul className="flex">
            <li><MovieOverview /></li>
            <li><MovieOverview /></li>
            <li><MovieOverview /></li>
          </ul>
        </article>
        <article>
          <h2 className="capitalize text-xl font-bold px-5">Popular</h2>
          <ul>
            <li><MoreMovieOverview /></li>
            <li><MoreMovieOverview /></li>
          </ul>
        </article>
      </main>

      <Navbar />

    </>

  );
}
