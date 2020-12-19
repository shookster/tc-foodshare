import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./home.css";
import LoginButton from "../components/LoginButton";

function Home() {
  return (
    <body className="containerPage">
      <Navbar />
      <div className="about">
        <h5>About</h5>

        <div>
          <Link to="/map">
            <button type="button" className="btn btn-primary btn-md">
              Search{" "}
            </button>
          </Link>
          <Link to="/input">
            <LoginButton />
          </Link>
        </div>
      </div>

      <Footer />
    </body>
  );
}

export default Home;
