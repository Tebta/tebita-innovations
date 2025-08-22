'use client'
import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTime: number | null = null;
          const startValue = 0;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startValue + easeOutQuart * (end - startValue));
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold text-primary mb-2">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <div className="py-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
      <div className="text-center">
        <Counter end={50} suffix="+" />
        <div className="text-sm text-muted-foreground">Projects Completed</div>
      </div>
      <div className="text-center">
        <Counter end={30} suffix="+" />
        <div className="text-sm text-muted-foreground">Happy Clients</div>
      </div>
      <div className="text-center">
        <Counter end={99} suffix="%" />
        <div className="text-sm text-muted-foreground">Client Satisfaction</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary mb-2">24/7</div>
        <div className="text-sm text-muted-foreground">Support Available</div>
      </div>
    </div>
  );
};

export default Stats;