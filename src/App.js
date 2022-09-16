import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([{
    "Title": "Lego Star Wars: All-Stars",
    "Year": "2018",
    "imdbID": "tt9297164",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTEwMzhiNjUtOTA3My00MDljLTgxMmItYzdiMTIwYjRjZTM0XkEyXkFqcGdeQXVyMjA0MzE3ODI@._V1_SX300.jpg"
},
{
    "Title": "The Stars of 'Star Wars': Interviews from the Cast",
    "Year": "1999",
    "imdbID": "tt0214158",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI3NzcyNTU1MV5BMl5BanBnXkFtZTcwNzI0MDAyMQ@@._V1_SX300.jpg"
},
{
    "Title": "Star Wars Lost Stars",
    "Year": "2022–",
    "imdbID": "tt15109530",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTU1MzljNDAtMThjMi00Y2FmLWJkZTItZmU1ZWRjNjEwNzg0XkEyXkFqcGdeQXVyMTI2MTIzOTU5._V1_SX300.jpg"
},
]);

const getMovieRequest = async () => {
  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=9c5b9a3b"
  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);

};

useEffect(() => {
  getMovieRequest();
}, [])

  return(
   <div className='container-fluid movie-app'>
    <div className='row'>
      <MovieList movies={movies} />
    </div>
  </div>
  )
}

export default App;
