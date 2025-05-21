import React from 'react';
import './App.css';
import MovieSearch from "./components/organisms/MovieSearch";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieDetail from "./components/organisms/MovieDetail";
import FavouriteMovies from "./components/organisms/FavouriteMovies";

function App() {
  return (
          <Router>
              <Routes>
                  <Route path="/" element={<MovieSearch/>} />
                  <Route path="/detail/:id" element={<MovieDetail />} />
                  <Route path="/favorites" element={<FavouriteMovies/>}/>
              </Routes>
          </Router>
  );
}

export default App;
