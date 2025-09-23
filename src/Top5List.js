
import React from "react";
import Box from "./Box";
import "./Top5List.css";

function Top5List({title}) {
    return(
        <>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="boxes-container"> 
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
        </>
    );
}

export default Top5List;