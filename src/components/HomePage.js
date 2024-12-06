import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: "10px", textAlign: "center" }}>
            <img
              src={movie.posterURL}
              alt={movie.title}
              style={{ width: "200px", borderRadius: "10px" }}
            />
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "blue" }}>
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
