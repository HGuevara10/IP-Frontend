import React from "react";
import "./Genres.css"
import DropdownBox from "./DropdownBox";

function Genres() {
    return(
        <div className="genres">
            <h1 >
                Films
            </h1>
            <DropdownBox />
        </div>
    );
}

export default Genres;