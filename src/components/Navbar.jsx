import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/LOGO.svg"



function Navbar({chartCount, setChartCount, bagIcon, setBagIcon, updateBagIcon}) {


    return (
        <nav>
            <img className="logo" src={logo} alt="isibcn logo" />
            <div className="nav-icons">
                <Link to={"/"}>
                    <img src={bagIcon} alt="empty bag icon" />
                </Link>
            </div>
        </nav>
        
    )
}

export default Navbar;