import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './CounterStat.scss';

interface CounterStatProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function CounterStat({ end, suffix = '', label }: CounterStatProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="counter-stat" ref={ref}>
      <span className="counter-stat__number">
        {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : '0'}
      </span>
      <span className="counter-stat__label">{label}</span>
    </div>
  );
}
