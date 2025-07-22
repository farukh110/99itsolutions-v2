'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomHeading from '../heading';
import Image from 'next/image';
import './products-portfolio.scss';

interface ProductItem {
    id: string;
    title: string;
    description: string;
    image: string;
}

const ProductsPortfolio: React.FC = () => {

    const router = useRouter();
    const [activeItem, setActiveItem] = useState<string>('Manufacturing');

    const items: ProductItem[] = [
        {
            id: 'Manufacturing',
            title: 'Manufacturing',
            description: `
        <ul> 
          <li>1) ERP</li>
          <li>2) Accounting Management</li>
          <li>3) Inventory Management System</li>
          <li>4) Retail/Wholesale/Inventory</li>
        </ul>
      `,
            image: '/images/products-catalog/menufacturing.jpg',
        },
        {
            id: 'Healthcare',
            title: 'Pharmacy & Healthcare',
            description: `
        <ul>
          <li>1) Pharmacy Management System</li>
          <li>2) Hospital Management System</li>
          <li>3) Clinic Management System</li>
          <li>4) Doctor Appointment Booking</li>
          <li>5) Patient Management</li>
        </ul>
      `,
            image: '/images/products-catalog/healthcare.jpeg',
        },
        {
            id: 'Logistics',
            title: 'Logistics & Transportation',
            description: `
        <ul>
          <li>1) Courier & Logistics System</li>
          <li>2) Logistics Management</li>
          <li>3) Shipping Solution</li>
          <li>4) Fleet Management System</li>
          <li>5) Car Rental/Fleet Management System</li>
          <li>6) Taxi/Uber Management System</li>
          <li>7) Delivery Solution</li>
        </ul>
      `,
            image: '/images/products-catalog/logistics.jpg',
        },
        {
            id: 'Finance',
            title: 'Finance & Business Management',
            description: `
        <ul>
          <li>1) Accounting and Billing Software</li>
          <li>2) Payroll System</li>
          <li>3) Client Manager</li>
          <li>4) Bank/Money Management System</li>
        </ul>
      `,
            image: '/images/products-catalog/finance.webp',
        },
        {
            id: 'hr',
            title: 'HR & Employee Management',
            description: `
        <ul>
          <li>1) Human Resource Management System</li>
          <li>2) Attendance System</li>
          <li>3) Employee Management System</li>
        </ul>
      `,
            image: '/images/products-catalog/hr.jpg',
        },
        {
            id: 'Education',
            title: 'Education & Learning',
            description: `
        <ul>
          <li>1) School Management System</li>
          <li>2) Learning Management System (LMS)</li>
          <li>3) Institute Management System</li>
          <li>4) Online Course Platform</li>
          <li>5) Quiz Game</li>
        </ul>
      `,
            image: '/images/products-catalog/education.jpg',
        },
        {
            id: 'Retail',
            title: 'Retail & POS',
            description: `
        <ul>
          <li>1) ERP with POS</li>
          <li>2) Point of Sale (POS) System</li>
          <li>3) eCommerce with POS</li>
          <li>4) Restaurant Management System with POS</li>
          <li>5) Mobile Shop & Repair Management</li>
          <li>6) eMarket / eShop</li>
        </ul>
      `,
            image: '/images/products-catalog/retail.jpg',
        },
        {
            id: 'real',
            title: 'Real Estate & Construction',
            description: `
        <ul>
          <li>1) Property Management System</li>
          <li>2) Real Estate Management</li>
          <li>3) Apartment Management System</li>
        </ul>
      `,
            image: '/images/products-catalog/real.jpg',
        },
        {
            id: 'travel',
            title: 'Travel & Tourism',
            description: `
        <ul>
          <li>1) Tour & Travel Management System</li>
          <li>2) Vacation Management System</li>
          <li>3) Hotel Booking Management System</li>
        </ul>
      `,
            image: '/images/products-catalog/travel.jpg',
        },
        {
            id: 'Miscellaneous',
            title: 'Miscellaneous',
            description: `
        <ul>
          <li>1) CRM (Customer Relationship Management)</li>
          <li>2) Job Portal</li>
          <li>3) Salon Management System</li>
          <li>4) Project Management System</li>
          <li>5) CRM for Insurance</li>
          <li>6) Library Management System</li>
          <li>7) News Management System</li>
        </ul>
      `,
            image: '/images/products-catalog/miscellaneous.jpg',
        },
    ];

    return (
        <div className='products-catalog my-md-5 my-2'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-12 pe-md-5'>
                        <CustomHeading
                            firstWord="Readymade and Custom-Made"
                            lastWord="Solutions for Diverse Industries"
                            textCenter="text-center"
                        />
                        <p>
                            99 IT Solutions delivers industry-focused ready-made & fully custom software
                            solutions crafted to overcome unique challenges and enhance business success.
                            Our expertise ensures each solution is tailored and quickly customizable to meet
                            the dynamic requirements of the industries we cater to.
                        </p>
                    </div>

                    <div className='col-lg-5 col-md-6 col-12 ps-lg-0 ps-md-4 pe-lg-5 pe-md-4'>
                        <div className='row left-panel'>
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className={`col-md-6 col-12 industry-item ${activeItem === item.id ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveItem(item.id)}
                                >
                                    {item.title}
                                </div>
                            ))}

                            <div className='col-md-12'>
                                <button
                                    onClick={() => router.push('/get-free-quote')}
                                    className='btn btn-primary btn-request d-block mx-auto'
                                >
                                    Request a quote/Demo
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-7 col-md-6 col-12 d-flex flex-column align-items-end pe-md-5'>
                        {items.map(
                            (item) =>
                                activeItem === item.id && (
                                    <div key={item.id} className='row image-content-area'>
                                        <div className='img-outer'>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={500}
                                                height={300}
                                            />
                                        </div>

                                        <div className='content-shadow'>
                                            <p className='right-title'>{item.title}</p>
                                            <div
                                                className='right-description'
                                                dangerouslySetInnerHTML={{ __html: item.description }}
                                            />
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPortfolio;
