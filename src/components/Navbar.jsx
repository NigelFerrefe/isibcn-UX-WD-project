import "./Navbar.css";


function Navbar() {
    return (
        <nav>
            <img className="logo" src="src/assets/LOGO.svg" alt="isibcn logo" />
            <div className="nav-icons">
                <img src="src/assets/EMPTYBAG.svg" alt="empty bag icon" />
            </div>
        </nav>
        
    )
}

export default Navbar;