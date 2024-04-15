"use client"

import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SigninPage() {
    const [token, setToken] = useState(null)

    async function createToken() {
        const response = await Axios.get("https://api.themoviedb.org/3/authentication/token/new", {
            headers: {
                Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
            }
        })
        setToken(response.data.request_token);
    }

    useEffect(function () {
        createToken()
    }, [])

    return (
        <>
            <Header className="dark:text-white" />
            <div className="flex h-screen justify-center items-center">
                <Link
                    className="text-2xl text-indigo-100 dark:text-blue-200  bg-indigo-400 rounded-full px-3.5 py-3  "
                    href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/approved`}
                >
                    Sign in with TMDB
                </Link>
            </div>
            <Navbar />
        </>
    )
}
