"use client"

import getIds from "@/actions/get-ids"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import SectionHeading from "@/components/sectionheading"
import { useEffect } from "react"

export default function FavouritePage() {

    useEffect(function () {
        getIds().then(ids => console.log(ids))
    }, [])

    return (
        <>
            <div>
                <Header className="dark:text-white" />
            </div>
            <article className="mt-20 mx-5">
                <SectionHeading heading="favourites" showSeeMore={false} />
            </article>

            <Navbar />
        </>

    )
}
