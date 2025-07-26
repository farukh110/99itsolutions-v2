'use client';

import React from 'react';
import CustomHeading from '../heading';
import Image from 'next/image';
import './out-sourcing.scss';

const Outsourcing: React.FC = () => {
    const features: {
        icon: string;
        alt: string;
        label: string;
    }[] = [
            {
                icon: '/images/icons/index-expertise.png',
                alt: 'Expert team strategizing in software development outsourcing.',
                label: '10 Years of Experience',
            },
            {
                icon: '/images/icons/index-customer.png',
                alt: 'Satisfied clients thanks to our software outsourcing services.',
                label: '100+ Clients',
            },
            {
                icon: '/images/icons/index-settings.png',
                alt: 'Bright idea symbol for creative software development strategies.',
                label: 'Custom Solutions',
            },
            {
                icon: '/images/icons/index-earth.png',
                alt: 'Software outsourcing connecting businesses across the globe.',
                label: '10+ Outsource Partners',
            },
            {
                icon: '/images/icons/index-programmer.png',
                alt: 'Programmer writing code, essential in software development.',
                label: 'Experienced Team',
            },
            {
                icon: '/images/icons/index-lightbulb.png',
                alt: 'Cogwheels representing the intricate settings in software dev.',
                label: 'Expertise in Latest Tech',
            },
        ];

    return (
        <div className="container outsourcing mt-md-5 mt-4 mb-md-5">
            <CustomHeading
                firstWord="Why"
                lastWord="Choose Us?"
                textCenter="text-center"
            />

            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-6 g-2 g-lg-3 d-flex justify-content-center">
                {features.map((feature, index) => (
                    <div className="col" key={index}>
                        <div className="p-3 text-center">
                            <Image
                                src={feature.icon}
                                alt={feature.alt}
                                width={64}
                                height={64}
                                className="pb-2"
                                loading="lazy"
                                style={{ height: "auto", width: "auto" }}
                            />
                            <p className="p-18px">{feature.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Outsourcing;
