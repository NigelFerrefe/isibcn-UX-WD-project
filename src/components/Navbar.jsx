import "./Navbar.css";
import logo from "../assets/LOGO.svg"
import emptyBagIcon from "../assets/EMPTYBAG.svg"


function Navbar() {
    return (
        <nav>
            <img className="logo" src={logo} alt="isibcn logo" />
            <div className="nav-icons">
                <img src={emptyBagIcon} alt="empty bag icon" />
            </div>
        </nav>
        
    )
}

export default Navbar;