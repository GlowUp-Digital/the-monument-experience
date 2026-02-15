import React, { useState } from 'react';
import VaultModal from '../components/VaultModal'; 
import './Home.css';

const Home = () => {
    // State to manage the custom Vault Modal
    const [isVaultOpen, setIsVaultOpen] = useState(false);

    return (
        <div className="monument-home">
            {/* Hero Section: Centered & Dramatic */}
            <section className="hero-monument">
                <span className="subtitle">Est. 2026</span>
                <h1>Digital Legacies <br/> Built in Stone.</h1>
                <p>For brands that demand permanence in a fleeting digital world.</p>
                <div className="scroll-indicator">SCROLL TO DISCOVER</div>
            </section>

            {/* Curation Section: The Philosophy */}
            <section className="curation-section">
                <div className="curation-content">
                    <h2>The Curation</h2>
                    <p>We do not "design" websites. We architect digital monuments that serve as the definitive foundation for elite brands.</p>
                    
                    <div className="stat-grid">
                        <div className="stat-box">
                            <span>01</span>
                            <p>Concept Mastery</p>
                        </div>
                        <div className="stat-box">
                            <span>02</span>
                            <p>Architectural Code</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legacy Timeline: The "Structural Heritage" */}
            <section className="legacy-section">
                <div className="legacy-header">
                    <span className="subtitle">The Evolution</span>
                    <h3>Structural Heritage</h3>
                </div>
                
                <div className="legacy-timeline">
                    <div className="timeline-item">
                        <span className="year">2024</span>
                        <p><strong>The Foundation</strong> Establishing Structural Integrity.</p>
                    </div>
                    <div className="timeline-item">
                        <span className="year">2025</span>
                        <p><strong>The Pillar</strong> Expanding Digital Depth.</p>
                    </div>
                    <div className="timeline-item highlight">
                        <span className="year">2026</span>
                        <p><strong>The Monument</strong> Achieving Digital Immortality.</p>
                    </div>
                </div>

                <div className="vault-action">
                    {/* Triggering the custom styled modal instead of prompt() */}
                    <button onClick={() => setIsVaultOpen(true)} className="cta-bronze">
                        ENTER PRIVATE VAULT
                    </button>
                </div>
            </section>

            {/* The Custom Styled Vault Popup */}
            <VaultModal 
                isOpen={isVaultOpen} 
                onClose={() => setIsVaultOpen(false)} 
            />
        </div>
    );
};

export default Home;