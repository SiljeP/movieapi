"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faTicketSimple, faBookmark } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <>
            <nav className='fixed bottom-0 w-full pb-3 shadow-[0px_-4px_18px_3px_#00000024] bg-white'>
                <ul className='flex justify-evenly p-3' >
                    <li><FontAwesomeIcon icon={faFilm} className='text-l' /></li>
                    <li><FontAwesomeIcon icon={faTicketSimple} className='text-l rotate-90' /></li>
                    <li><FontAwesomeIcon icon={faBookmark} className='text-l' /></li>
                </ul>
            </nav>

        </>

    );
}