import { useCountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import React, { useRef, useEffect } from 'react';
import './CounterStat.scss';

interface CounterStatProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function CounterStat({ end, suffix = '', label }: CounterStatProps) {
  const countRef = useRef<HTMLElement>(null);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { start } = useCountUp({
    ref: countRef as React.RefObject<HTMLElement>,
    end,
    suffix,
    duration: 2.5,
    startOnMount: false,
  });

  useEffect(() => {
    if (inView) start();
  }, [inView, start]);

  return (
    <div className="counter-stat" ref={ref}>
      <span className="counter-stat__number" ref={countRef}>0</span>
      <span className="counter-stat__label">{label}</span>
    </div>
  );
}
