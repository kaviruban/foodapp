import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import Logo from "../../Assets/Logo/MainLogo";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="main-logo">
        <img src={Logo} alt="main-logo" height="auto" width="auto" />
      </div>
      <nav ref={navRef} className="nav-items">
        <p onClick={() => navigate("/home")}>Home</p>
        <p onClick={() => navigate("/submit-recipe")}>Submit Recipe</p>
        <p onClick={() => navigate("/")}>Logout</p>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
