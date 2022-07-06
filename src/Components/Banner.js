import React, { useState, useEffect } from 'react'
import axios from './../axios'
import requests from './../request'

function Banner() {
    const [movie, setMovie] = useState([]);
    const imgUrl = "url(https://image.tmdb.org/t/p/original/" + movie.backdrop_path + ")";
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(requests[0].fetch);
            console.log(requests[0].title);
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
        }
        fetchData();
    }, [])
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div className="banner"
            style={
                { backgroundImage: imgUrl }
            }>
            <div className="bannerContent">
                <h1 className="bannerTitle">
                    {movie.title || movie.name || movie.original_name}
                </h1>
                <div className="bannerBtns">
                    <button className="bannerBtn">Play</button>
                    <button className="bannerBtn">My List </button>
                </div>
                <div className="bannerDescription">{truncate(movie.overview, 150)}</div>
            </div>
            <div className="bannerFadeBottom">
            </div>
        </div>

    )
}

export default Banner;