import React from "react";
import Navbar from "./navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top5List from "./Top5List";
import Genres from "./Genres";
import "./App.css";
import UsersPage from "./Users";
import Actors from "./Actors";

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
                <Top5List title={"Top 5 Movies"} category="Movies"/>
                <Top5List title={"Top 5 Actors"} category="Actors"/>
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
              <Actors />
            } 
          />
          {/*Users Page*/}
          <Route 
            path="/Users" 
            element={
              <UsersPage/>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;