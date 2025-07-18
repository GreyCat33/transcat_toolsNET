import { Link } from "react-router-dom";
import "./Nav.css"; 
import { useAuth0 } from "@auth0/auth0-react";
import UserCircle from "./User Info/UserCircle"; 
import logoImg from "../assets/logo.png"
export default function Nav() {
    const { isAuthenticated,user} = useAuth0();
    return (
        <nav>
            <div className="nav-right-container">
                <Link to="/" className="navbar-brand">
                    <img src={logoImg} alt="Logo" className="logo" width={"150px"} style={{objectFit:"contain", padding:"0 20px"}}/>
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
                {isAuthenticated && user.nickname}
                {isAuthenticated && <UserCircle />}
                    
            </div>
        </nav>
    );
}