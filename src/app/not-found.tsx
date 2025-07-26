'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './not-found.scss';

const NotFound: React.FC = () => {

    const router = useRouter();

    return (
        <section className="not-found-container py-30 pb-5 rpy-140 pt-4 shadow">
            <div className="container">
                <div className="row justify-content-center mt-md-3 mb-md-4">
                    <div className="col-xl-12 col-md-8 pb-5 text-center">
                        <h4 className="error-small-title mb-0">Error</h4>
                        <h1 className="four-zero-four-title mb-0">404</h1>
                        <h5 className="not_found_text">This page is outside of the universe</h5>
                        <p className="text-center">
                            It seems the page you&apos;re looking for wandered off. Let&apos;s get you back on track!
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            className="btn btn-primary mb-md-5 mb-lg-5 mb-xl-5 mb-5 btn-connect mx-auto d-block"
                        >
                            Go to Home
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
