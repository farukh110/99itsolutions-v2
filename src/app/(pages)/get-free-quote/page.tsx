import React from 'react';
import { Metadata } from 'next';
import CustomBanner from '@/components/CustomBanner';
import RequestDemo from '@/components/GetFreeQuote';

export const metadata: Metadata = {
    title: "Get Free Quote",
    description: "Request a free quote from 99 IT Solutions to receive tailored pricing and expert consultation for your web development, software, and digital transformation needs. Start your project with a cost-effective plan designed specifically for your business goals.",
};

const GetFreeQuote: React.FC = () => {

    return (
        <>
            <CustomBanner
                imgSource="/images/request-quote/request-a-quote.jpg"
                imgSourceAlt="Get Free Quote"
            />
            <RequestDemo />
        </>
    );
};

export default GetFreeQuote;
