import React from "react";
import "./Genres.css"
import TabbedBox from "./TabbedBox";
import DropdownBox from "./DropdownBox";

function Genres() {
    return(
        <div className="genres">
            <h1 >
                Genres
            </h1>
            <DropdownBox />
        </div>
    );
}

export default Genres;