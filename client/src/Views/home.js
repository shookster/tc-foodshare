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
        <div className="about-text-box">
          <p className="bold">Twin Cities Food Share strives to create a bridge between individuals or families who are in need of food items and those who are wanting to donate food directly to the community.</p> 
        </div>
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
