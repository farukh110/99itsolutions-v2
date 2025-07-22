'use client';

import React from 'react';
import './custom-banner.scss';

interface CustomBannerProps {
    imgSource: string;
    imgSourceAlt: string;
}

const CustomBanner: React.FC<CustomBannerProps> = ({ imgSource, imgSourceAlt }) => {
    return (
        <section
            style={{ background: `url(${imgSource})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className="main-banner pt-md-5 pb-md-5"
        >
            <div className="pt-md-5 pb-md-5">
                <h1 className="mt-md-5 mb-md-5 text-center text-light">{imgSourceAlt}</h1>
            </div>
        </section>
    );
};

export default CustomBanner;
