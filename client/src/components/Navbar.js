import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return(
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link className="navbar-brand" href="#">Food Share</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" href="/home">Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">Login</Link>
                </li>
                 <li className="nav-item">
                     <Link className="nav-link" href="#">Sign up</Link>
                </li>
            </ul>
        </div>
        </nav>
    )
}
export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';

// function Navbar() {
//     return(
//         <div>
//             <nav className="navbar navbar-light bg-light">
//             <Link className="navbar-brand" to="/React-Portfolio/home">TC - Food Share</Link>
//                 <ul className="navbar-nav">
                     
//                          <LoginButton />
//                             <LogoutButton />
                      
//                  <Link className="nav-item active" to="">Search</Link>
//                  <Link className="nav-item active" to="">Login/Signup</Link>
//              </ul>
//              </nav>
//         </div>
//     )
// }

// export default Navbar;
