import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          TC - Food Share
        </Link>
        <ul className="navbar-nav">
          <Link className="nav-item active" to="">
            Login/Signup
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
