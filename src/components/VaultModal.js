import React, { useState } from 'react';
import './VaultModal.css';

const VaultModal = ({ isOpen, onClose }) => {
    const [passcode, setPasscode] = useState('');
    const [status, setStatus] = useState('AWAITING_CREDENTIALS');

    if (!isOpen) return null;

    const handleVerify = (e) => {
        e.preventDefault();
        if (passcode.toUpperCase() === 'GLOWUP') {
            setStatus('ACCESS_GRANTED');
        } else {
            setStatus('ACCESS_DENIED');
            setTimeout(() => setStatus('AWAITING_CREDENTIALS'), 2000);
        }
    };

    return (
        <div className="vault-overlay">
            <div className="vault-modal">
                <span className="vault-subtitle">Security Protocol 09</span>
                
                {status === 'AWAITING_CREDENTIALS' && (
                    <form onSubmit={handleVerify}>
                        <h2>Enter Vault Access Code</h2>
                        <input 
                            type="password" 
                            placeholder="••••••" 
                            value={passcode}
                            onChange={(e) => setPasscode(e.target.value)}
                            autoFocus
                        />
                        <div className="vault-actions">
                            <button type="submit" className="vault-btn-primary">AUTHENTICATE</button>
                            <button type="button" onClick={onClose} className="vault-btn-secondary">ABORT</button>
                        </div>
                    </form>
                )}

                {status === 'ACCESS_DENIED' && (
                    <div className="vault-status denied">
                        <h2 color="#ff4d4d">Access Denied</h2>
                        <p>Unauthorized credential attempt logged.</p>
                    </div>
                )}

                {status === 'ACCESS_GRANTED' && (
                    <div className="vault-status granted">
                        <h2>Welcome, Architect</h2>
                        <p>The Inner Circle repository is now decrypted.</p>
                        <button onClick={onClose} className="vault-btn-primary">ENTER STRATUM</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VaultModal;