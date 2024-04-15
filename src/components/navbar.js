"use client"
import { PiFilmReel } from "react-icons/pi";
import { BsTicket } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import Link from "next/link";


export default function Navbar() {
    return (
        <>
            <nav className='fixed bottom-0 w-full pb-3 shadow-[0px_-4px_18px_3px_#00000024] bg-white dark:bg-black dark:shadow-[0px_-2px_18px_2px_#4A5568]'>
                <ul className='flex justify-evenly items-center p-3' >
                    <li>
                        <Link href="/" >
                            <PiFilmReel className="text-2xl text-black dark:text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/signin" >
                            <BsTicket className="text-2xl text-black dark:text-white rotate-90" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/favourites" >
                            <FaRegBookmark className="text-xl text-black dark:text-white" />
                        </Link>
                    </li>
                </ul>
            </nav>

        </>

    );
}