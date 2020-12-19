import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link className="navbar-brand" to="/">
          TC - Food Share
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
