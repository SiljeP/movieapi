"use client"

import Image from 'next/image';

export default function Navbar() {
    return (
        <>
            <nav className='fixed bottom-0 w-full pb-3 shadow-[0px_-4px_18px_3px_#00000024] bg-white'>
                <ul className='flex justify-evenly p-3' >
                    <li><Image
                        src="/images/movie.svg"
                        width={24}
                        height={24}
                        alt="Icon of an old film roll" />
                    </li>
                    <li>
                        <Image
                            src="/images/ticket.svg"
                            width={24}
                            height={24}
                            alt="Icon of an old cinema ticket"
                            className='rotate-90' />
                    </li>
                    <li>
                        <Image
                            src="/images/bookmark.svg"
                            width={24}
                            height={24}
                            alt="Icon of a bookmark"
                        />
                    </li>
                </ul>
            </nav>

        </>

    );
}