"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons'
//SHOWING MORE INFO UNDER POPULAR MOVIES


export default function MoreMovieOverview() {
    return (
        <>

            <section className='p-4'>
                <div className='flex flex-wrap row gap-1'>
                    <img src="https://placehold.co/120x170" alt="placeholder" className='shadow-md shadow-black' />
                    <div className='px-2'>
                        <h1 className='font-bold pt-2'>This is a title</h1>
                        <div className='flex flex-row py-2 items-center'>
                            <FontAwesomeIcon icon={faStar} className='text-xs text-yellow-500 px-0.5 ' />
                            <p className='text-xs text-slate-500 '>9,1/10 IMDb</p>
                        </div>
                        <div className='flex gap-3 py-2'>
                            <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                            <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                            <div className='bg-indigo-200 rounded-full px-3 py-1.5  text-indigo-400 uppercase text-xs '>genre</div>
                        </div>
                        <div className='flex flex-row gap-2 py-2 items-center'>
                            <FontAwesomeIcon icon={faClock} className='text-xs px-0.5' />
                            <p>1h 47m</p>
                        </div>

                    </div>
                </div>
            </section>


        </>

    );
}