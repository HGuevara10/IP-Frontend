import React, { useEffect, useState } from "react";
import FilmDetailModal from "./FilmDetailModal";
import "./Films.css";

function Films() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 20; // films per page

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/all_films?page=${page}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.films);
        setTotal(data.total);
      })
      .catch((err) => console.error(err));
  }, [page]);

  const openModal = (film) => {
    setSelectedFilm(film);
    setModalOpen(true);
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="films-container">
      <div className="films-list">
        {films.map((film) => (
          <div
            key={film.film_id}
            className="film-row"
            onClick={() => openModal(film)}
          >
            <h3>{film.title}</h3>
            <p>Film ID: {film.film_id}</p>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>

      {selectedFilm && (
        <FilmDetailModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          film={selectedFilm}
        />
      )}
    </div>
  );
}

export default Films;
