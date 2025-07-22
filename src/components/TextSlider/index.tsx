'use client';

import React, { useState, useEffect } from 'react';
import './text-slider.scss';

interface TextSliderProps {
    textArray: string[];
}

const TextSlider: React.FC<TextSliderProps> = ({ textArray }) => {

    const [currentText, setCurrentText] = useState<string>(textArray[0]?.[0] || '');
    const [textIndex, setTextIndex] = useState<number>(0);
    const typingSpeed = 40;
    const pauseDuration = 500;

    useEffect(() => {
        let typingTimeout: NodeJS.Timeout;
        let pauseTimeout: NodeJS.Timeout;

        const typeText = () => {
            const fullText = textArray[textIndex];

            if (currentText.length < fullText.length) {
                typingTimeout = setTimeout(() => {
                    setCurrentText((prev) => prev + fullText[prev.length]);
                }, typingSpeed);
            } else {
                pauseTimeout = setTimeout(() => {
                    const nextIndex = (textIndex + 1) % textArray.length;
                    setTextIndex(nextIndex);
                    setCurrentText(textArray[nextIndex][0]);
                }, pauseDuration);
            }
        };

        typeText();

        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(pauseTimeout);
        };
    }, [currentText, textIndex, textArray]);

    return (
        <div className="mt-md-4 mt-5 mb-md-3">
            <h1 className="text-slider">{currentText}</h1>
        </div>
    );
};

export default TextSlider;
