import React from "react";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Salkia</h1>
      <div className="nav-items">
        <a href="#home">Home</a>
        <a href="#films">Films</a>
        <a href="#about">Genre</a>
        <a href="#users">Users</a>
      </div>
    </nav>
  );
}

export default Navbar;
