'use client';

import React from 'react';
import './heading.scss';

interface CustomHeadingProps {
    firstWord: string;
    lastWord: string;
    textCenter?: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ firstWord, lastWord, textCenter }) => {

    return (
        <div className='custom-heading-title'>
            <h2 className={`fist-word ${textCenter}`}> {firstWord} <span className='last-word'> {lastWord} </span> </h2>
        </div>
    )
}

export default CustomHeading;