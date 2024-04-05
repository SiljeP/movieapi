"use client"

import Image from "next/image";
import Link from "next/link";

//SHOWING MORE INFO UNDER POPULAR MOVIES


export default function MoreMovieOverview() {
    return (
        <>

            <section className='pt-2 pr-2 pb-2'>
                <div className='flex flex-wrap row gap-1 '>
                    <Link href="/movie">
                        <img src="https://placehold.co/100x150" alt="placeholder" className='shadow-md shadow-black' />
                    </Link>
                    <div className='px-2 w-[40%]'>
                        <h1 className='font-bold pt-2'>This is a title</h1>
                        <div className='flex flex-row py-2 items-center'>
                            <Image
                                src="/images/star.svg"
                                width={24}
                                height={24}
                                alt="Icon of a star" />
                            <p className='text-xs text-slate-500 '>9,1/10 IMDb</p>
                        </div>
                        <div className='flex gap-3 py-2'>
                            <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                            <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                            <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                        </div>
                        <div className='flex flex-row gap-2 py-2 items-center'>
                            <Image
                                src="/images/clock.svg"
                                width={24}
                                height={24}
                                alt="Icon of a clock"
                            />
                            <p>1h 47m</p>
                        </div>

                    </div>
                </div>
            </section>


        </>

    );
}