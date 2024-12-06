import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieDescription from "./components/MovieDescription";
import movies from "./data/movies";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
