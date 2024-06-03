import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../App";
import {useContext} from 'react';

function Navbar() {
//   const navigate = useNavigate();
const {auth} = useContext(AuthContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    localStorage.removeItem(`accessToken`);
    // navigate("/login");
  };

  return (
    <>
    {auth ? (
    <div>
      <div
        className="menu-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        ☰
      </div>
      <div
        className={`drawer ${isHovered ? "open" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className="drawer__menu">
          <li className="drawer__item">
            <Link to="/create-quote" className="drawer__link">
              Create quote
            </Link>
          </li>
          <li className="drawer__item" onClick={handleLogout}>
            <Link to="/login" className="drawer__link" onClick={handleLogout}>
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </div>
    ) : (
      ""
    )}
    </>
  );
}

export default Navbar;
