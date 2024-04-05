"use client"

import Cast from "@/components/cast";
import SectionHeading from "@/components/sectionheading";
import SeeMore from "@/components/seemore";
import Image from "next/image";


//Single movie detail overview
export default function Movie() {
    return (
        <>
            <Image src="/images/spiderman.png"
                width={500}
                height={300}
                alt="Icon of a star" className='relative' />
            <article className="bg-white px-5 rounded-t-lg absolute -mt-[70%]">
                <h1 className="pt-5 text-black font-bold">Insert title here</h1>
                <div className='flex gap-1 items-center'>
                    <Image
                        src="/images/star.svg"
                        width={24}
                        height={24}
                        alt="Icon of a star"
                    />
                    <p className='text-xs text-slate-500 '>9,1/10 IMDb</p>
                </div>
                <div className='flex gap-3 py-2'>
                    <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                    <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                    <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-1">
                    <h3 className="col-start-1 row-start-1 text-xs text-slate-500">Length</h3>
                    <p className="col-start-1 row-start-2 text-xs">2h 28 min</p>
                    <h3 className="col-start-2 row-start-1 text-xs text-slate-500">Language</h3>
                    <p className="col-start-2 row-start-2 text-xs">English</p>
                    <h3 className="col-start-3 row-start-1 text-xs text-slate-500">Rating</h3>
                    <p className="col-start-3 row-start-2 text-xs">PG-13</p>
                </div>
                <SectionHeading heading="description" showSeeMore={false} />
                <p className="text-slate-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A reprehenderit cum neque vel, ad vitae repellat soluta, nobis facere quisquam hic velit! Enim dolore fugit ipsa, quo a nihil provident nam eius sit debitis distinctio impedit quaerat alias unde corrupti quis vel similique ullam temporibus nulla inventore placeat saepe doloribus.</p>
                <SectionHeading heading="cast" />
                <div className="flex pt-4">
                    <Cast />
                    <Cast />
                    <Cast />

                </div>

            </article>

        </>
    );
}
