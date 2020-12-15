import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./home.css";

function Home() {
  return (
    <div className="homePage">
      <Navbar />
      <div className="card aboutCard">
        <h5>About</h5>

        <div>
          <Link to="/map">
              <button type="button" className="btn btn-primary btn-md">
            Search{" "}
          </button>
          </Link>
      <Link to="/input">
      <button type="button" className="btn btn-success btn-md">
            Donate{" "}
          </button>
      </Link>

          
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
