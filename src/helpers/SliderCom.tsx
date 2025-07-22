'use client';

import React, { RefObject } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface SliderComProps {
    asNavFor?: Slider | null;
    className?: string;
    settings?: Settings;
    selector?: RefObject<Slider>;
    children: React.ReactNode;
}

const SliderCom: React.FC<SliderComProps> = ({
    asNavFor = null,
    className = '',
    settings = {},
    selector,
    children,
}) => {
    return (
        <Slider
            asNavFor={asNavFor || undefined}
            ref={selector}
            className={`pr-0 pl-0 ${className}`}
            {...settings}
        >
            {children}
        </Slider>
    );
};

export default SliderCom;
