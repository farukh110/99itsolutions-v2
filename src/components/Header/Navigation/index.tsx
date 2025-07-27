'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './navigation.scss';

interface NavigationProps {
    className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {

    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState<string>(pathname || '');

    useEffect(() => {
        if (pathname) {
            setActiveItem(pathname);
        }
    }, [pathname]);

    const handleActiveItem = (item: string) => {
        setActiveItem(item);
    };

    return (
        <div className={`restly-header-main-menu ${className || ""}`}>
            <ul className='main-navigation'>
                <li>
                    <Link
                        href="/"
                        onClick={() => handleActiveItem('/')}
                        className={activeItem === '/' ? 'actve-menu-top' : ''}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about-us"
                        onClick={() => handleActiveItem('/about-us')}
                        className={activeItem === '/about-us' ? 'actve-menu-top' : ''}
                    >
                        Who We Are
                    </Link>
                </li>
                <li>
                    <Link
                        href='/services'
                        onClick={() => handleActiveItem('/services')}
                        className={activeItem.startsWith('/services') ? 'actve-menu-top' : ''}
                    >
                        What We Do <i className="fa fa-angle-down" />
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link
                                href="/services/web-development"
                                onClick={() => handleActiveItem('/services/web-development')}
                                className={activeItem === '/services/web-development' ? 'actve-menu-top' : ''}
                            >
                                Web Development
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/app-design-and-development"
                                onClick={() => handleActiveItem('/services/app-design-and-development')}
                                className={activeItem === '/services/app-design-and-development' ? 'actve-menu-top' : ''}
                            >
                                App Design & Development
                            </Link>
                        </li>

                    </ul>
                </li>
                <li>
                    <Link
                        href="/portfolio"
                        onClick={() => handleActiveItem('/portfolio')}
                        className={activeItem === '/portfolio' ? 'actve-menu-top' : ''}
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        onClick={() => handleActiveItem('/contact')}
                        className={activeItem === '/contact' ? 'actve-menu-top' : ''}
                    >
                        Contact
                    </Link>
                </li>

                <li>
                    <div className="menu-btn">
                        <Link href='/outsourcing' className="btn btn-danger btn-get2">Outsourcing</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
