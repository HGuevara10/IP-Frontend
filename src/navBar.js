import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Sakila</h1>
      <nav className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/FilmsPage">Films</Link>
        <Link to="/Users">Customers</Link>
      </nav>
    </header>
  );
}

export default Navbar;
