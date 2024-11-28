import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/LOGO.svg"



function Navbar({chartCount, setChartCount, bagIcon, setBagIcon, updateBagIcon}) {


    return (
        <nav>
            <img className="logo" src={logo} alt="isibcn logo" />
            <div className="nav-icons">
                <img src={bagIcon} alt="empty bag icon" />
            </div>
        </nav>
        
    )
}

export default Navbar;