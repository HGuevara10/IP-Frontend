import React from "react";
import "./Box.css";

function Box({actor_name, rentals_or_actors, value}) {
    return(
        <div className="box">
            <h2>Name: {actor_name}</h2>
            <text>Number of {rentals_or_actors}: {value}</text>
        </div>
    );
}

export default Box;