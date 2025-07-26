"use client";

import React from "react";
import CustomHeadingTwo from "@/components/heading/HeadingTwo";
import CustomHeading from "@/components/heading";
import Process from "@/components/Process";
import Technologies from "@/components/Techologies";
import ContactForm from "@/components/ContactForm";
import HomeBannerTwo from "@/components/HomeBannerTwo";
import OutSourcingServiceTwo from "@/components/OutSourcingServiceTwo";
import OutsourcingServices from "@/components/OutsourcingServices";
import MainServicesTwo from "@/components/MainServicesTwo";
import ProductsCatalog from "@/components/ProductsCatalog";
import { useRouter } from "next/navigation";
import "./outsourcing.scss";

const OutSourcing: React.FC = () => {

    const router = useRouter();

    return (
        <>
            <HomeBannerTwo />

            <div className="container mb-md-5 mt-md-5 mt-sm-5 mt-4">
                <div className="row justify-content-center mt-md-3">
                    <div className="col-md-12">
                        <CustomHeadingTwo
                            firstWord="The Future of Business Success Starts Here:"
                            lastWord="Outsource Smarter, Grow Faster & Earn Higher"
                            textCenter="text-center"
                        />

                        <CustomHeadingTwo
                            firstWord="99 IT Solutions: Your Trusted Tech Partner"
                            lastWord="Reduce Costs, Maximize Profitability, and Scale Efficiently with Our Outsourcing Services"
                            textCenter="text-center"
                        />
                    </div>
                </div>

                <p>
                    At 99ITsolutions.com, we specialize in web design, software and product
                    development as your dedicated outsourcing partner. Whether you&apos;re
                    looking to optimize your budget, scale operations, or meet tight
                    deadlines, our expert team is here to help.
                </p>
            </div>

            <OutSourcingServiceTwo />

            <div className="container">
                <CustomHeading
                    firstWord="How We Help You Scale &"
                    lastWord="Earn More"
                    textCenter="text-center mt-md-4"
                />

                <div className="outsourcing">
                    <ul className="why-out-sourcing">
                        {[
                            {
                                title: "Manage Small or Large Projects at Lower Costs",
                                desc:
                                    "Outsource Google Ads, Facebook marketing, web development, and content creation at a lower rate than hiring full-time staff.",
                            },
                            {
                                title: "Test Us with a Small Project",
                                desc:
                                    "Before committing, start with a small task and experience our speed, quality, and reliability.",
                            },
                            {
                                title: "Increase Your Profit & Reduce Risk",
                                desc:
                                    "Keep your existing clients while outsourcing part of the work. Earn more without the hassle of additional hires.",
                            },
                            {
                                title: "No Need to Downsize Your Team",
                                desc:
                                    "We help manage workload overflow so you don&apos;t have to lay off employees—just scale smarter.",
                            },
                        ].map((item, idx) => (
                            <li key={idx}>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>{item.title}</h5>
                                    {item.desc}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <OutsourcingServices />

            <div className="container mb-md-5 mt-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <CustomHeading
                            firstWord="Try Us with a"
                            lastWord="Small Task!"
                            textCenter="text-center"
                        />

                        <p className="text-center">
                            Experience our quality, speed, and professionalism firsthand with a
                            small trial project. We&apos;re confident you&apos;ll see the difference.
                        </p>

                        <CustomHeading
                            firstWord="Earn Referral"
                            lastWord="Rewards"
                            textCenter="text-center"
                        />

                        <p className="text-center">
                            Refer businesses to us and enjoy exclusive rewards. Let&apos;s grow
                            together!
                        </p>

                        <CustomHeading
                            firstWord="Let&apos;s Connect How"
                            lastWord="We Can Help You!"
                            textCenter="text-center mt-md-4"
                        />

                        <p className="text-center">
                            Your success starts with a conversation Ready to get started?
                            Schedule a free consultation quick video call via Zoom or Google
                            Meeting to discuss your outsourcing needs today and discover how
                            outsourcing can help you scale and save. We&apos;re here to be your
                            reliable partner in success. Let&apos;s scale your business together!
                        </p>

                        <button
                            onClick={() => router.push("/contact")}
                            className="btn btn-primary btn-connect mx-auto d-block"
                        >
                            Contact Us Today!
                        </button>
                    </div>
                </div>
            </div>

            <MainServicesTwo />
            <ProductsCatalog />
            <Process />
            <Technologies />
            <ContactForm customPadding="ps-0 pe-0" />
        </>
    );
};

export default OutSourcing;
