'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CustomHeading from '../heading';

import './process.scss';

type TabType =
    | 'consultation'
    | 'planning'
    | 'design'
    | 'develop'
    | 'test'
    | 'deliver'
    | 'maintenance';

const Process: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<TabType>('consultation');

    const getButtonClass = (tab: TabType) =>
        `btn ${currentTab === tab ? 'btn-primary' : 'btn-info'}`;

    return (
        <div className="process-section container my-lg-5 my-md-4 my-0">
            <CustomHeading firstWord="How" lastWord="We Work" textCenter="text-center" />

            <div className="row row-cols-lg-7 row-cols-md-4 row-cols-sm-3 row-cols-2 g-2 g-lg-2 justify-content-center mt-md-4">
                {[
                    { key: 'consultation', icon: '/images/icons/Conceptualisation-icon.webp', label: 'Consultation' },
                    { key: 'planning', icon: '/images/icons/planning-icon.webp', label: 'Gathering ideas' },
                    { key: 'design', icon: '/images/icons/prototype-icon.webp', label: 'Design' },
                    { key: 'develop', icon: '/images/icons/system-design-development.webp', label: 'Development' },
                    { key: 'test', icon: '/images/icons/agile-process-testing.webp', label: 'Testing' },
                    { key: 'deliver', icon: '/images/icons/deployment-icon.webp', label: 'Deliver' },
                    { key: 'maintenance', icon: '/images/icons/agile-process-support.webp', label: 'Maintenance' },
                ].map((item) => (
                    <div className="col p-1" key={item.key}>
                        <div className="d-grid">
                            <button
                                className={getButtonClass(item.key as TabType)}
                                onClick={() => setCurrentTab(item.key as TabType)}
                            >
                                <Image src={item.icon} alt={item.label} width={64} height={64} style={{ height: "auto", width: "auto" }} />
                                <br />
                                {item.label}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sections */}
            {currentTab === 'consultation' && (
                <Section
                    id="consultation"
                    title="Consultation"
                    image="/images/process/consultation.jpg"
                    description="Looking for a company to help you with Software Development? 99 IT Solutions is providing the best solutions beginning with asking questions. We study your business vision..."
                    progress={[{ label: 'Consultation', value: 10 }]}
                />
            )}
            {currentTab === 'planning' && (
                <Section
                    id="planning"
                    subtitle="The planning stage is debatable"
                    title="but crucial"
                    image="/images/process/planning.jpg"
                    description="...With active client involvement and careful attention to detail, the 99 i.T Solutions team will work with you to create a detailed project plan and roadmap..."
                    progress={[{ label: 'Planning', value: 20 }]}
                />
            )}
            {currentTab === 'design' && (
                <Section
                    id="design"
                    subtitle="The design stage mostly."
                    title="After sorting out the scope"
                    image="/images/process/design.jpg"
                    description="...transform the planned design structure into a visual representation, including documented design structure, wireframes, and UX maps..."
                    progress={[
                        { label: 'Planning', value: 20 },
                        { label: 'Design', value: 40 },
                    ]}
                />
            )}
            {currentTab === 'develop' && (
                <Section
                    id="develop"
                    subtitle="The development stage primarily involves the core"
                    title="and extensive programming tasks"
                    image="/images/process/develop.jpg"
                    description="Maintain code organized, well-structured... Designs undergo rigorous testing using relevant technologies..."
                    progress={[
                        { label: 'Planning', value: 20 },
                        { label: 'Design', value: 40 },
                        { label: 'Develop', value: 60 },
                    ]}
                />
            )}
            {currentTab === 'test' && (
                <Section
                    id="test"
                    subtitle="Perform the project through the final diagnostics"
                    title="using the available tools"
                    image="/images/process/testing.jpg"
                    description="...code validators, broken-link checkers, website health checks, and spell-checker..."
                    progress={[
                        { label: 'Planning', value: 20 },
                        { label: 'Design', value: 40 },
                        { label: 'Develop', value: 60 },
                        { label: 'Test', value: 80 },
                    ]}
                />
            )}
            {currentTab === 'deliver' && (
                <Section
                    id="deliver"
                    subtitle="Upon reaching the handover stage"
                    title="Our priority is to ensure the client's satisfaction"
                    image="/images/process/delivery.jpg"
                    description="...packaging source files, providing usage instructions, and delivering any required training..."
                    progress={[
                        { label: 'Planning', value: 20 },
                        { label: 'Design', value: 40 },
                        { label: 'Develop', value: 60 },
                        { label: 'Test', value: 80 },
                        { label: 'Deliver', value: 100 },
                    ]}
                />
            )}
            {currentTab === 'maintenance' && (
                <Section
                    id="maintenance"
                    subtitle="During the maintenance phase"
                    title="we ensure your website remains in optimal condition and"
                    image="/images/process/support.jpg"
                    description="...Our dedicated team takes care of regular updates, security patches, and ongoing support..."
                    progress={[{ label: 'Up to date', value: 100 }]}
                />
            )}
        </div>
    );
};

interface SectionProps {
    id: string;
    image: string;
    subtitle?: string;
    title: string;
    description: string;
    progress: { label: string; value: number }[];
}

const Section: React.FC<SectionProps> = ({
    id,
    image,
    subtitle,
    title,
    description,
    progress,
}) => (
    <div id={id} className="row mt-md-5 mt-4">
        <div className="col-md-5 col-sm-5">
            <Image src={image} alt="" className="img-fluid" width={600} height={400} />
        </div>
        <div className="col-md-7 col-sm-7 mb-md-0 mb-4">
            {subtitle && <h5 className="text-darkblue mt-md-0 mt-4">{subtitle}</h5>}
            <h3>{title}</h3>
            <p>{description}</p>
            {progress.map((item, index) => (
                <div key={index} className={index > 0 ? 'mt-md-3' : ''}>
                    <h6>
                        {item.label} {item.value}%
                    </h6>
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped progress-bar-animated planning"
                            role="progressbar"
                            aria-valuenow={item.value}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: `${item.value}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Process;
