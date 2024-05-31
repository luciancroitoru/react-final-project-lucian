import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <div
                className="menu-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                ☰
            </div>
            <div
                className={`drawer ${isHovered ? 'open' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ul className="drawer__menu">
                    <li className="drawer__item">
                        <Link to="/create-quote" className="drawer__link">Create quote</Link>
                    </li>
                    <li className="drawer__item">
                        <Link to="/logout" className="drawer__link">Log out</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;