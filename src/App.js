import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react'

// random movies to load everytime you refresh the page
const randomMovies = [
  "Benjamin Button",
  "Forrest Gump",
  "Babes in Toyland",
  "The Matrix",
  "Earth Girls Are Easy",
  "Deadpool"

]


function App() {

  const apiKey = process.env.REACT_APP_API_KEY

  //State to hold movie data
  const [movie, setMovie] = useState(null)

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
     const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
     );
     // Parse JSON response into a javascript object
     const data = await response.json();

     //set the Movie state to the movie
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  }
// this run whenever the page loads
  useEffect(() => {
    getMovie(randomMovies[Math.floor(Math.random() * randomMovies.length)]);
  }, [])

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch

  return (
    <div className="App">
      <MovieDisplay movie={movie} />
      <Form moviesearch={getMovie} />

    </div>
  );
}

export default App;
