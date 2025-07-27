import React from 'react'
import { Metadata } from 'next';
import './portfolio.scss';
import OurWork from '@/components/OurWork';

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "Explore our portfolio showcasing successful projects across web development, software solutions, product innovation, and enterprise integrations. At 99 IT Solutions, we deliver high-quality, scalable, and results-driven technology solutions tailored to diverse industries and global clients.",
};

const Portfolio: React.FC = () => {

    return (
        <>
            <OurWork />

        </>
    )
}

export default Portfolio;