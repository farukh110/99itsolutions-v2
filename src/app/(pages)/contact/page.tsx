// 'use client';

import React from 'react';
import { Metadata } from 'next';
import CustomBanner from '@/components/CustomBanner';
import CustomHeading from '@/components/heading';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import './index.scss';

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "At 99Itsolutions, our focus is you. Our expert team comprises of professionals with varying business skillsets so we can better understand your needs, and put our money where our mouth is in offering you top-tier solutions. From the start to finish of your digital requirements, and beyond we are here to help.",
};

const Contact: React.FC = () => {
  return (
    <>
      <CustomBanner
        imgSource="/images/contact/contact-bg1.jpg"
        imgSourceAlt="Contact Us"
      />

      <section className="contact-page py-30 pb-5 rpy-100 pt-4">
        <CustomHeading
          firstWord="Business Centric"
          lastWord="Solutions"
          textCenter="text-center"
        />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-md-8 pb-5">
              <p>
                At 99Itsolutions, our focus is you. Our expert team comprises of professionals with varying business skillsets so we can better understand your needs, and put our money where our mouth is in offering you top-tier solutions. From the start to finish of your digital requirements, and beyond we are here to help.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-shad">
          <div className="container ps-0 pe-0">
            <div className="row mt-md-4 justify-content-center">
              <div className="col-lg-7 bg-white left-border-radius">
                <div className="contact-form">
                  <ContactForm customPadding="ps-md-3 ps-3 pe-md-5 pe-3" />
                </div>
              </div>

              <div className="col-lg-5 p-0">
                <div className="contact-form-left bgs-cover h-100">
                  <div className="get_in_toch_head pt-md-5 pt-4 pb-4 ps-md-5 ps-0 pe-2">
                    <h5 className="text-xl-left text-center">GET IN TOUCH</h5>

                    <div className="contact_team text-xl-left">
                      <p className="contact_para text-white">Our Teams are here to help</p>
                    </div>

                    {/** PHONE */}
                    <div className="row contact_detail_info">
                      <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-1 col-sm-2 col-3 contact_icon">
                        <Image src="/images/contact/icons/phone.png" alt="Phone" width={24} height={24} style={{ height: "auto", width: "auto" }} />
                      </div>
                      <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-11 col-sm-10 col-9 pe-xl-4 pe-sm-3 pe-3 contact_no text-white">
                        <span className="bold_text">PHONE:</span>
                        <br />
                        <span className="normal_text">
                          <a href="tel:+923312939594">+92 331 293-9594</a>
                        </span>
                      </div>
                    </div>

                    {/** EMAIL */}
                    <div className="row contact_detail_info mt-xl-3">
                      <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-1 col-sm-2 col-3 contact_icon">
                        <Image src="/images/contact/icons/email.png" alt="Email" width={24} height={24} style={{ height: "auto", width: "auto" }} />
                      </div>
                      <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-11 col-sm-10 col-9 pe-xl-4 pe-sm-3 pe-3 contact_no text-white">
                        <span className="bold_text">EMAIL:</span>
                        <br />
                        <span className="normal_text">
                          <a href="mailto:info@99itsolutions.com">info@99itsolutions.com</a>
                        </span>
                      </div>
                    </div>

                    {/** OFFICE */}
                    <div className="row contact_detail_info mt-xl-3">
                      <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-1 col-sm-2 col-3 contact_icon">
                        <Image src="/images/contact/icons/time.png" alt="Office" width={24} height={24} style={{ height: "auto", width: "auto" }} />
                      </div>
                      <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-11 col-sm-10 col-9 pe-xl-4 pe-sm-3 pe-3 contact_no text-white">
                        <span className="bold_text text-uppercase">Office:</span>
                        <br />
                        <span className="normal_text">
                          Shaheen Arcade, 26 National Stadium Rd,<br />
                          Shanti Nagar Chandni Chowk (New Town), Karachi, Karachi City, Sindh 74800
                        </span>
                      </div>
                    </div>

                    {/** OPEN HOURS */}
                    <div className="row contact_detail_info mt-xl-3">
                      <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-1 col-sm-2 col-3 contact_icon">
                        <Image src="/images/contact/icons/location.png" alt="Open Hours" width={24} height={24} style={{ height: "auto", width: "auto" }} />
                      </div>
                      <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-11 col-sm-10 col-9 pe-xl-4 pe-sm-3 pe-3 contact_no text-white">
                        <span className="bold_text text-uppercase">Open Hours:</span>
                        <br />
                        <span className="normal_text">Mon-Fri: 9 am - 6 pm | Sat-Sun: Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Ready Set Section */}
      <div className="ready_set">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="what_next_headings">
                    <h4 className="next_hea">READY, SET , GO !</h4>
                    <h1>WHAT&apos;S NEXT ?</h1>
                  </div>
                </div>

                {/** Step 1 */}
                <div className="col-12">
                  <div className="row justify-content-md-start justify-content-center">
                    <div className="col-lg-1" />
                    <div className="col-lg-2">
                      <div className="proposal_no">1</div>
                    </div>
                    <div className="col-lg-6 mt-md-2">
                      <div className="proposal">
                        <h5>Prepare a proposal</h5>
                        <p className="mt-3">We&apos;ve sat with you and discussed all your requirements in detail. Time to put it on paper.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/** Step 2 */}
                <div className="col-12">
                  <div className="row justify-content-md-start justify-content-center">
                    <div className="col-lg-2" />
                    <div className="col-lg-2 discuss_content">
                      <div className="proposal_no">2</div>
                    </div>
                    <div className="col-lg-6 discuss_content mt-md-2">
                      <div className="proposal">
                        <h5>Discuss it</h5>
                        <p className="mt-3">
                          Internally, your project team starts to form, lots of brainstorming and strategizing done to work out what&apos;s best for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/** Step 3 */}
                <div className="row justify-content-md-start justify-content-center">
                  <div className="col-lg-3" />
                  <div className="col-lg-3 mt-md-2 discuss_content">
                    <div className="proposal_no">3</div>
                  </div>
                  <div className="col-lg-6 mt-md-2 discuss_content">
                    <div className="proposal">
                      <h5>Start the project</h5>
                      <p className="mt-3">
                        Frameworks are set up, teams working full steam ahead on front end, back end, content, design, branding, SEO, SMM, videos, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** Side Images */}
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-5">
              <div className="contact_img">
                <div className="row">
                  <div className="col-md-6">
                    <Image className="hands" src="/images/contact/img-1.png" alt="Contact Illustration" width={379} height={260} style={{ objectFit: "contain" }} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-2 mt-4">
                    <Image className="quote_img" src="/images/contact/quote.svg" alt="Quote" width={234} height={70} style={{ objectFit: "contain" }} />
                    <Image className="contact_left study" src="/images/contact/img-3.png" alt="Study" width={230} height={217} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="col-md-1">
                    <Image className="design" src="/images/contact/img-2.png" alt="Design" width={252} height={406} style={{ objectFit: "contain" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
