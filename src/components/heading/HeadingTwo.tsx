'use client';

import React from 'react';
import './heading.scss';

interface CustomHeadingProps {
    firstWord: string;
    lastWord: string;
    textCenter?: string;
}

const CustomHeadingTwo: React.FC<CustomHeadingProps> = ({ firstWord, lastWord, textCenter }) => {

    return (
        <div className='custom-heading-title'>
            <h2 className={`fist-word ${textCenter}`}> {firstWord} </h2>
            <h2 className={`fist-word ${textCenter}`}> <span className='last-word'> {lastWord} </span> </h2>
        </div>
    )
}

export default CustomHeadingTwo;