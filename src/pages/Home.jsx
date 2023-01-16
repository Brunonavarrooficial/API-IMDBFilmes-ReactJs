import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css'

const movieURL = 'https://api.themoviedb.org/3/movie/'; 
const apiKey = 'api_key=752e8cd164fcb0421b51908ba5d7b857';

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${movieURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 &&
                 topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Home;