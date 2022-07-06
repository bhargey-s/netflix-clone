const API_KEY = "df807610c179ca594232f40c21b11d46";

const requests = [
    {

        fetch: `/discover/tv?api_key=${API_KEY}&with_networks=123`, title:"NETFLIX ORIGINALS", id:1
    },
    {
        fetch: `/trending/all/week?api_key=${API_KEY}&language=en-US`, title:"Trending Now", id:2
    },
    {

        fetch: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, title:"Top Rated", id:3
    },
    {

        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=28`, title : "Action Movies", id:4
    },
    {

        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=35`, title : "Comedy Movies", id:5
    },
    {

        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=27`, title : "Horror Movies", id:6
    },
    {

        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, title : "Romance Movies", id:7
    },
    {

        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=99`, title: "Documentaries", id:8
    }

]

export default requests