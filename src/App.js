import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox"


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("st");

const getMovieRequest = async () => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9c5b9a3b`
  const response = await fetch(url);
  const responseJson = await response.json();
  if (responseJson.Search){
    setMovies(responseJson.Search);
  }

};

useEffect(() => {
  getMovieRequest();
}, [searchValue]);

  return(
   <div className='container-fluid movie-app'>
    <div className="row d-flex align-items-center mt-4 mb-4">
      <MovieListHeading heading="Movies"/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
  </div>
  )
}

export default App;
