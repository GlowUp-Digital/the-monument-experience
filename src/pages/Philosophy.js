import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
    return (
        <div className="monument-philosophy">
            <section className="philosophy-header">
                <span className="subtitle">The Core Values</span>
                <h1>Permanence Over <br/>Popularity.</h1>
            </section>

            <section className="philosophy-content">
                <div className="philosophy-item">
                    <h3>01. Structural Integrity</h3>
                    <p>We do not build for the next quarter; we build for the next decade. Every line of code is a stone laid in a foundation designed to withstand the erosion of digital trends.</p>
                </div>

                <div className="philosophy-item">
                    <h3>02. Aesthetic Silence</h3>
                    <p>True luxury doesn't scream. We utilize minimalist obsidian textures and bronze accents to create a digital atmosphere that commands respect through quiet authority.</p>
                </div>

                <div className="philosophy-item">
                    <h3>03. Curated Precision</h3>
                    <p>A Monument is not for everyone. We limit our creative output to ensure that every project receives the obsessive attention to detail required for a digital masterpiece.</p>
                </div>
            </section>

            <div className="philosophy-footer">
                <p>Built for those who understand that a website isn't a tool—it's a legacy.</p>
            </div>
        </div>
    );
};

export default Philosophy;