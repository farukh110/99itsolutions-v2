'use client';

import { useEffect } from 'react';

export default function BootstrapClient(): null {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then(() => {
                // Bootstrap JS loaded
            })
            .catch((err) => {
                console.error('Failed to load Bootstrap bundle:', err);
            });
    }, []);

    return null;
}
