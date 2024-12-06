import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  // Find the movie by its ID
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate("/")} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Back to Home
      </button>
    </div>
  );
};

export default MovieDescription;
