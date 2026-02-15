import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="monument-modal-overlay">
            <div className="monument-modal-content">
                <span className="modal-subtitle">SYSTEM NOTIFICATION</span>
                <h2>Inquiry Processed</h2>
                <p>This is <strong>The Monument</strong> interactive demo.</p>
                <p>Please note: No data has been saved or transmitted. This form is for demonstration of aesthetic, feel, and luxury UI logic only.</p>
                <button className="monument-modal-btn" onClick={onClose}>RETURN TO CURATION</button>
            </div>
        </div>
    );
};

export default Modal;