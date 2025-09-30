import React, { useState } from "react";
import "./FilmDetailModal.css";

function FilmDetailModal({ isOpen, onClose, film, updateFilm }) {
  const [customerId, setCustomerId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen || !film) return null;

  const rentFilm = async () => {
    if (!customerId) {
      setError("Customer ID is required");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://127.0.0.1:5000/rent_film", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer_id: customerId, film_id: film.film_id }),
      });

      const data = await res.json();
      if (res.ok) {
        // Update with all three values: rented, inventory_count, and available
        updateFilm(film.film_id, data.rented, data.inventory_count, data.available);
        setCustomerId("");
      } else {
        setError(data.error || "Failed to rent film");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{film.title}</h2>
        <p><strong>Release Year:</strong> {film.release_year}</p>
        <p><strong>Rating:</strong> {film.rating}</p>
        <p><strong>Category:</strong> {film.category}</p>
        <p><strong>Times Rented:</strong> {film.rented ?? 0}</p>
        <p><strong>Available Copies:</strong> {film.available ?? 0}</p>
        <p><strong>Total Inventory:</strong> {film.inventory_count ?? 0}</p>
        <p><strong>Description:</strong> {film.description}</p>

        <div className="rent-section">
          <input
            type="text"
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
          <button onClick={rentFilm} disabled={loading}>
            {loading ? "Renting..." : "Rent"}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default FilmDetailModal;