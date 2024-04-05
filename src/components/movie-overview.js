"use client"

import Image from "next/image";
import Link from "next/link";

export default function MovieOverview() {
    return (
        <>
            <section className='pt-2 pr-2 pb-2 flex-shrink-0 w-[143px]'>
                <Link href="/movie">
                    <img src="https://placehold.co/120x170" alt="placeholder" className='shadow-md shadow-black' />
                </Link>

                <h1 className='font-bold pt-2'>This is a title</h1>
                <div className='flex gap-1 items-center'>
                    <Image
                        src="/images/star.svg"
                        width={24}
                        height={24}
                        alt="Icon of a star"
                    />
                    <p className='text-xs text-slate-500 '>9,1/10 IMDb</p>
                </div>
            </section>


        </>

    );
}