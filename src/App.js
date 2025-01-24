import { useEffect, useState } from 'react';
//4cdeb3fb
import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9456966b';

const App = () => {
    const [movies, setMovies] = useState([]); // State for storing movie data from API
    const [searchTerm, setSearchTerm] = useState(''); // State for tracking the input value in the search bar

    const searchMovies = async (title) => { 
        // this searchMovies function is going to accept a search title as asynchronous data
        const response = await fetch(`${API_URL}&s=${title}`); // this line calls our API
        const data = await response.json();

        setMovies(data.Search); // Update the movies state with the search results
    };

    useEffect(() => {
        searchMovies('Spiderman'); // Perform an initial search when the app loads
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    value={searchTerm} // Bind the input value to searchTerm state
                    onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm state on user input
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} // Trigger a search with the current searchTerm
                />
            </div>

            {movies?.length > 0 ? ( // Check if there are movies in the state
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} /> // Render each movie as a MovieCard component
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
