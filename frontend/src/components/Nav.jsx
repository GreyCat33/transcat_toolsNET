import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Assuming you have a CSS file for styling
import LoginButton from "./LogIn";
import LogoutButton from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import UserCircle from "./UserCircle"; // Assuming you have a UserCircle component
export default function Nav() {
    const { isAuthenticated, user, logout } = useAuth0();
    return (
        <nav>
            <div className="Nav-Right-Container">
                <Link to="/" className="navbar-brand">
                    <img src="./src/assets/logo.png" alt="Logo" className="logo" width={"150px"} style={{objectFit:"contain", padding:"0 20px"}}/>
                </Link>
                
                <div id="navbarNav">
                    <ul className="navLinks-container">
                        <li>
                            <Link className="navbar-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-link"  to="/users">
                                Users
                            </Link>
                        </li>
                         <li>
                            <Link className="navbar-link"  to="/authuser">
                                User Info
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-link"  to="/userreport">
                               User Report
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-link"  to="/pricing">
                               Pricing Tests
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>

            <div className="user-container">
                    
                    {isAuthenticated && <UserCircle />}
                    {/* // we check to see if we are authenticated */}
                    {isAuthenticated && ( 
                       <LogoutButton />
                    )
                    }
                </div>
        </nav>
    );
}