import { useState } from 'react';
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
                        <a href="#home" className="drawer__link">Create quote</a>
                    </li>
                    <li className="drawer__item">
                        <a href="#about" className="drawer__link">Favorites</a>
                    </li>
                    <li className="drawer__item">
                        <a href="#services" className="drawer__link">About me</a>
                    </li>
                    <li className="drawer__item">
                        <a href="#contact" className="drawer__link">Log out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;