import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'; 
import './Contact.css';

const Contact = () => {
    const [step, setStep] = useState(1);
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    return (
        <div className="monument-contact">
            <div className="contact-inner">
                <span className="subtitle">PHASE 0{step} / 03</span>
                
                <form className="monument-form" onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="form-step">
                            <h1>Identify Your Legacy</h1>
                            <div className="input-group">
                                <label>Legal Identity / Brand Name</label>
                                <input type="text" placeholder="Enter Full Name" required />
                            </div>
                            <div className="input-group">
                                <label>Current Status</label>
                                <select>
                                    <option>New Build (Launch)</option>
                                    <option>Restoration (Rebrand)</option>
                                </select>
                            </div>
                            <div className="button-row">
                                <button type="button" className="btn-secondary" disabled style={{opacity: 0, pointerEvents: 'none'}}>BACK</button>
                                <button type="button" className="btn-primary" onClick={nextStep}>PROCEED</button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="form-step">
                            <h1>Define the Scope</h1>
                            <div className="input-group">
                                <label>Primary Objective</label>
                                <textarea placeholder="What must this monument achieve?" rows="4"></textarea>
                            </div>
                            <div className="button-row">
                                <button type="button" className="btn-secondary" onClick={prevStep}>BACK</button>
                                <button type="button" className="btn-primary" onClick={nextStep}>PROCEED</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="form-step">
                            <h1>Establish Terms</h1>
                            <div className="input-group">
                                <label>Investment Bracket (ZAR)</label>
                                <select required>
                                    <option value="">Select Range...</option>
                                    <option>Premium Architecture (R150k - R350k)</option>
                                    <option>Enterprise Monument (R350k+)</option>
                                </select>
                            </div>
                            <div className="button-row">
                                <button type="button" className="btn-secondary" onClick={prevStep}>BACK</button>
                                <button type="submit" className="btn-primary">INITIATE</button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => navigate("/")} />
        </div>
    );
};

export default Contact;