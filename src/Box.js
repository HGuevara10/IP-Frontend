import React, { useState } from "react";
import ActorDetailModal from "./ActorDetailModal";
import MovieDetailModal from "./MovieDetailModal"; // new for movies
import "./Box.css";

function Box({ data, category }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="box" onClick={() => setModalOpen(true)}>
        <h2>{category === "Movies" ? data.title : data.name}</h2>
        <p>
          {category === "Movies"
            ? `Number of Rentals: ${data.rented}`
            : `Movies Starred In: ${data.movie_count}`}
        </p>
      </div>

      {category === "Actors" && (
        <ActorDetailModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          actor={data}
        />
      )}

      {category === "Movies" && (
        <MovieDetailModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          movie={data}
        />
      )}
    </>
  );
}

export default Box;
