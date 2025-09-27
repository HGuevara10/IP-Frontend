import React from "react";
import "./Box.css";

function Box({movie_or_actor_name, rentals_or_actors, value}) {
    return(
        <div className="box">
            <h2>Name: {movie_or_actor_name}</h2>
            <text>Number Of {rentals_or_actors}: {value}</text>
        </div>
    );
}

export default Box;