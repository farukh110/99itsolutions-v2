'use client';

import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
import './contact-form.scss';

interface ContactFormProps {
    customPadding?: string;
}

interface FormValues {
    name: string;
    email: string;
    phone: string;
    timings: string;
    services: string;
    products: string;
    budget: string;
    social: string;
    message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ customPadding }) => {

    const form = useRef<HTMLFormElement>(null);
    const serviceDropdownRef = useRef<HTMLDivElement>(null);
    const productDropdownRef = useRef<HTMLDivElement>(null);

    const YOUR_SERVICE_ID = 'service_jeqiunf';
    const YOUR_TEMPLATE_ID = 'template_smrg2vr';
    const YOUR_USER_ID = 'w66GluiKNpzOAH91p';

    const [showServiceDropdown, setShowServiceDropdown] = useState(true);
    const [showProductDropdown, setShowProductDropdown] = useState(true);
    const [selectedService, setSelectedService] = useState('Service');
    const [selectedProduct, setSelectedProduct] = useState('Product');

    const initialValues: FormValues = {
        name: '',
        email: '',
        phone: '',
        timings: 'Best time to call',
        services: 'Service',
        products: 'Product',
        budget: 'Budget',
        social: 'Social',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        timings: Yup.string().notOneOf(['Best time to call'], 'Please select a call time'),
        budget: Yup.string().notOneOf(['Budget'], 'Please select your budget'),
        social: Yup.string().notOneOf(['Social'], 'Please select how you found us'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        if (!form.current) return;

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_USER_ID)
            .then(() => {
                message.success("Message sent successfully!");
                resetForm();
            })
            .catch(() => {
                message.error("Failed to send message. Please try again.");
            });
    };

    const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setSelectedService(selected);
        setShowProductDropdown(selected === 'Service');

        if (serviceDropdownRef.current) {
            serviceDropdownRef.current.className = 'col-md-12 my-md-2 my-2';
        }
    };

    const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setSelectedProduct(selected);
        setShowServiceDropdown(selected === 'Product');

        if (productDropdownRef.current) {
            productDropdownRef.current.className = 'col-md-12 my-md-2 my-2';
        }
    };

    return (
        <div className='contact-form-section pt-md-4 pt-5 pb-md-4 pb-5'>
            <div className='container form-container my-md-5 my-4'>
                <h2 className='text-center'>Let&apos;s Talk Business</h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form ref={form} className={`custom-form ${customPadding}`}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-12 my-md-2 my-2'>
                                            <Field type='text' name='name' placeholder='Name' className='form-control' />
                                            <ErrorMessage name='name' component='div' className='error text-danger mt-md-2' />
                                        </div>

                                        <div className='col-md-12 my-md-2 my-2'>
                                            <Field type='text' name='phone' placeholder='enter your phone number' className='form-control' />
                                            <ErrorMessage name='phone' component='div' className='error text-danger mt-md-2' />
                                        </div>

                                        {showServiceDropdown && (
                                            <div ref={serviceDropdownRef} className='col-md-12 my-md-2 my-2 service-dropdown'>
                                                <Field as='select' name='services' className='form-control' value={selectedService} onChange={handleServiceChange}>
                                                    <option value='Service'>Select Service</option>
                                                    <option value='Domain'>Domain</option>
                                                    <option value='Hosting'>Hosting</option>
                                                    <option value='Graphic Design'>Graphic Design</option>
                                                    <option value='Logo Design'>Logo Design</option>
                                                    <option value='Stationery Design'>Stationery Design</option>
                                                    <option value='Cad Design'>Cad Design</option>
                                                    <option value='Video Animation'>Video Animation</option>
                                                    <option value='Content Writing'>Content Writing</option>
                                                    <option value='Web Design'>Web Design</option>
                                                    <option value='Digital marketing'>Digital marketing</option>
                                                    <option value='SEO'>SEO</option>
                                                    <option value='Social Media Marketing'>Social Media Marketing</option>
                                                    <option value='PPC'>PPC</option>
                                                    <option value='Software Development'>Software Development</option>
                                                    <option value='Web Development'>Web Development</option>
                                                    <option value='Mobile App Development'>Mobile App Development</option>
                                                    <option value='Xreality'>Xreality</option>
                                                    <option value='AR'>AR</option>
                                                    <option value='VR'>VR</option>
                                                    <option value='MR'>MR</option>
                                                    <option value='Game Development'>Game Development</option>
                                                    <option value='Readymade Softwares'>Readymade Softwares</option>
                                                    <option value='Product Development'>Product Development</option>
                                                </Field>
                                                <ErrorMessage name='services' component='div' className='error text-danger mt-md-2' />
                                            </div>
                                        )}

                                        <div className='col-md-12 my-md-2 my-2'>
                                            <Field as='select' name='budget' className='form-control'>
                                                <option value='Budget'>Select Your Budget</option>
                                                <option value='$500 - $1000'>$500 - $1000</option>
                                                <option value='$1000 - $5000'>$1000 - $5000</option>
                                                <option value='$5000 - $10000'>$5000 - $10000</option>
                                                <option value='$10000 & up'>$10000 & up</option>
                                            </Field>
                                            <ErrorMessage name='budget' component='div' className='error text-danger mt-md-2' />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-12 my-md-2 my-2'>
                                            <Field type='email' name='email' placeholder='enter your email' className='form-control' />
                                            <ErrorMessage name='email' component='div' className='error text-danger mt-md-2' />
                                        </div>

                                        <div className='col-md-12 my-md-2 my-2'>
                                            <Field as='select' name='timings' className='form-control'>
                                                <option value='Best time to call'>Best time to call</option>
                                                <option value='Morning'>Morning</option>
                                                <option value='Afternoon'>Afternoon</option>
                                                <option value='Evening'>Evening</option>
                                                <option value='Anytime'>Anytime</option>
                                            </Field>
                                            <ErrorMessage name='timings' component='div' className='error text-danger mt-md-2' />
                                        </div>

                                        {showProductDropdown && (
                                            <div ref={productDropdownRef} className='col-md-12 my-md-2 my-2'>
                                                <Field as='select' name='products' className='form-control' value={selectedProduct} onChange={handleProductChange}>
                                                    <option value='Product'>Select Product</option>
                                                    <option value='ERP'>ERP</option>
                                                    <option value='POS'>POS</option>
                                                    <option value='CRM'>CRM</option>
                                                    <option value='School Management System'>School Management System</option>
                                                    <option value='LMS'>LMS</option>
                                                    <option value='Restaurant Management System'>Restaurant Management System</option>
                                                    <option value='HR Management System'>HR Management System</option>
                                                    <option value='Hospital Management System'>Hospital Management System</option>
                                                    <option value='Clinic Management System'>Clinic Management System</option>
                                                    <option value='Pharmacy Management System'>Pharmacy Management System</option>
                                                    <option value='Hotel Management System'>Hotel Management System</option>
                                                    <option value='Property Management System'>Property Management System</option>
                                                    <option value='Job Portal'>Job Portal</option>
                                                    <option value='Food System'>Food System</option>
                                                    <option value='E-commerce website & Software'>E-commerce website & Software</option>
                                                    <option value='News Management System'>News Management System</option>
                                                    <option value='Mobile shop software'>Mobile shop software</option>
                                                    <option value='Other software (Please specify details)'>Other software (Please specify details)</option>
                                                </Field>
                                                <ErrorMessage name='products' component='div' className='error text-danger mt-md-2' />
                                            </div>
                                        )}

                                        <div className='col-md-12 my-md-2 my-2'>
                                            <Field as='select' name='social' className='form-control'>
                                                <option value='Social'>How did You Find Us</option>
                                                <option value='Google'>Google</option>
                                                <option value='Social Media'>Social Media</option>
                                                <option value='Through a Friend'>Through a Friend</option>
                                                <option value='From another website'>From another website</option>
                                                <option value='Others'>Others</option>
                                            </Field>
                                            <ErrorMessage name='social' component='div' className='error text-danger mt-md-2' />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-12 my-md-2 my-2'>
                                            <Field as='textarea' name='message' className='form-control custom-text-area' placeholder='Message' />
                                            <ErrorMessage name='message' component='div' className='error text-danger mt-md-2' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row justify-content-center mt-md-1 mt-2'>
                                <div className='col-xxl-12 col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12 my-md-3'>
                                    <div className='d-grid'>
                                        <button type='submit' className='btn btn-primary p-3'>
                                            Get a Free Quote/Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ContactForm;