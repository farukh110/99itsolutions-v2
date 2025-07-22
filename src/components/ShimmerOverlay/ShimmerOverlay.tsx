import React from 'react';
import './shimmer.scss';

const ShimmerOverlay: React.FC = () => {
    return (
        <div className="fullscreen-overlay">
            <div className="loader"></div>
        </div>
    )
}

export default ShimmerOverlay;
