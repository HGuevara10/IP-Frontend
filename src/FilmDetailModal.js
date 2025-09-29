import React, { useState } from "react";
import "./FilmDetailModal.css";

function FilmDetailModal({ isOpen, onClose, film }) {
  const [customerId, setCustomerId] = useState("");

  if (!isOpen || !film) return null;

  const handleRent = () => {
    alert(`Renting film ${film.title} to customer ${customerId} (not implemented yet)`);
    // Later you will POST to backend here
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>{film.title}</h2>
        <p><strong>Release Year:</strong> {film.release_year}</p>
        <p><strong>Rating:</strong> {film.rating}</p>
        <p><strong>Category:</strong> {film.category}</p>
        <p><strong>Rental Count:</strong> {film.rented}</p>
        <p><strong>Inventory Count:</strong> {film.inventory_count}</p>
        <p><strong>Description:</strong> {film.description}</p>

        {/* Customer ID input */}
        <div className="rent-section">
          <label htmlFor="customerId">Enter Customer ID:</label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            placeholder="Customer ID"
          />
          <button onClick={handleRent}>Rent Film</button>
        </div>
      </div>
    </div>
  );
}

export default FilmDetailModal;
