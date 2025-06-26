import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Assuming you have a CSS file for styling
import LoginButton from "./LogIn";
export default function Nav() {
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
                                Auth User 
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <LoginButton />
                </div>
            </div>
        </nav>
    );
}