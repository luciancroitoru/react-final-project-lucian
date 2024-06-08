import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../App";
import { useContext } from "react";

function Navbar() {
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem(`accessToken`);
    setAuth("");
  };

  return (
    <>
      {auth ? (
        <div className="drawer">
          <ul className="drawer__menu">
            <li className="drawer__item">
              <Link to="/create-quote" className="drawer__link">
                Create quote
              </Link>
            </li>

            <li className="drawer__item">
              <Link to="/login" className="drawer__link">
                Log in
              </Link>
            </li>

            <li className="drawer__item">
              <Link to="/register" className="drawer__link">
                Register
              </Link>
            </li>

            <li className="drawer__item" onClick={handleLogout}>
              <Link to="/login" className="drawer__link" onClick={handleLogout}>
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="drawer">
          <ul className="drawer__menu">
          <li className="drawer__item">
              <Link to="/login" className="drawer__link">
                Log in
              </Link>
            </li>

            <li className="drawer__item">
              <Link to="/register" className="drawer__link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
