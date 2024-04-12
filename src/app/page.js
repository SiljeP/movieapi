"use client"
import Darkmode from "@/components/darkmode";
import Navbar from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import SectionHeading from "@/components/sectionheading";
import NowShowing from "@/components/nowshowing";
import PopularMovies from "@/components/popular";


export default function Home() {
  return (
    <NextUIProvider>
      <header className=" mx-5 grid grid-cols-3 items-center">
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
        <article className="pt-5">
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
