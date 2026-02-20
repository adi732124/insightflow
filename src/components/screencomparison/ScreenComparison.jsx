import React from 'react'
import './ScreenComparison.css';

const ScreenComparison = ({ currentUrl, revampedUrl }) => {
    return (
        <div className="comparison-container">
            <div className="comparison-card glass-panel">
                <div className="comparison-header">Current UI</div>
                <div className="image-wrapper">
                    <img src={currentUrl} alt="Current UI" />
                </div>
            </div>
            <div className="comparison-card glass-panel">
                <div className="comparison-header">Revamped UI</div>
                <div className="image-wrapper">
                    <img src={revampedUrl} alt="Revamped UI" />
                </div>
            </div>
        </div>
    );
};

export default ScreenComparison