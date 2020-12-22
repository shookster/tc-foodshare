import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { isAuthenticated, useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          TC - Food Share
        </Link>
        <ul className="navbar-nav">{AuthenticationButton()}</ul>
      </nav>
    </div>
  );
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
