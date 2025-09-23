import React, { useState } from "react";
import "./DropdownBox.css";

function DropdownBox() {
  const [selectedOption, setSelectedOption] = useState("Action");

  // Fake movie dataset (replace with API/db later)
  const moviesByGenre = {
    Action: ["Die Hard", "Mad Max: Fury Road", "John Wick"],
    Animation: ["Toy Story", "Finding Nemo", "Shrek"],
    Children: ["The Lion King", "Frozen", "Moana"],
    Classic: ["Casablanca", "Gone with the Wind", "Citizen Kane"],
    Comedy: ["The Hangover", "Superbad", "Step Brothers"],
    Documentary: ["Free Solo", "Blackfish", "The Last Dance"],
    Drama: ["The Godfather", "Fight Club", "Forrest Gump"],
    Family: ["Home Alone", "Mary Poppins", "Jumanji"],
    Foreign: ["Parasite", "Amélie", "Pan’s Labyrinth"],
    Games: ["Jumanji", "Ready Player One", "Tron"],
    Horror: ["The Exorcist", "Get Out", "A Quiet Place"],
    Music: ["Bohemian Rhapsody", "La La Land", "Whiplash"],
    New: ["Oppenheimer", "Dune: Part Two", "Barbie"],
    "Sci-Fi": ["Interstellar", "The Matrix", "Blade Runner"],
    Sports: ["Rocky", "Moneyball", "Remember the Titans"],
    Travel: ["Into the Wild", "The Beach", "Eat Pray Love"],
  };

  const movies = moviesByGenre[selectedOption] || [];

  return (
    <div className="dropdown-box">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="dropdown-select"
      >
        {Object.keys(moviesByGenre).map((genre) => (
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
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownBox;
