import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm">
      {/* Logo Only */}
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img
  src="/UF-logo.png"
  alt="Academy Logo"
  style={{
    height: "60px",           // increased size
    width: "60px",
    objectFit: "contain",
    borderRadius: "50%",
    alignSelf: "center",      // keeps it centered in navbar
    marginTop: "-7px",        // optional: adjust if navbar height increases
    marginBottom: "-7px"
  }}
/>
      </NavLink>

      {/* Toggle button for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links as buttons */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn btn btn-light px-4 ${isActive ? "fw-bold border-2" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `btn btn btn-light px-4 ${isActive ? "fw-bold border-2" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              to="/teachers"
              className={({ isActive }) =>
                `btn btn btn-light px-4 ${isActive ? "fw-bold border-2" : ""}`
              }
            >
              Teachers
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
