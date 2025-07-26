'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import './skills.scss';

interface Point {
    point: string;
}

interface SkillsProps {
    ImgStyle?: React.CSSProperties;
    leftImage: string | StaticImageData;
    smallContent: string;
    leftPoints: Point[];
    rightPoints: Point[];
    belowText?: string;
}

const Skills: React.FC<SkillsProps> = ({
    ImgStyle,
    leftImage,
    smallContent,
    leftPoints,
    rightPoints,
    belowText
}) => {
    return (
        <div className="container my-md-5 my-5">
            <div className="row">
                <div className="col-md-12 mt-md-0 mt-0">
                    <div className="row mt-md-0 mt-3">
                        <div className="col-md-5">
                            <div className="position-relative" style={{ width: '100%', height: 'auto' }}>
                                <Image
                                    src={leftImage}
                                    alt="Skill Image"
                                    style={ImgStyle}
                                    className="img-fluid"
                                    width={500}
                                    height={300}
                                    placeholder="empty"
                                />
                            </div>
                        </div>

                        <div className="col-md-7 mt-md-0 mt-3">
                            <div dangerouslySetInnerHTML={{ __html: smallContent }} />

                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="services-ul">
                                        {leftPoints.length > 0 &&
                                            leftPoints.map((item, index) => (
                                                <li key={index}>{item.point}</li>
                                            ))}
                                    </ul>
                                </div>

                                <div className="col-md-6">
                                    <ul className="services-ul">
                                        {rightPoints.length > 0 &&
                                            rightPoints.map((item, index) => (
                                                <li key={index}>{item.point}</li>
                                            ))}
                                    </ul>
                                </div>

                                {belowText && (
                                    <div className="col-md-12">
                                        <p>{belowText}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
