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

  const fetchFilms = async (pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `http://127.0.0.1:5000/all_films?page=${pageNum}&limit=${limit}`
      );
      setFilms(res.data.data);
      setPage(res.data.page);
      setTotal(res.data.total);
    } catch (err) {
      console.error(err);
      setError("Failed to load films. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilms(page);
  }, []);

  const handlePrev = () => {
    if (page > 1) fetchFilms(page - 1);
  };

  const handleNext = () => {
    if (page * limit < total) fetchFilms(page + 1);
  };

  const updateFilm = (film_id, rented, inventory_count, available) => {
    setFilms((prev) =>
      prev.map((f) =>
        f.film_id === film_id
          ? { ...f, rented, inventory_count, available }
          : f
      )
    );
  };

  return (
    <div className="films-container">
      {loading && <p style={{ color: "white" }}>Loading films...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && films.length === 0 && (
        <p style={{ color: "white" }}>No films found.</p>
      )}

      {!loading && !error && films.length > 0 && (
        <div className="films-list">
          {films.map((film) => (
            <div
              key={film.film_id}
              className="film-row"
              onClick={() => setSelectedFilm(film)}
            >
              <span>
                {film.title} ({film.release_year})
              </span>
              <span>
                Available: {film.available ?? 0} / Total: {film.inventory_count ?? 0}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>
        <span className="page-number">{page}</span>
        <button onClick={handleNext} disabled={page * limit >= total}>
          Next
        </button>
      </div>

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
