import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="monument-navbar">
            <div className="nav-logo">
                <Link to="/">THE MONUMENT</Link>
            </div>
            <div className="nav-links">
                <Link to="/curation">CURATION</Link>
                <Link to="/philosophy">PHILOSOPHY</Link>
                <Link to="/contact">ACQUIRE ACCESS</Link>
            </div>
        </nav>
    );
};

export default Navbar;