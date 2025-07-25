'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CustomHeading from '../heading';
import './our-work.scss';

interface PortfolioItem {
    id: number;
    image: string;
    name: string;
    category: 'web' | 'logo' | 'mobile' | 'products' | string;
    link: string;
}

interface OurWorkProps {
    isLogoDesignPage?: boolean;
    isWebPage?: boolean;
    isMobilePage?: boolean;
    isGraphicDesignPage?: boolean;
}

const OurWork: React.FC<OurWorkProps> = ({ isLogoDesignPage, isWebPage, isMobilePage, isGraphicDesignPage }) => {

    const portfolioItems: PortfolioItem[] = [
        {
            id: 1,
            image: '/images/portfolio/web-development/bill.jpg',
            name: "Billgenix",
            category: "web",
            link: "https://billgenix.com/"
        },
        {
            id: 2,
            image: '/images/portfolio/web-development/dental.JPG',
            name: "Anderson Lake Dental",
            category: "web",
            link: "https://andersonlakedental.com/"
        },
        {
            id: 3,
            image: '/images/portfolio/web-development/modern-agent.jpg',
            name: "Modern Agent",
            category: "web",
            link: "https://modernagent.io/"
        },
        {
            id: 4,
            image: '/images/portfolio/web-development/silverfox.jpg',
            name: "Silver Fox Pro",
            category: "web",
            link: "https://silverfoxpro.com/"
        },
        {
            id: 5,
            image: '/images/gallery/ready.jpg',
            name: "Readymade Software",
            category: "logo",
            link: "https://www.behance.net/gallery/137797663/Readymade-Software"
        },
        {
            id: 6,
            image: '/images/gallery/nar.jpg',
            name: "N Allance Tech",
            category: "logo",
            link: "https://www.behance.net/gallery/159614487/N-Allance-Tech"
        },
        {
            id: 9,
            image: '/images/portfolio/web-development/fitness.jpg',
            name: "Fitness",
            category: "web",
            link: "https://www.fitness.com/en"
        },
        {
            id: 12,
            image: '/images/portfolio/web-development/int.jpg',
            name: "Integrated Machinery",
            category: "web",
            link: "https://integratedmachinery.net/"
        },
        {
            id: 13,
            image: '/images/portfolio/web-development/jdc.jpg',
            name: "Jd Cleaning LLc",
            category: "web",
            link: "https://jdcleaningllc.com/"
        },
        {
            id: 14,
            image: '/images/portfolio/web-development/nalliancetech.png',
            name: "Nalliance Tech",
            category: "web",
            link: "https://nalliancetech.com/"
        },
        {
            id: 15,
            image: '/images/portfolio/web-development/wheel.jpg',
            name: "Wheel Barrel Products",
            category: "web",
            link: "https://wheelbarrelproducts.com/"
        },
        {
            id: 16,
            image: '/images/portfolio/web-development/zapup.jpg',
            name: "Zapup Store",
            category: "web",
            link: "https://zapupstore.com/"
        },
        {
            id: 17,
            image: '/images/portfolio/web-development/insure-heaven.jpg',
            name: "Insure Heaven",
            category: "web",
            link: "https://www.insureheaven.com/"
        },
        {
            id: 18,
            image: '/images/portfolio/web-development/fitflex.jpg',
            name: "Fitflex",
            category: "web",
            link: "https://fitflex.com.pk/"
        },
        {
            id: 19,
            image: '/images/portfolio/web-development/herbal4life.jpg',
            name: "Herbal 4 Life",
            category: "web",
            link: "https://herbal4life.pk/"
        },
        {
            id: 20,
            image: '/images/portfolio/web-development/overtop.jpg',
            name: "Over Top NC",
            category: "web",
            link: "https://www.overtopnc.com/"
        },
        {
            id: 21,
            image: '/images/portfolio/web-development/hr-billing.jpg',
            name: "Hr Billing",
            category: "web",
            link: "https://hrbillingservices.com/"
        },
        {
            id: 22,
            image: '/images/portfolio/web-development/languagepro.jpg',
            name: "Language Pro",
            category: "web",
            link: "https://languagepro.com.br/"
        },
        {
            id: 23,
            image: '/images/portfolio/web-development/kings.jpg',
            name: "kings Framing and Art Gallery",
            category: "web",
            link: "https://www.kingsframingandartgallery.com/"
        },
        {
            id: 24,
            image: '/images/portfolio/web-development/expertise.jpg',
            name: "Expertise",
            category: "web",
            link: "https://expertise.com/"
        },
        {
            id: 25,
            image: '/images/portfolio/web-development/johnfrancis.jpg',
            name: "Johnfrancis",
            category: "web",
            link: "https://johnfrancis.ca/"
        },
        {
            id: 26,
            image: '/images/portfolio/web-development/hirosatophotography.jpg',
            name: "Hiro Sato Photography",
            category: "web",
            link: "https://hirosatophotography.com/"
        },
        {
            id: 27,
            image: '/images/portfolio/web-development/azremediation.jpg',
            name: "Azremediation",
            category: "web",
            link: "https://azremediation.com/"
        },
        {
            id: 28,
            image: '/images/portfolio/web-development/rentatrailer.jpg',
            name: "Renta Trailer",
            category: "web",
            link: "https://rentatrailer.us/"
        },
        {
            id: 29,
            image: '/images/portfolio/web-development/abadraho.jpg',
            name: "Abad raho",
            category: "web",
            link: "https://abadraho.com/"
        },
        {
            id: 31,
            image: 'https://play-lh.googleusercontent.com/BwyMm9DGOE1vYctQhEpDglyypo1hbuitmVxAINfhmbukV-KeI7qKCXQpAmNuKmwdZyo=w2560-h1440-rw',
            name: "DMFR Molecular Lab",
            category: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.dmfr&hl=en&gl=US"
        },
        {
            id: 32,
            image: 'https://play-lh.googleusercontent.com/NTB0YxC5k4K_krgH0k8WEJ_JZ0T4p2C3gp_rGsCWRg0Q3QqNfqFl1HJsbhvWnDvvV6NK=w2560-h1440-rw',
            name: "Toticell",
            category: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.toticell&hl=en&gl=US"
        },
        {
            id: 33,
            image: 'https://play-lh.googleusercontent.com/VK59suKVHAFvXjBMyJwGmd1Tpyqy9UC1sytP_luSkiOuhEUR7gpii_F_czy-0X37gQ=w2560-h1440-rw',
            name: "Concord Pharmaceuticals Ltd",
            category: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.concordmpo&hl=en&gl=US"
        },
        {
            id: 34,
            image: 'https://play-lh.googleusercontent.com/ZS2LrrZeCoFwOiRJX8Yu11dYJVnUQ-Ez-7sCeAAP24Ww0Ll-0Xynx289286fn37wgHR7=w2560-h1440-rw',
            name: "Sarf ki Dunya",
            category: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.sarfkidunya&hl=en&gl=US"
        },
        {
            id: 35,
            image: 'https://play-lh.googleusercontent.com/RXEhvPL7Hq-An07MGOctm2lY3mGlDpw5nx4uVBqqVy3OagtL5kQSoJnrVfXFcBEtuoM=w2560-h1440-rw',
            name: "Nahw Ki Dunya - Arabic Quiz",
            category: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.nahwkidunya&hl=en&gl=US"
        },
        {
            id: 36,
            image: 'https://play-lh.googleusercontent.com/a4t75WTu4-Rf4UT9NYycHC2ep_1y7aIzq26ROCQrt-cu0_Kwi62PEmxiYKcqDLiXVQ=w2560-h1440-rw',
            name: "Gufhtugu - Urdu Books Library",
            category: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.gufhtugupublication&hl=en&gl=US"
        },
        {
            id: 37,
            image: 'https://play-lh.googleusercontent.com/Ha48aOOaCQvkIhSXUSmPGu9EkX-Z7bwNY4BZeiYyl92Bov5mW8-7qkcpHP6yu8wl3Rcr=w2560-h1440-rw',
            name: "Cosmeciety",
            category: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.cosmeciety_app&hl=en&gl=US"
        },
        {
            id: 38,
            image: 'https://play-lh.googleusercontent.com/2_OLdaSW5nApQ02AjVyOzOLT4vDtORvY9ERGY9X-zCFt9HcLX30q6NK0YYUsr2rC8g=w2560-h1440-rw',
            name: "SuperWomen.pk",
            category: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.superwomen.pk&hl=en&gl=US"
        },
        {
            id: 39,
            image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/e3/77/30/e3773078-78d1-83f3-4cc3-e45565b1e4d9/d0507bca-8f70-4785-add3-0fc001cac596_1.png/300x0w.webp',
            name: "Qari.io - Teacher",
            category: "mobile",
            link: "https://apps.apple.com/pk/app/qari-io-teacher/id1637227564"
        },
        {
            id: 40,
            image: '/images/products/hero3.png',
            name: "Point of Sale Software Saudi Arabia",
            category: "products",
            link: "https://pointofsalesaudi.com/"
        },
        {
            id: 41,
            image: 'https://abadraho.com/uploads/project_images/project_141/cover_1639980413.jpg',
            name: "Abad Raho",
            category: "products",
            link: "https://abadraho.com/"
        },
    ];

    const [items, setItems] = useState<PortfolioItem[]>(portfolioItems);
    const [visibleProjects, setVisibleProjects] = useState<number>(8);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filterItem = (categItem: string) => {
        setIsLoading(true);
        const updatedItems = portfolioItems.filter((currentItem) => {
            return currentItem.category === categItem;
        });

        setTimeout(() => {
            setItems(updatedItems);
            setIsLoading(false);
        }, 1000);

        setActiveCategory(categItem);
    };

    const loadMoreProjects = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleProjects(portfolioItems.length);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <section className="gallery-section portfolio-home-section px-55 rpx-0 rpt-30 pb-85 rpb-20 mt-md-5">
            <div className="container-fluid">
                <div className="section-title text-center mb-30">
                    {/* <span className="sub-title">Our Portfolio</span> */}

                    <CustomHeading
                        firstWord="Some Of"
                        lastWord="Our Work"
                        textCenter="text-left"
                    />

                </div>

                <div className='row justify-content-center'>

                    {!isLogoDesignPage || !isWebPage || !isGraphicDesignPage || !isMobilePage || (
                        <div className='col-xl-1 col-lg-1 col-md-1 col-sm-4 col-6'>
                            <div className="d-grid">
                                <button onClick={() => setItems(portfolioItems)} className={`btn btn-outline-primary ${activeCategory === null ? 'active' : ''}`}>
                                    All
                                </button>
                            </div>
                        </div>
                    )}

                    {isWebPage && (
                        <div className='col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 mt-md-0 mt-sm-0 mt-0'>
                            <div className="d-grid">
                                <button onClick={() => filterItem('web')} className={`btn btn-outline-primary ${activeCategory === 'web' ? 'active' : ''}`}>
                                    Web Development
                                </button>
                            </div>
                        </div>
                    )}

                    {isMobilePage && (
                        <div className='col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 mt-md-0 mt-sm-0 mt-2'>
                            <div className="d-grid">
                                <button onClick={() => filterItem('mobile')} className={`btn btn-outline-primary ${activeCategory === 'mobile' ? 'active' : ''}`}>
                                    Mobile Apps
                                </button>
                            </div>
                        </div>
                    )}

                    {isGraphicDesignPage && (
                        <div className='col-xl-2 col-lg-3 col-md-2 col-sm-4 col-6 mt-md-0 mt-2'>
                            <div className="d-grid">
                                <button onClick={() => filterItem('products')} className={`btn btn-outline-primary ${activeCategory === 'products' ? 'active' : ''}`}>
                                    Web Products
                                </button>
                            </div>
                        </div>
                    )}


                </div>

                <div className="row text-white justify-content-center mt-md-5 mt-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">

                    {isLoading ? (
                        <div className='col-md-12 text-center'>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                    ) : (
                        items.slice(0, visibleProjects).map((item) => {

                            const { id, name, image, link } = item;

                            return (
                                <div key={id} className="col">
                                    <div
                                        className="gallery-item style-four wow fadeInUp delay-0-8s"
                                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                                    >
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="gallery-content">
                                            <div className="gallery-content-inner">
                                                <span className="category">Our Gallery</span>
                                                <h5>{name}</h5>
                                                <a target="_blank" rel="noreferrer" href={link}>
                                                    <i className="fas fa-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)

                        })

                    )}

                </div>
                {visibleProjects < portfolioItems.length && (
                    <button className='btn btn-primary mx-auto d-block' onClick={loadMoreProjects}>
                        More Projects
                    </button>
                )}
            </div>
        </section>
    )
}

export default OurWork;