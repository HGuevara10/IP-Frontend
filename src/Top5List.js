import React, { useEffect, useState } from "react";
import Box from "./Box";
import "./Top5List.css";

function Top5List({ title, category }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const endpoint =
      category === "Movies"
        ? "http://127.0.0.1:5000/top5_movies"
        : "http://127.0.0.1:5000/top5_actors"; 

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (category === "Actors") {
          const formattedActors = data.map((actor) => ({
            actor_id: actor.actor_id,
            name: actor.first_name + " " + actor.last_name,
            movie_count: actor.movie_count,
          }));
          setItems(formattedActors);
        } else {
          setItems(data);
        }
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="boxes-container">
        {items.map((item, index) => (
          <Box key={index} data={item} category={category} />
        ))}
      </div>
    </>
  );
}

export default Top5List;
