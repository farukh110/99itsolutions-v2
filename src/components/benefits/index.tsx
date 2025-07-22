'use client';

import React from 'react';
import Image from 'next/image';
import CustomHeading from '../heading';
import './benefits.scss';

interface BenefitItem {
    src: string;
    alt: string;
    label: string;
}

const benefits: BenefitItem[] = [
    { src: '/images/icons/index-Save-Costs.webp', alt: 'Save Cost', label: 'Save Costs' },
    { src: '/images/icons/top-talent.png', alt: 'Expert Talent', label: 'Expert Talent' },
    { src: '/images/icons/index-Flexible-Teams.webp', alt: 'Flexible Teams', label: 'Flexible Teams' },
    { src: '/images/icons/index-Quick-Launch.webp', alt: 'Quick Launch', label: 'Quick Launch' },
    { src: '/images/icons/index-Less-Risk.webp', alt: 'Less Risk', label: 'Less Risk' },
    { src: '/images/icons/focus_on_growth.png', alt: 'Focus on Growth', label: 'Focus on Growth' },
    { src: '/images/icons/ltp1.png', alt: 'Long-Term Partnership', label: 'Long-Term Partnership' },
    { src: '/images/icons/Profit.png', alt: 'Boost Profit Margin', label: 'Boost Profit Margin' },
];

const Benefits: React.FC = () => {
    return (
        <div className='container benefits pt-lg-5 pt-md-0 pb-lg-5 pb-md-0'>
            <div className='row'>
                <div className='col-lg-4 col-md-12 col-12'>
                    <CustomHeading
                        firstWord='Benefits of'
                        lastWord='Outsourcing with us'
                        textCenter='text-md-left text-center'
                    />
                </div>

                <div className='col-lg-8 col-md-12 col-12'>
                    <div className='row justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 g-2 g-lg-2'>
                        {benefits.map((item, index) => (
                            <div className='col mb-3' key={index}>
                                <div className='sw-methods-box text-center'>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={64}
                                        height={64}
                                        loading='lazy'
                                    />
                                    <p className='sw-heading pt-2'>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
