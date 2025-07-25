import React from 'react';
import Banner from '@/components/Banner';
import CustomHeading from '@/components/heading';
import Skills from '@/components/Skills';
import AboutDetails from '@/components/AboutDetails';
import OurWork from '@/components/OurWork';
import ContactForm from '@/components/ContactForm';
import Technologies from '@/components/Techologies';

interface Point {
    id: number;
    point: string;
}

interface LeftTextItem {
    id: number;
    title: string;
    point: string;
}

const AppDevelopment: React.FC = () => {
    const bannerContent = `In a digital era dominated by apps and websites, we understand 
    the critical importance of exceptional design. Our primary objective is to craft 
    applications that not only enhance your brand image but also surpass your expectations.`;

    const leftText: LeftTextItem[] = [
        {
            id: 1,
            title: 'Preplanning:',
            point: `Brainstorm, Data Analysis, User Stories, and User Flows.`,
        },
        {
            id: 2,
            title: 'Empathize:',
            point: `Construct a point of view based on customer requirements and insights.`,
        },
        {
            id: 3,
            title: 'Prototype:',
            point: `Build a representation of your solutions.`,
        },
        {
            id: 4,
            title: 'Test:',
            point: `Conduct speed tests and scrutinize micro-details.`,
        },
        {
            id: 5,
            title: 'Feedback:',
            point: `Gather user feedback on your prototypes.`,
        },
        {
            id: 6,
            title: 'Deliver/Maintenance:',
            point: `Handout the finalized version and provide ongoing support to minimize downtimes.`,
        },
    ];

    const leftPoints: Point[] = [
        { id: 1, point: 'Responsiveness of Design' },
        { id: 2, point: 'Mockups' },
        { id: 3, point: 'Customized App Logos' },
        { id: 4, point: 'Splash Screen' },
        { id: 5, point: 'Readability' },
        { id: 6, point: 'Push Notifications' },
        { id: 7, point: 'Social Media Integration' },
    ];

    const leftPoints2: Point[] = [
        { id: 1, point: 'Shopping and E - Commerce' },
        { id: 2, point: 'Travel and Tourism' },
        { id: 3, point: 'Media & Entertainment' },
        { id: 4, point: 'Health and Fitness' },
        { id: 5, point: 'Food Delivery' },
        { id: 6, point: 'Real Estate' },
        { id: 7, point: 'Finance' },
        { id: 8, point: 'Cab Booking' },
    ];

    const imgStyle: React.CSSProperties = {
        objectFit: 'cover',
        height: '65vh',
        width: '100%',
    };

    return (
        <>
            <Banner
                bannerHeading1="Elevate Your Application"
                bannerHeading2="with the Best in Design."
                bannerContent={bannerContent}
                bannerImage="/images/mobile-dev/app.svg"
            />
            <CustomHeading
                firstWord="App Design"
                lastWord="Services:"
                textCenter="text-center"
            />
            <Skills
                leftImage="/images/mobile-dev/mobile-app.png"
                ImgStyle={imgStyle}
                smallContent="Designing an application is an art of space management. Our mobile 
        applications are characterized by beautiful user experiences, attractive designs, 
        and extraordinary features within the constraints of limited screen space."
                leftPoints={leftPoints}
                rightPoints={[]}
            />
            <AboutDetails
                leftImage="/images/mobile-dev/android-developers.png"
                smallContent="
        <h2 class='fw-bolder'> Planning to Develop a Mobile Application? </h2> 
        <h1 class='fw-bolder mb-md-2'> The best time to embark on this journey is now. </h1>
        From simple logo design projects to substantial app development ventures, we follow a proven process.
        "
                leftPoints={leftText}
                rightPoints={[]}
            />
            <CustomHeading
                firstWord="App Development"
                lastWord="Services:"
                textCenter="text-center"
            />
            <Skills
                leftImage="/images/mobile-dev/mobile.jpeg"
                ImgStyle={imgStyle}
                smallContent="Our expert team of mobile app developers loves a challenge, whether it's creating a high-quality app to simplify complex data or revolutionizing an industry. Our focus is always on the user experience."
                leftPoints={leftPoints2}
                rightPoints={[]}
                belowText="Ready to enhance your digital footprint? Let's build something extraordinary together."
            />
            <OurWork isMobilePage={true} />
            <br />
            <ContactForm customPadding="ps-0 pe-0" />
            <Technologies />
        </>
    );
};

export default AppDevelopment;
