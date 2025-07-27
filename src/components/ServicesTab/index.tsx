'use client';

import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Image from 'next/image';
import './services-tab.scss';

const ServicesTab: React.FC = () => {
    const [key, setKey] = useState<string>('appsDev');

    return (
        <div className="container tab-container mt-md-5 mb-md-5 mb-4">
            <div className="shadow">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => {
                        if (k) setKey(k);
                    }}
                    className="mb-3"
                >
                    <Tab eventKey="appsDev" title="Mission">
                        <div className="container tab-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 p-md-3">
                                    <Image
                                        src="/images/about/Mission.JPG"
                                        alt="Mission"
                                        width={400}
                                        height={300}
                                        className="img-fluid w-100 h-auto"
                                    />
                                </div>
                                <div className="col-md-8 col-sm-8 p-md-3">
                                    <h4 className="title">Mission</h4>
                                    <p>
                                        99 IT Solutions empowers businesses with innovative web, software, and marketing solutions.
                                        Our dedicated team delivers high-quality, tailored services to drive success.
                                        We aim to establish lasting partnerships, fueling the growth and prosperity of businesses worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="webSol" title="Vision">
                        <div className="tab-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 p-md-3">
                                    <Image
                                        src="/images/about/vision.JPG"
                                        alt="Vision"
                                        width={400}
                                        height={300}
                                        className="img-fluid w-100 h-auto"
                                    />
                                </div>
                                <div className="col-md-8 col-sm-8 p-md-3">
                                    <h4 className="title">Vision</h4>
                                    <p>
                                        Our vision is to be your trusted technology partner and a global leader in delivering
                                        best and unique design, software development and marketing services to improve our
                                        clients&apos; productivity and business strength.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="graphicDes" title="Values">
                        <div className="tab-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 p-md-3">
                                    <Image
                                        src="/images/about/values.JPG"
                                        alt="Values"
                                        width={400}
                                        height={300}
                                        className="img-fluid w-100 h-auto"
                                    />
                                </div>
                                <div className="col-md-8 col-sm-8 p-md-3">
                                    <h4 className="title">Client-Centric Partnership</h4>
                                    <p>
                                        Forge deep client business relationships, deeply understanding their unique goals
                                        and challenges, and collaboratively crafting solutions that exceed expectations.
                                    </p>

                                    <h4 className="title">Trailblazing Innovation</h4>
                                    <p>
                                        Embrace innovation, constantly pushing boundaries, deliver market-disrupting
                                        solutions and drive industry advancements through emerging tech.
                                    </p>

                                    <h4 className="title">Collaborative Excellence</h4>
                                    <p>
                                        Foster collaborative talents, deliver exceptional solutions for remarkable outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default ServicesTab;
