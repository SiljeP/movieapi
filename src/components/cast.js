"use client"
import { useState, useEffect } from "react"
import Image from "next/image";

export default function Cast({ params }) {
    const KEY = "2c721e0d8526bcfb16eb555b28fb11a0"
    const [casts, setCasts] = useState([])

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
                setCasts(data?.credits.cast)
            })
            .catch(err => console.error(err))

    }, [])

    return (
        //splice shows only the first 4 in the array, seemore button not working yet
        <div className="grid grid-cols-4 " >
            {
                casts.slice(0, 4).map((cast) => (
                    <div div key={cast.credit_id} className="flex flex-col" >
                        <Image
                            src={`https://image.tmdb.org/t/p/w500/${cast && cast?.profile_path}`}
                            alt="actor profile picture"
                            className="border rounded-lg mx-auto"
                            width={72}
                            height={72} />
                        <h2 className="text-sm  dark:text-blue-200 text-center">{cast?.name}</h2>
                    </div>
                ))
            }
        </div >

    )
}