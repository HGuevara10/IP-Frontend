import React from "react";
import Navbar from "./navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Top5List from "./Top5List";
import Genres from "./Genres";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/*Home Page*/}
          <Route 
            path="/" 
            element={
              <>
                <Top5List title={"Top 5 Movies"}/>
                <Top5List title={"Top 5 Actors"}/>
              </>
            }
          />
          {/*Genres Page*/}
          <Route 
            path="/Genres" 
            element={               
                <Genres />
            } 
          />
          {/*Actors Page*/}
          <Route 
            path="/Actors" 
            element={
              <div style={{ color: "white" }}>Actors content here</div>
            } 
          />
          {/*Users Page*/}
          <Route 
            path="/Users" 
            element={
              <div style={{ color: "white" }}>Users content here</div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;