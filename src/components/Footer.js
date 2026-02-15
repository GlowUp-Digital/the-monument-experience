import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="monument-footer">
            <div className="footer-line"></div>
            
            <div className="footer-socials">
                <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://x.com/login" target="_blank" rel="noreferrer">X (Twitter)</a>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 GLOWUP DIGITAL | THE MONUMENT EXPERIENCE</p>
                <p>PRIVATE CONSULTATION ONLY</p>
            </div>
        </footer>
    );
};

export default Footer;