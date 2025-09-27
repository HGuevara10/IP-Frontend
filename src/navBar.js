import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Sakila</h1>
      <nav className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/Genres">Genres</Link>
        <Link to="/Actors">Actors</Link>
        <Link to="/Users">Users</Link>
      </nav>
    </header>
  );
}

export default Navbar;
