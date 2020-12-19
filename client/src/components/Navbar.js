import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">TC - Food Share</Link>
                <ul className="navbar-nav">
                     
                         <LoginButton />
                            <LogoutButton />
                      
                 <Link className="nav-item active" to="">Search</Link>
                 <Link className="nav-item active" to="">Login/Signup</Link>
             </ul>
             </nav>
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
