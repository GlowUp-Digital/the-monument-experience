import React, { useEffect, useState } from 'react';
import './EntranceSequence.css';

const EntranceSequence = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            // This is the most important part! 
            // It tells App.js to stop showing the intro.
            setTimeout(onComplete, 1000); 
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`entrance-wrapper ${isExiting ? 'exit' : ''}`}>
            <div className="entrance-content">
                <h1 className="entrance-title">THE MONUMENT</h1>
                <span className="entrance-year">EST. 2026</span>
            </div>
        </div>
    );
};

export default EntranceSequence;