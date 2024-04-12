

export default function GenreFetch() {
    const KEY = "2c721e0d8526bcfb16eb555b28fb11a0"

    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${KEY}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (
        <>
        </>
    )
}