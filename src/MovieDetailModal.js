import React from "react";
import "./ActorDetailModal.css";

function MovieDetailModal({ isOpen, onClose, movie }) {
  if (!isOpen || !movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{movie.title}</h2>
        <p><strong>Release Year:</strong> {movie.release_year}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Rental Count:</strong> {movie.rented}</p>
        <p><strong>Description:</strong> {movie.description}</p>
      </div>
    </div>
  );
}

export default MovieDetailModal;