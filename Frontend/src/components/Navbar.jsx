import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          CRUD App
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                <FaPlus /> Add Entry
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;