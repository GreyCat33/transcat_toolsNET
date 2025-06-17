import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
        <div>
            <a>
            Transcat Tools
            </a>
            <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span ></span>
            </button>
            <div  id="navbarNav">
            <ul>
                <li>
                <Link aria-current="page" to="/">
                    Home
                </Link>
                </li>
                <li>
                <Link to="/users">
                    Users
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
    }