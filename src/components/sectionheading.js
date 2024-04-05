import { Merriweather_Sans } from 'next/font/google'
import SeeMore from './seemore'

const merriweather = Merriweather_Sans({
    weight: ['400', '600', '700', '800'],
    subsets: ['latin'],
})


//Giving section headings diffrent props with it, so that I can use the same component several times but changing out the title, classname and if there's a seeMore button

export default function SectionHeading({ heading, className, showSeeMore = true }) {
    return (
        <div className="flex justify-between my-5">
            <h2 className={`${merriweather.className} ${className} font-[700] text-lg capitalize dark:text-blue-200`}>{heading}</h2>
            {showSeeMore && <SeeMore />}
        </div>
    )
}