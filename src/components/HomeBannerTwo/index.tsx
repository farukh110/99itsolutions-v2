'use client';

import React from 'react';
import TextSlider from '../TextSlider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './banner-two.scss';

const HomeBannerTwo: React.FC = () => {
    const router = useRouter();

    const textArray: string[] = [
        "to Save on Local Hiring and Reduce Overhead costs?",
        "Access to top talent dedicated experts working for you?",
        "Build flexible teams that scale fast effortlessly?",
        "Timely delivery and stay ahead?",
        "Premium quality at budget - friendly rates?",
        "24/7 productivity across time zones?",
        "to Hire dedicated  team for product development",
        "Minimize risks and Boost Profit Margins?",
        "A trusted tech Partnership for long - term?"
    ];

    return (
        <section className="d-flex align-items-center position-relative vh-90hirepag cover custom-sft-banner sw-development-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-xl-8 col-lg-12 col-md-12 mplp">
                        <h1 className="clor pt-3 pb-2">Do you want</h1>

                        <TextSlider textArray={textArray} />

                        <br /><br />

                        <div className="action-buttons-alignment">
                            <button
                                type="button"
                                className="btn button getQuoteBtn"
                                onClick={() => router.push('/contact')}
                            >
                                Let’s work together!
                            </button>

                            <button
                                type="button"
                                className="btn button getQuoteBtn ms-2"
                                onClick={() => router.push('/services')}
                            >
                                Explore Services
                            </button>
                        </div>

                        <div className="banner-ratings mt-md-4">
                            <div className="ratings-box">
                                <a
                                    href="https://g.co/kgs/nTFb6tA"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <Image
                                        src="/images/home-banner/google-rating-svg.webp"
                                        alt="Google"
                                        width={97}
                                        height={56}
                                        className="entered litespeed-loaded"
                                    />
                                </a>
                            </div>
                            <div className="ratings-box">
                                <a
                                    href="https://clutch.co/profile/99-it-solutions"
                                    target="_blank"
                                    rel="noopener nofollow"
                                >
                                    <Image
                                        src="/images/home-banner/clutch-rating-svg.webp"
                                        alt="Clutch"
                                        width={99}
                                        height={56}
                                        className="entered litespeed-loaded"
                                    />
                                </a>
                            </div>
                            <div className="ratings-box">
                                <a
                                    href="https://www.goodfirms.co/company/99-it-solutions"
                                    target="_blank"
                                    rel="noopener nofollow"
                                >
                                    <Image
                                        src="/images/home-banner/goodfirm-rating-svg.webp"
                                        alt="GoodFirms"
                                        width={135}
                                        height={56}
                                        className="entered litespeed-loaded"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-lg-block d-md-block d-none">{/* Reserved space */}</div>
                </div>
            </div>
        </section>
    );
};

export default HomeBannerTwo;
