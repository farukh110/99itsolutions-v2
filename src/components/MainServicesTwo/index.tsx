'use client';

import React from 'react';
import CustomHeading from '../heading';
import './services-two.scss';

interface ServiceItem {
    title: string;
    description: string;
    href: string;
}

const services: ServiceItem[] = [
    {
        title: 'Custom Software Development',
        description:
            'We specialize in creating customized software solutions designed to tackle your unique business challenges. Our scalable and efficient systems are crafted to streamline operations and enhance functionality.',
        href: 'software-development',
    },
    {
        title: 'Web Design',
        description:
            'Your website is crucial for marketing success, with 75% of clients assessing credibility based on design, content, and navigation.',
        href: 'mobile-app-development',
    },
    {
        title: 'Mobile App Development',
        description:
            'Transform your business with user-friendly and feature-rich mobile applications. Our apps are designed to enhance user engagement and boost your digital presence, ensuring top-notch performance and scalability.',
        href: 'mobile-app-development',
    },
    {
        title: 'Software Product Development',
        description:
            'From concept to launch, we build robust and market-ready software products that align with your business objectives. Our goal is to create long-term value with every solution.',
        href: 'software-product-development',
    },
    {
        title: 'Hire Dedicated Developers',
        description:
            'Gain access to highly skilled developers dedicated to your project’s success. Our professionals bring focused expertise, ensuring high-quality results that meet your specific needs.',
        href: 'hire-dedicated-developer',
    },
    {
        title: 'IT Outsourcing Services',
        description:
            'Streamline your operations and enhance scalability with our comprehensive IT outsourcing services. Acting as an extension of your team, we help you achieve operational efficiency and achieve your goals seamlessly.',
        href: 'it-outsourcing',
    },
    {
        title: 'Web Development',
        description:
            'We provide expert web development services for creating killer websites, including easy navigation and feature-rich online stores.',
        href: 'software-product-development',
    },
    {
        title: 'E-commerce Integration',
        description:
            'We optimize e-commerce and mobile apps for efficient supply chain and manufacturing, including m-commerce options.',
        href: 'hire-dedicated-developer',
    },
    {
        title: 'Mobile Application',
        description:
            'We build unique application designs to improve business and personal efficiency, helping clients feel like royalty.',
        href: 'it-outsourcing',
    },
    {
        title: 'Digital Products',
        description:
            'We create optimized digital products for your business with high ROIs, including software development, game development, animations and videos.',
        href: 'it-outsourcing',
    },
    {
        title: '2D/3D Games',
        description:
            '99 iT Solutions provides custom unity game development services that include building spectacular 2D and 3D multiplayer games for mobile devices with creative visualization & addictive gameplay considering the latest game directions and design trends',
        href: 'it-outsourcing',
    },
    {
        title: 'WhatsApp Business & Chatbot Solutions:',
        description:
            'Connect your website/app via API for instant whatsapp OPTs/transactions and enhance customer engagement with Chat Bot System Static, Streamlining communication.',
        href: 'it-outsourcing',
    },
];

const MainServicesTwo: React.FC = () => {

    return (
        <section className="main-service pt-35 rpt-50 pb-50 rpb-70">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ps-4 pe-4">
                        <CustomHeading
                            firstWord="Customized IT Outsourcing"
                            lastWord="Solutions for Your Business"
                            textCenter="text-center"
                        />
                        <p>
                            Discover our extensive range of IT outsourcing services, crafted to enhance your business with expert-driven solutions that deliver security, scalability, and seamless performance.
                        </p>
                    </div>
                </div>

                <div className="row pt-2 mt-md-4 justify-content-center">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2" key={index}>
                            <div className="ag-format-container">
                                <div className="ag-courses_box">
                                    <div className="ag-courses_item">
                                        <a
                                            href={service.href}
                                            aria-label={service.title}
                                            className="ag-courses-item_link ag-courses-item_link-index"
                                            target="_blank"
                                        >
                                            <div className="ag-courses-item_bg" />
                                            <div className="ag-courses-item_title ag-courses-item_title-index">
                                                {service.title}
                                            </div>
                                            <div className="ag-courses-item_date-box pb-3">
                                                <p>{service.description}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainServicesTwo;