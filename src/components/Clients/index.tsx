'use client';

import React from 'react';
import Image from 'next/image';
import CustomHeading from '../heading';
import SliderCom from '@/helpers/SliderCom';
import './clients.scss';

const clientLogos = [
    '/images/logos/1.png',
    '/images/logos/3.png',
    '/images/logos/4.png',
    '/images/logos/5.png',
    '/images/logos/7.png',
    '/images/logos/9.png',
    '/images/logos/11.png',
    '/images/logos/12.png',
    '/images/logos/14.png',
    '/images/logos/15.png',
];

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};

const Clients: React.FC = () => {
    return (
        <div className="client-logo-area mt-md-4">
            <div className="container">
                <div className="row">

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                        <div className="section-title text-left mb-30 mt-md-5 mt-5">
                            <CustomHeading
                                firstWord="Our Trusted"
                                lastWord="Partners and Valuable clients"
                                textCenter="text-left"
                            />
                        </div>
                    </div>

                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 align-self-center">
                        <div className="logo-carousel-wrap pt-0">
                            <SliderCom settings={settings}>
                                {clientLogos.map((logo, index) => (
                                    <div className="logo-item" key={index}>
                                        <a href="#">
                                            <Image
                                                src={logo}
                                                alt={`Client Logo ${index + 1}`}
                                                width={120}
                                                height={60}
                                                style={{ height: 'auto', width: 'auto' }}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </SliderCom>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Clients;
