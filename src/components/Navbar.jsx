import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/LOGO.svg"



function Navbar({ bagIcon }) {

    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [location]);

    return (
        <nav>
            <Link className="logo-link">
                <img className="logo" src={logo} alt="isibcn logo" />
            </Link>
            <div className="nav-icons">
                <img src={bagIcon} alt="empty bag icon"/>
            </div>
        </nav>
        
    )
}

export default Navbar;