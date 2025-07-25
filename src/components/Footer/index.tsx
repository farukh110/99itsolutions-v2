'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './footer.scss';

const Footer: React.FC = () => {

    const customDate = new Date();

    return (
        <>
            <footer className="main-footer footer-one text-white">
                <div className="footer-widget-area bgs-cover pt-md-2 pt-2 pb-md-0">
                    <div className="container">
                        {/* <div className='row'>
                            <div className='col-md-4'>
                                <div className="d-flex align-items-center">
                                    <div className="ft2-icon">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="ft2-content">
                                        <label>600</label>
                                        <span>Likes</span></div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="d-flex align-items-center">
                                    <div className="ft2-icon">
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className="ft2-content">
                                        <label>20</label>
                                        <span>Followers</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="d-flex align-items-center">
                                    <div className="ft2-icon">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <div className="ft2-content">
                                        <label>100</label>
                                        <span>Likes</span></div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row mt-lg-4 mt-md-4 mb-md-0">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="footer-widget about-widget">
                                    <div className="footer-logo mt-md-0 mt-2 mb-md-1">
                                        <Link href="/"><Image className='img-fluid' src="/images/footer-logo.png" width={150}
                                            height={40} alt="Logo" /></Link>
                                    </div>
                                    <div className="text dark_blue">

                                        Since 2015, 99 IT Solutions has been delivering cutting-edge technology solutions to businesses worldwide. We specialize in web and software development, product development, WhatsApp Business API and chatbot integrations, DevOps, solutions architecture, IT outsourcing, and consulting.

                                        {/* Our team of experienced professionals is dedicated to providing high-quality solutions tailored to your business needs. */}

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="footer-widget link-widget ml-3">
                                    <h4 className="footer-title">Important Links </h4>
                                    <ul className="list-style-two">
                                        <li><Link href='/'> Home </Link></li>
                                        <li><Link href="!#">Who We are </Link></li>
                                        <li><Link href="!#">What we do </Link></li>

                                        <li><Link href="!#">portfolio</Link></li>

                                        <li><Link href='/contact'> Contact Us </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="footer-widget link-widget ml-3">
                                    <h4 className="footer-title">Services Links </h4>
                                    <ul className="list-style-two">
                                        <li><Link href='/services/web-development'> Software Development </Link></li>
                                        <li><Link href='/services/app-design-and-development'> Mobile App Development </Link></li>
                                        <li><Link href='/services/web-development'>Custom Web Design </Link></li>
                                        <li><Link href='/services/web-development'>AI/ML Solutions </Link></li>
                                        <li><Link href='/services/web-development'>Cloud/DevOps Solutions</Link></li>
                                        {/* <li><Link to='/services/web-development'>Whatsapp Business Solutions</Link></li>
                                        <li><Link to='/services/web-development'>Whatsapp Chatbot Development</Link></li> */}

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="footer-widget link-widget ml-3">
                                    <h4 className="footer-title">Product Solutions </h4>
                                    <ul className="list-style-two">
                                        <li><Link href='/'> ERP </Link></li>
                                        <li><a href="!#">POS </a></li>
                                        <li><a href="!#">CRM</a></li>
                                        <li><a href="!#">LMS</a></li>
                                        <li><a href="!#">School  Mgmt Sys</a></li>
                                        <li><a href="!#">Hotel Mgmt Sys</a></li>
                                        <li><a href="!#">Warehouse Mgmt Sys</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12 col-sm-6">
                                <div className="footer-widget contact-widget mr-0 rmr-0">
                                    <h4 className="footer-title">Contacts</h4>
                                    <ul className="list-style-two">
                                        <li><i className="fa-solid fa-phone"></i> <a className='text-lowercase' href="callto:+923312939594">+923312939594</a></li>
                                        <li><i className="fas fa-envelope"></i> <a className='text-lowercase pulse' href="mailto:contact@99itsolutions.com">Contact@99itsolutions.com</a></li>
                                        <li><i className="fa fa-map-marker-alt"></i> <span>Shaheen Arcade, 26 National Stadium Rd, Shanti Nagar Chandni Chowk (New Town), Karachi, Karachi City, Sindh 74800</span></li>

                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget newsletter-widget">
                                    <h4 className="footer-title">LET’S GET STARTED!</h4>
                                    <p>Get in touch today. We’re ready!</p>
                                    <form action="">
                                        <input type="email" name="EMAIL" placeholder="Your Email" required="" />
                                        <button value="submit"><i className="fa fa-location-arrow"></i></button>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="copyright-area bg-blue">
                    <div className="container">
                        <div className="copyright-inner pt-md-3">
                            <div className="social-style-one mb-md-2">
                                <a target='_blank' rel="noreferrer" href="https://www.facebook.com/Ninetynineitsolutions">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://twitter.com/99itsolutions">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/99i.tsolutions">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/99itsolutions">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://www.pinterest.com/99itsolutions/">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://www.behance.net/99-itsolutions">
                                    <i className="fab fa-behance"></i>
                                </a>
                            </div>
                            <p>Copyright @ 2015-{customDate.getFullYear()} 99 iT Solutions | All Rights Reserved. Powered by 99 iT Solutions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;