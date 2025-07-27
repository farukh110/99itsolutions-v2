"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ContactButton: React.FC = () => {

    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/contact")}
            className="btn btn-primary btn-connect mx-auto d-block"
        >
            Contact Us Today!
        </button>
    );
}

export default ContactButton;