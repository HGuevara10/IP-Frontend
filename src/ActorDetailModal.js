import React, { useEffect, useState } from "react";
import "./ActorDetailModal.css";

function ActorDetailModal({ isOpen, onClose, actor }) {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    if (actor?.actor_id) {
      fetch(`http://127.0.0.1:5000/actor_top_movies/${actor.actor_id}`)
        .then((res) => res.json())
        .then((data) => setTopMovies(data))
        .catch((err) => console.error(err));
    }
  }, [actor]);

  if (!isOpen || !actor) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{actor.name}</h2>
        <p><strong>Total Movies:</strong> {actor.movie_count}</p>

        <h3>Top 5 Most Rented Movies</h3>
        <ul>
          {topMovies.map((movie, index) => (
            <li key={index}>
              {movie.title}: {movie.rental_count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActorDetailModal;
