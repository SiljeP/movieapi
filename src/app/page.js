"use client"
import Darkmode from "@/components/darkmode";
import SeeMore from "@/components/seemore";
import MoreMovieOverview from "@/components/more-movie-overview";
import MovieOverview from "@/components/movie-overview";
import Navbar from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import SectionHeading from "@/components/sectionheading";


export default function Home() {
  return (
    <NextUIProvider>
      <header className=" mx-5 grid grid-cols-3 items-center">
        <h1 className="col-start-2 text-center py-5 text-2xl font-bold">MyMovies</h1>
        <div className="col-start-3 right-0 absolute">
          <Darkmode className=" " />
        </div>
      </header>
      <main className="mx-5">
        <article>

          <SectionHeading heading="now showing" />

          <ul className="flex overflow-x-auto">
            <li><MovieOverview /></li>
            <li><MovieOverview /></li>
            <li><MovieOverview /></li>
            <li><MovieOverview /></li>
            <li><MovieOverview /></li>
            <li><MovieOverview /></li>
            <li><MovieOverview /></li>
          </ul>
        </article>
        <article className="pt-5">
          <SectionHeading heading="popular" />
          <ul>
            <li><MoreMovieOverview /></li>
            <li><MoreMovieOverview /></li>
            <li><MoreMovieOverview /></li>
            <li><MoreMovieOverview /></li>
          </ul>
        </article>
      </main>

      <Navbar />

    </NextUIProvider>

  );
}
