import React, { useState, useEffect } from 'react'
import axios from './../axios'
import YouTube from "react-youtube"
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const API_KEY = "df807610c179ca594232f40c21b11d46";

    const base_Url = "https://image.tmdb.org/t/p/original/";
    const opts = {
        height: "390",
        width: "100%",
        playerVars: { autoplay: 1 }
    }

    // Include fetchUrl in the dependencies of this useEffect hook because whenever we are using a variable from outside that particular useEffect hook then we have to have to add that variable in the dependency of that hook
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
        };
        fetchData();
    }, [fetchUrl])

    const handleClick = (movie) => {
        console.log("Trailer url before is " + trailerUrl);
        if (trailerUrl)
            setTrailerUrl("");
        else {
            const fetchTrailerUrl = async () => {
                const response = await axios.get(`/movie/${movie.id}?api_key=${API_KEY}&append_to_response=videos`);
                const urlParams = response.data.videos.results[0].key;
                console.log(urlParams);
                if(urlParams == trailerUrl)
                    setTrailerUrl("") ;
                else
                    setTrailerUrl(urlParams);
                console.log("Trailer url after is " + trailerUrl);
            }
            fetchTrailerUrl();

            // movieTrailer(movie.name || "")
            // .then(url => {
            //     const urlParams = new URL(url).search() ;
            //     setTrailerUrl(urlParams.get("v"));
            // }).catch(error => console.log(error)) ;
            // movieTrailer(null, { tmdbId: movie.id })
            //     .then((url) => {
            //         console.log("url is " + url);
            //         const urlParams = new URLSearchParams(new URL(url).search);
            //         console.log("urlParams" + urlParams);
            //         setTrailerUrl(urlParams.get("v"));
            //     })
            //     .catch((error) => console.log(error));
        }
    }
    // src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`
    // console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {/* Several Row poster */}
                {movies.map((movie) => {
                    return (
                        <img
                            key={movie.id}
                            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                            src={base_Url + movie.poster_path}
                            alt={movie.original_title}
                            onClick={() => handleClick(movie)} />
                    )
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
        </div>
    )
}

export default Row