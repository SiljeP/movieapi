"use client"

import DarkMode from "./darkmode"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6";



export default function Header() {

    return (
        <>
            <Link href="/" >
                <FaArrowLeft className='absolute top-0 left-0 mt-8 ml-5 text-2xl' />
            </Link>
            <div className="top-0 mt-8 mr-5 right-0 absolute">
                <DarkMode className=" " />
            </div>
        </>
    )
}



