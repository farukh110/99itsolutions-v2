// 'use client';

import React from 'react';
import { Metadata } from 'next';
import CustomBanner from '@/components/CustomBanner';
import CustomHeading from '@/components/heading';
import CustomSubHeading from '@/components/sub-heading/CustomSubHeading';
import ServicesTab from '@/components/ServicesTab';
import Focused from '@/components/Focused';
import Counters from '@/components/Counters';
import Technologies from '@/components/Techologies';
import Clients from '@/components/Clients';

export const metadata: Metadata = {
    title: "About Us",
    description: "Since 2015, 99 IT Solutions has been delivering cutting-edge technology solutions to businesses worldwide. We specialize in web and software development, product development, WhatsApp Business API and chatbot integrations, DevOps, solutions architecture, IT outsourcing, and consulting. Our team of experienced professionals is dedicated to providing high-quality solutions tailored to your business needs.",
};

const AboutUs: React.FC = () => {
    return (
        <>
            <CustomBanner
                imgSource="/images/about/about.jpg"
                imgSourceAlt="Who We Are"
            />
            <section className="about-section style-five mt-md-0 mt-0 mb-md-5 rpy-100 pt-4 pb-4">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-12 col-lg-12 pt-md-5 pb-md-5">

                            <CustomHeading
                                firstWord="99 IT Solutions - Your Trusted"
                                lastWord="Technology Partner"
                                textCenter="text-center"
                            />
                            <p>
                                Since 2015, 99 IT Solutions has been delivering cutting-edge technology solutions to businesses worldwide. We specialize in web and software development, product development, WhatsApp Business API and chatbot integrations, DevOps, solutions architecture, IT outsourcing, and consulting. Our team of experienced professionals is dedicated to providing high-quality solutions tailored to your business needs.
                            </p>
                        </div>

                        <div className="col-md-6">

                            <CustomSubHeading
                                firstWord="What We"
                                lastWord="Do"
                                textCenter="text-left"
                            />

                            <p>
                                Our company is a leader in web and software development, product development, WhatsApp Business API and chatbot integrations, DevOps, and solutions architecture. We also specialize in IT outsourcing and consulting, helping businesses leverage technology effectively.
                                <br />
                                Additionally, we assist clients in developing competitive strategies that drive measurable outcomes. Our approach is designed to deliver the best results efficiently, ensuring high-quality solutions, ongoing maintenance, and support—all at the most reasonable prices.

                            </p>
                        </div>

                        <div className="col-md-6">

                            <CustomSubHeading
                                firstWord="How We"
                                lastWord="Do"
                                textCenter="text-left"
                            />

                            <p>
                                Our proven process ensures efficiency, quality, and timely delivery. With a strong global presence across the USA, Canada, UK, Australia, New Zealand, Saudi Arabia, Qatar, Bahrain, and UAE, we focus on delivering tailored solutions that empower businesses to scale and succeed.
                                <br />
                                At 99 IT Solutions, we don’t just build technology—we build long-term partnerships by delivering excellence, innovation, and measurable results.

                            </p>

                        </div>

                    </div>

                </div>
            </section>
            <ServicesTab />
            <Focused />
            <Counters />
            <Technologies />
            <section className="container">

                <Clients />

            </section>
        </>
    );
};

export default AboutUs;
