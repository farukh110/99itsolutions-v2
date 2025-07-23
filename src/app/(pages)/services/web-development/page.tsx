import React from 'react';
import Banner from '@/components/Banner';
import CustomHeading from '@/components/heading';
import Skills from '@/components/Skills';
import AboutDetails from '@/components/AboutDetails';
import OurWork from '@/components/OurWork';
import ContactForm from '@/components/ContactForm';
import Technologies from '@/components/Techologies';
import './web-dev.scss';

interface Point {
    id: number;
    point: string;
}

interface LeftTextItem {
    id: number;
    title: string;
    point: string;
}

const WebDevelopment: React.FC = () => {
    const leftPoints: Point[] = [
        { id: 1, point: 'UI Design' },
        { id: 2, point: 'Intuitive User Navigation' },
        { id: 3, point: 'Web Compatibility' },
        { id: 4, point: 'Responsive Web Design' },
        { id: 5, point: 'Graphic Design' },
        { id: 6, point: 'Webpage Speed Optimization' },
        { id: 7, point: 'Front-End Development' },
        { id: 8, point: 'Web Analytics' },
    ];

    const leftText: LeftTextItem[] = [
        {
            id: 1,
            title: 'Creative Requirement:',
            point: `When you bring an idea to us, we delve into your unique 
            requirements and offer innovative, customized suggestions.`
        },
        {
            id: 2,
            title: 'Planning and Strategy:',
            point: `We create comprehensive requirement documents, wireframes 
            for pages, clickable prototypes, and sitemaps.`
        },
        {
            id: 3,
            title: 'Web Design:',
            point: `Our team designs websites that not only look good but also stand out from the crowd.`
        },
        {
            id: 4,
            title: 'Quality Assurance:',
            point: `We release a beta version for your review, ensuring optimal page speed and addressing any issues.`
        },
        {
            id: 5,
            title: 'Launch and Ongoing Care:',
            point: `Once we receive your final approval, we go live. But our commitment doesn't end there – we continuously update the website with fresh content and technologies to keep it current.`
        },
    ];

    const servicePoints: Point[] = [
        { id: 1, point: 'CMS Websites' },
        { id: 2, point: 'E-commerce Websites' },
        { id: 3, point: 'Business Process Automation' },
        { id: 4, point: 'E-Web Portals' },
    ];

    const servicePointsR: Point[] = [
        { id: 5, point: 'Internet of Things' },
        { id: 6, point: 'IBeacon Integration' },
        { id: 7, point: 'Parallax Websites' },
        { id: 8, point: 'CRM Systems' },
    ];

    const imgStyle: React.CSSProperties = {
        objectFit: 'cover',
        height: '80vh',
        display: 'table',
        margin: '0 auto',
    };

    const webStyle: React.CSSProperties = {
        objectFit: 'cover',
        height: 'unset',
        display: 'table',
        margin: '0 auto',
    };

    const bannerContent = `Your website is possibly your most crucial marketing tool,
        and if it's not helping your business grow, it might be time
        for a fresh one. Research shows that 75% of customers
        assess a company's trustworthiness by evaluating its website design.`;

    return (
        <>
            <Banner
                bannerHeading1="We offer"
                bannerHeading2="Custom website design services."
                bannerContent={bannerContent}
                bannerImage="/images/web-dev/web-development.webp"
            />
            <CustomHeading
                firstWord="Web Design"
                lastWord="Services"
                textCenter="text-center"
            />
            <Skills
                leftImage="/images/web-dev/web.png"
                ImgStyle={imgStyle}
                smallContent={`Our web design services focus on creating clean, fresh, 
                and distinctive websites. We rigorously test our websites 
                across popular web browsers and various screen 
                resolutions. We offer comprehensive PSD solutions, 
                ensuring the final design matches the client's provided PSD. 
                Our experienced and skilled coders develop strategies 
                tailored to meet the client's requirements.<br /><br />
                <h3 class='mt-md-4 fw-bolder'> Our services encompass: </h3>`}
                leftPoints={leftPoints}
                rightPoints={[]}
            />
            <AboutDetails
                leftImage="/images/services/web-development-banner.jpg"
                smallContent={`<h2 class='fw-bolder'> We take pleasure in crafting purposeful </h2> 
                <h1 class='fw-bolder mb-md-2'> And thoughtful websites. </h1> 
                Whether it's a modest logo design task or a big-budget app <br/> development project, we 
                adhere to our time-tested process.`}
                leftPoints={leftText}
                rightPoints={[]}
            />
            <Skills
                leftImage="/images/services/web-design.png"
                ImgStyle={webStyle}
                smallContent={`<h1 class='fw-bolder web-service-h1 mb-md-2'> Our web development <span style='color: #FF9900'>services</span> </h1>
                99 iT Solutions deliver websites characterized by distinctive designs, features, and 
                functionality. You can opt for a personalized website that operates as a content 
                management system (CMS), allowing you to effortlessly add and edit content without
                the need for coding.<br />
                <h3 class='mt-md-4 fw-bolder'> We specialize in: </h3>`}
                leftPoints={servicePoints}
                rightPoints={servicePointsR}
            />
            <OurWork isWebPage={true} />
            <ContactForm customPadding="ps-0 pe-0" />
            <Technologies />
        </>
    );
};

export default WebDevelopment;
