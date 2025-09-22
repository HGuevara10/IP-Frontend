import React from "react";
import Navbar from "./navBar";
import "./App.css";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div  className="title">
        <h1>Top 5 Actors</h1>
      </div>
      <div className="boxes-container"> 
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
      </div>
    </div>
  );
}

export default App;
