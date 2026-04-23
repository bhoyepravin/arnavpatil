"use client";

import { Users, Building2, Factory, PlayCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    id: 1,
    icon: <Users size={38} className="text-[var(--orange)]" />,
    value: "400,000+",
    label: "Businessmen Trained",
    startValue: 390000,
    endValue: 400000,
    suffix: "+",
  },
  {
    id: 2,
    icon: <Building2 size={38} className="text-[var(--orange)]" />,
    value: "476+",
    label: "Cities",
    startValue: 400,
    endValue: 476,
    suffix: "+",
  },
  {
    id: 3,
    icon: <Factory size={38} className="text-[var(--orange)]" />,
    value: "300+",
    label: "Industries",
    startValue: 250,
    endValue: 300,
    suffix: "+",
  },
  {
    id: 4,
    icon: <PlayCircle size={38} className="text-[var(--orange)]" />,
    value: "911M+",
    label: "Views",
    startValue: 800,
    endValue: 911,
    suffix: "M+",
  },
];

export default function StatsSection() {
  const [counts, setCounts] = useState({
    1: stats[0].startValue,
    2: stats[1].startValue,
    3: stats[2].startValue,
    4: stats[3].startValue,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const formatNumber = (num, suffix) => {
    if (suffix === "M+") {
      return num + "M+";
    }
    return num.toLocaleString() + suffix;
  };

  const animateNumbers = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    
    stats.forEach((stat) => {
      const startValue = stat.startValue;
      const endValue = stat.endValue;
      const difference = endValue - startValue;
      const duration = 1000;
      const startTime = performance.now();
      
      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + Math.floor(difference * easeOutCubic);
        
        setCounts(prev => ({
          ...prev,
          [stat.id]: currentValue
        }));
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCounts(prev => ({
            ...prev,
            [stat.id]: endValue
          }));
        }
      };
      
      requestAnimationFrame(updateCount);
    });
  };

  useEffect(() => {
    // Start animation immediately on page load/refresh
    // with a small delay to ensure smooth rendering
    const loadTimer = setTimeout(() => {
      animateNumbers();
    }, 200);

    // Also set up scroll observer for when section comes into view
    // (this won't trigger again if already animated)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateNumbers();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(loadTimer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--off-white)] border-t border-[var(--gray-border)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center gap-3 sm:gap-4 animate-[fade-in-up_0.8s_ease-out] px-4 sm:px-0"
            >
              {/* Icon Container - Responsive sizing */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-[var(--orange-pale)] border border-[var(--orange-light)] shadow-sm">
                <div className="scale-90 sm:scale-100">
                  {stat.icon}
                </div>
              </div>

              {/* Number Value - Responsive text size */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--dark)] font-montserrat">
                {formatNumber(counts[stat.id], stat.suffix)}
              </h3>

              {/* Label - Responsive text size */}
              <p className="text-sm sm:text-base md:text-lg text-[var(--gray)] font-inter max-w-[200px] sm:max-w-none mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}