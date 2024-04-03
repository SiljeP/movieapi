"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



export default function MovieOverview() {
    return (
        <>
            <section className='p-4'>
                <img src="https://placehold.co/120x170" alt="placeholder" className='shadow-md shadow-black' />
                <h1 className='font-bold pt-2'>This is a title</h1>
                <div className='flex gap-1 items-center'>
                    <FontAwesomeIcon icon={faStar} className='text-xs text-yellow-500 px-0.5' />
                    <p className='text-xs text-slate-500 '>9,1/10 IMDb</p>
                </div>


            </section>


        </>

    );
}