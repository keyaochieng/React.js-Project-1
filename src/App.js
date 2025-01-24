import {useEffect} from 'react';
//4cdeb3fb
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9456966b';

const movie1 ={
    "Title": "Expelled",
    "Year": "2014",
    "imdbID": "tt4189442",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0MDY2MTIxOV5BMl5BanBnXkFtZTgwNjM4NTM0MzE@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async(title) => { //this searchMovies function is going to accepts a search title as asynchronized data
        const response = await fetch(`${API_URL}&s=${title}`); // this line calls our API
        const data = await response.json();

        console.log(data.Search);//we can use.search to only show titles since in line 9 we are using title to search
    }

    useEffect(()=>{
        searchMovies('Expelled');

    },[]);

    return(
        <div className='app'>
            <h1>Movieflix</h1>

            <div className="search">
                <input
                placeholder='Enter Movie'
                value=''
                onChange={() => {}}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
                />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster} alt={movie1.Title}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default App;