import { FaStar } from "react-icons/fa";

export default function ImdbRating({ rating }) {
    return <p className="text-gray-500"><FaStar className="text-yellow-400 inline" /> {rating}/10 IMDB</p>
}
