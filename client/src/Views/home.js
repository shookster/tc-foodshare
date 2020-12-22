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
      <div className="about-text-box">
        <div>
          <p className="bold">Twin Cities Food Share strives to create a bridge between individuals or families who are in need of food items and those who are wanting to donate food directly to the community.</p>
          <p>
          If you would like to see where and what type of food is available around the Twin Cities through this network, please click on the Search button.  The page will bring up a Google Map with list of locations to left displaying address, food category, and description of food available at each location.
          </p>
          <p>
          If you have food items to share and would like to donate to the community utilizing this website, please click on the Donate button.  For first-time donors, a page will be brought up where you can Sign Up as a site donor by creating a user (email address) and password.  For returning donors, simply log in with your user (email address) and password.  Once logged in, the page presented will allow you to input address of food location, choose categories of food available, and provide a description of items available for those seeking food.
          </p> 
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
