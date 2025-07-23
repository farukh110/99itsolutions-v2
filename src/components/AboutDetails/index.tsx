'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import './about.scss';

interface PointItem {
    point: string;
    title?: string;
}

interface AboutDetailsProps {
    leftImage: string | StaticImageData;
    smallContent: string;
    leftPoints: PointItem[];
    rightPoints: PointItem[];
}

const AboutDetails: React.FC<AboutDetailsProps> = ({
    leftImage,
    smallContent,
    leftPoints,
    rightPoints
}) => {
    return (
        <div className="about-details">
            <div className="container mt-md-5 mb-md-5">
                <div className="row">
                    <div className="col-md-12 mt-md-0 mt-0">
                        <div className="row mt-md-0 mt-md-3 mt-0">
                            <div className="col-md-7 mt-md-0 mt-3">
                                <div
                                    className="content-small"
                                    dangerouslySetInnerHTML={{ __html: smallContent }}
                                />

                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="services-h mt-md-3">
                                            {leftPoints.length > 0 &&
                                                leftPoints.map((item, index) => (
                                                    <div key={index}>
                                                        {item.title && <h3 className="fw-bolder mb-0">{item.title}</h3>}
                                                        <p className="mb-0">{item.point}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <ul className="services-ul">
                                            {rightPoints.length > 0 &&
                                                rightPoints.map((item, index) => (
                                                    <li key={index}>{item.point}</li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5 align-item-middle">
                                <div className="position-relative" style={{ width: '100%', height: 'auto' }}>
                                    <Image
                                        src={leftImage}
                                        alt="About section image"
                                        className="img-fluid"
                                        width={500}
                                        height={300}
                                        placeholder="empty"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;
