'use client';

import React from 'react';
import Image from 'next/image';
import './focused.scss';

interface FocusedItem {
    name: string;
    img: string;
}

const Focused: React.FC = () => {
    const items: FocusedItem[] = [
        { name: 'Government', img: '/images/focused/g1.png' },
        { name: 'Corporate', img: '/images/focused/c1.png' },
        { name: 'Ecommerce', img: '/images/focused/e1.png' },
        { name: 'Retail', img: '/images/focused/r1.png' },
        { name: 'Education', img: '/images/focused/ed1.png' },
        { name: 'Travel & Tourism', img: '/images/focused/t1.png' },
        { name: 'Insurance', img: '/images/focused/i1.png' },
        { name: 'Healthcare', img: '/images/focused/h1.png' },
    ];

    return (
        <div className="focused-section pb-md-1 pb-4">
            <div className="container focused-container pt-md-5 pt-4">
                <h2 className="text-center text-white">Focused Verticles</h2>

                <div className="row justify-content-center my-md-5 my-0">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-md-4 my-2 p-0"
                        >
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-3 col-sm-8 col-8 p-0">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        className="img-fluid mx-auto d-block"
                                        style={{ height: "auto", width: "auto" }}
                                    />
                                </div>
                                <div className="col-md-7 col-sm-8 col-8 p-0">
                                    <h5 className="mt-md-1 text-white mb-0">{item.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Focused;
