'use client';

import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
import './free-quote.scss';

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

const RequestDemo: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const serviceDropdownRef = useRef<HTMLDivElement>(null);
    const productDropdownRef = useRef<HTMLDivElement>(null);

    const YOUR_SERVICE_ID = 'service_jeqiunf';
    const YOUR_TEMPLATE_ID = 'template_smrg2vr';
    const YOUR_USER_ID = 'w66GluiKNpzOAH91p';

    const [showServiceDropdown, setShowServiceDropdown] = useState<boolean>(true);
    const [showProductDropdown, setShowProductDropdown] = useState<boolean>(true);
    const [selectedService, setSelectedService] = useState<string>('Service');
    const [selectedProduct, setSelectedProduct] = useState<string>('Product');

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

    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        if (!form.current) return;

        emailjs
            .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_USER_ID)
            .then(() => {
                message.success('Message sent successfully!');
                resetForm();
            })
            .catch((error) => {
                console.error(error.text);
                message.error('Failed to send message. Please try again.');
            });
    };

    const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setSelectedService(selected);
        setShowProductDropdown(selected === 'Service');

        if (serviceDropdownRef.current) {
            serviceDropdownRef.current.className =
                selected === 'Service' ? 'col-md-3 my-md-2 my-2' : 'col-md-6 my-md-2 my-2';
        }
    };

    const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setSelectedProduct(selected);
        setShowServiceDropdown(selected === 'Product');

        if (productDropdownRef.current) {
            productDropdownRef.current.className =
                selected === 'Product' ? 'col-md-3 my-md-2 my-2' : 'col-md-6 my-md-2 my-2';
        }
    };

    return (
        <>
            <div className="container mt-md-5 mb-5">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {() => (
                        <Form ref={form} className="request-quote-form">
                            <div className="row">
                                {/* Left Column */}
                                <div className="col-md-3">
                                    <div className="row">
                                        {['name', 'email', 'phone'].map((field) => (
                                            <div key={field} className="col-md-12 my-md-2 my-2">
                                                <Field
                                                    type={field === 'email' ? 'email' : 'text'}
                                                    name={field}
                                                    placeholder={field === 'name' ? 'Name' : `Enter your ${field}`}
                                                    className="form-control"
                                                />
                                                <ErrorMessage name={field} component="div" className="error" />
                                            </div>
                                        ))}
                                        <div className="col-md-12 my-md-2 my-2">
                                            <Field as="select" name="timings" className="form-control">
                                                <option value="Best time to call">Best time to call</option>
                                                <option value="Morning">Morning</option>
                                                <option value="Afternoon">Afternoon</option>
                                                <option value="Evening">Evening</option>
                                                <option value="Anytime">Anytime</option>
                                            </Field>
                                            <ErrorMessage name="timings" component="div" className="error" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="col-md-9">
                                    <div className="row">
                                        {/* Service */}
                                        {showServiceDropdown && (
                                            <div ref={serviceDropdownRef} className="col-md-3 my-md-2 my-2 service-dropdown">
                                                <Field
                                                    as="select"
                                                    name="services"
                                                    className="form-control"
                                                    value={selectedService}
                                                    onChange={handleServiceChange}
                                                >
                                                    <option value="Service">Select Service</option>
                                                    {[
                                                        'Domain', 'Hosting', 'Graphic Design', 'Logo Design', 'Stationery Design',
                                                        'Cad Design', 'Video Animation', 'Content Writing', 'Web Design',
                                                        'Digital marketing', 'SEO', 'Social Media Marketing', 'PPC', 'Software Development',
                                                        'Web Development', 'Mobile App Development', 'Xreality', 'AR', 'VR', 'MR',
                                                        'Game Development', 'Readymade Softwares', 'Product Development'
                                                    ].map((service) => (
                                                        <option key={service} value={service}>
                                                            {service}
                                                        </option>
                                                    ))}
                                                </Field>
                                                <ErrorMessage name="services" component="div" className="error" />
                                            </div>
                                        )}

                                        {/* Product */}
                                        {showProductDropdown && (
                                            <div ref={productDropdownRef} className="col-md-3 my-md-2 my-2">
                                                <Field
                                                    as="select"
                                                    name="products"
                                                    className="form-control"
                                                    value={selectedProduct}
                                                    onChange={handleProductChange}
                                                >
                                                    <option value="Product">Select Product</option>
                                                    {[
                                                        'ERP', 'POS', 'CRM', 'School Management System', 'LMS',
                                                        'Restaurant  Management System', 'HR Management System',
                                                        'Hospital Management System', 'Clinic Management System',
                                                        'Pharmacy Management System', 'Hotel Management System',
                                                        'Property Management System', 'Job Portal', 'Food System',
                                                        'E-commerce website & Software', 'News Management System',
                                                        'Mobile shop software', 'Other software (Please specify details)'
                                                    ].map((product) => (
                                                        <option key={product} value={product}>
                                                            {product}
                                                        </option>
                                                    ))}
                                                </Field>
                                                <ErrorMessage name="products" component="div" className="error" />
                                            </div>
                                        )}

                                        {/* Budget */}
                                        <div className="col-md-3 my-md-2 my-2">
                                            <Field as="select" name="budget" className="form-control">
                                                <option value="Budget">Select Your Budget</option>
                                                <option value="$500 - $1000">$500 - $1000</option>
                                                <option value="$1000 - $5000">$1000 - $5000</option>
                                                <option value="$5000 - $10000">$5000 - $10000</option>
                                                <option value="$10000 & up">$10000 & up</option>
                                            </Field>
                                            <ErrorMessage name="budget" component="div" className="error" />
                                        </div>

                                        {/* Social */}
                                        <div className="col-md-3 my-md-2 my-2">
                                            <Field as="select" name="social" className="form-control">
                                                <option value="Social">How did You Find Us</option>
                                                <option value="Google">Google</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Through a Friend">Through a Friend</option>
                                                <option value="From another website">From another website</option>
                                                <option value="Others">Others</option>
                                            </Field>
                                            <ErrorMessage name="social" component="div" className="error text-white" />
                                        </div>

                                        {/* Message */}
                                        <div className="col-md-12 my-md-2 my-2">
                                            <Field
                                                as="textarea"
                                                name="message"
                                                className="form-control custom-text-area"
                                                placeholder="Message"
                                            />
                                            <ErrorMessage name="message" component="div" className="error" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center mt-md-4 mt-2">
                                <div className="col-md-3 mb-md-5">
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary p-3">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default RequestDemo;
