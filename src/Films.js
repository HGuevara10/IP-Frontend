import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmDetailModal from "./FilmDetailModal";
import "./Films.css";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const limit = 20;

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`http://127.0.0.1:5000/all_films?page=${page}&limit=${limit}`);
        setFilms(res.data.data);
        setTotal(res.data.total);
      } catch (err) {
        console.error(err);
        setError("Failed to load films. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, [page]);

  const handlePrev = () => setPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setPage(prev => prev + 1);

  // Update rented/inventory/available counts after renting
  const updateFilm = (film_id, rented, inventory_count, available) => {
    setFilms(prev =>
      prev.map(f => f.film_id === film_id ? { ...f, rented, inventory_count, available } : f)
    );
  };

  return (
    <div className="films-container">
      {loading && <p style={{ color: "white" }}>Loading films...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && films.length === 0 && <p style={{ color: "white" }}>No films found.</p>}

      {!loading && !error && films.length > 0 && (
        <div className="films-list">
          {films.map(film => (
            <div
              key={film.film_id}
              className="film-row"
              onClick={() => setSelectedFilm(film)}
            >
              <span>{film.title} ({film.release_year})</span>
              <span>Available: {film.available ?? 0} / Total: {film.inventory_count ?? 0}</span>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={page === 1}>Previous</button>
        <span style={{ margin: "0 10px", color: "white" }}>Page {page}</span>
        <button onClick={handleNext} disabled={page * limit >= total}>Next</button>
      </div>

      {/* Film Modal */}
      {selectedFilm && (
        <FilmDetailModal
          isOpen={!!selectedFilm}
          onClose={() => setSelectedFilm(null)}
          film={selectedFilm}
          updateFilm={updateFilm}
        />
      )}
    </div>
  );
};

export default Films;