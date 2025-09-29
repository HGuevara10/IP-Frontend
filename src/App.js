import React from "react";
import Navbar from "./navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top5List from "./Top5List";
import "./App.css";
import UsersPage from "./Users";
import FilmsPage from "./FilmsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route 
            path="/" 
            element={
              <>
                <Top5List title={"Top 5 Movies"} category="Movies"/>
                <Top5List title={"Top 5 Actors"} category="Actors"/>
              </>
            }
          />
          {/* Films Page */}
          <Route path="/FilmsPage" element={<FilmsPage />} />
          {/* Users Page */}
          <Route path="/Users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
