'use client';

import React from 'react';
import TextSlider from '../TextSlider';
import Image from 'next/image';
import './home-banner.scss';
import { useRouter } from 'next/navigation';

const HomeBanner: React.FC = () => {

    const router = useRouter();

    const textArray: string[] = [
        "Custom Web Design",
        "WhatsApp Chatbot Development",
        "Custom Software Solutions",
        "Web Application",
        "Mobile App Development",
        "Enterprise Software",
        "Desktop Applications",
        "Product Development",
        "AI/ML Solutions",
        "Cloud/DevOps Solutions"
    ];

    return (
        <section className="d-flex align-items-center position-relative vh-90hirepag cover  custom-sft-banner sw-development-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-xl-8 col-lg-12 col-md-12 mplp">
                        <h1 className="clor pt-3 pb-2">
                            Your Idea, Our Code
                        </h1>
                        <TextSlider textArray={textArray} />
                        <p className="clor fw-bold">
                            Empower Innovation: We Build Scalable, Custom Web & Software Solutions. With over 10 years of expertise, we serve startups and enterprises, driving real results and business success. Let’s bring your vision to life!
                        </p>
                        <div className='action-buttons-alignment'>
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
                                        data-lazyloaded={1}
                                        src='/images/home-banner/google-rating-svg.webp'
                                        alt="Google"
                                        width={97}
                                        height={56}
                                        data-ll-status="loaded"
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
                                        data-lazyloaded={1}
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
                                        data-lazyloaded={1}
                                        src="/images/home-banner/goodfirm-rating-svg.webp"
                                        decoding="async"
                                        alt="GoodFirms"
                                        width={135}
                                        height={56}
                                        data-ll-status="loaded"
                                        className="entered litespeed-loaded"
                                    />
                                </a>
                            </div>
                        </div>
                        <p className='text-white vision'>
                            Quality Focus | Customer Centric | Insights Driven
                        </p>
                    </div>
                    <div className="col-12 col-md-5 d-lg-block d-md-block d-none">

                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeBanner;
