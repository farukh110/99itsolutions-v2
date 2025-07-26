'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import './banner.scss';

interface BannerProps {
    bannerHeading1: string;
    bannerHeading2: string;
    bannerContent: string;
    bannerImage: string | StaticImageData;
}

const Banner: React.FC<BannerProps> = ({
    bannerHeading1,
    bannerHeading2,
    bannerContent,
    bannerImage
}) => {
    return (
        <div className="banner container my-4">
            <div className="animated-wrapper mt-4">
                <div className="row">
                    {/* Left Text Section */}
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="header-content">
                            <h2 className="mb-0">{bannerHeading1}</h2>
                            <h1 className="mb-md-1">{bannerHeading2}</h1>
                            <p>{bannerContent}</p>

                            {/* Input Box */}
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control input-email"
                                    placeholder="Enter your Business Name"
                                />
                                <div className="input-group-append ps-2">
                                    <button className="btn btn-primary h-100 btn-subscribe" type="button">
                                        Let&apos;s Start
                                    </button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                        <div className="animation-container">
                            <div className="position-relative" style={{ width: '100%', height: 'auto' }}>
                                <Image
                                    src={bannerImage}
                                    alt="Banner Illustration"
                                    className="img-fluid mx-auto d-block header-img"
                                    width={600}
                                    height={400}
                                    placeholder="empty"
                                />
                            </div>
                            <div className="people-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
