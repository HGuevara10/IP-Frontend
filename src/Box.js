import React from "react";
import "./Box.css";

function Box({actor_name}) {
    return(
        <div className="box">
            <h2>Name: {actor_name}</h2>
        </div>
    );
}

export default Box;