'use client';

import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface CounterUpProps {
  endValue?: number;
  sectionSelect: string;
}

const CounterUp: React.FC<CounterUpProps> = ({ endValue = 0, sectionSelect }) => {
  const [showCount, setShowCount] = useState<boolean>(false);

  useEffect(() => {
    const element = document.getElementById(sectionSelect);
    if (!element) return;

    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementPosition = element.offsetTop;

      if (scrollTop + 500 > elementPosition) {
        setShowCount(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionSelect]);

  return <>{showCount ? <CountUp delay={0} duration={5} end={endValue} /> : 0}</>;
};

export default CounterUp;
