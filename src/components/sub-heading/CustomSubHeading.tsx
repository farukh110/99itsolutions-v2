'use client';

import React from 'react';
import './sub-heading.scss';

interface CustomSubHeadingProps {
    firstWord: string;
    lastWord: string;
    textCenter?: string;
}
const CustomSubHeading: React.FC<CustomSubHeadingProps> = ({ firstWord, lastWord, textCenter }) => {

    return (
        <div className='custom-heading-title'>
            <h2 className={`custom-h2 fist-word ${textCenter}`}> {firstWord} <span className='last-word'> {lastWord} </span> </h2>
        </div>
    )
}

export default CustomSubHeading;