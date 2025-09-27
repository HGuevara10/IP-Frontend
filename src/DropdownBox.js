import React, { useEffect, useState } from "react";
import "./DropdownBox.css";

function DropdownBox() {

  const [selectedOption, setSelectedOption] = useState("Action");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/movies_by_genre/${selectedOption}`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => {
        console.error("Failed to fetch movies: ", err);
        setMovies([]);
      });
  }, [selectedOption]);

  const genres = [
    "Action", "Animation", "Children", "Comedy", "Documentary", "Drama", "Family",
    "Foreign", "Games", "Horror", "Music", "New", "Sci-Fi", "Sports", "Travel"
  ];

  return (
    <div className="dropdown-box">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="dropdown-select"
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="dropdown-content">
        <p>
          <strong>Number of movies:</strong> {movies.length}
        </p>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownBox;
