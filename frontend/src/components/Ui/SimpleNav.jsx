import { Link } from "react-router-dom";
import "./Nav.css"; 
import logoImg from "../../assets/logo.png"
export default function Nav() {
   
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
                       
                    </ul>
                </div>
                
            </div>

            <div className="user-container">
             
                    
            </div>
        </nav>
    );
}