import React from "react";
import "./FilmsPage.css";
import Films from "./Films";

function FilmsPage() {
    return (
        <div className="films-page">
            <h1>Films</h1>
            <Films />
        </div>
    );
}

export default FilmsPage;
