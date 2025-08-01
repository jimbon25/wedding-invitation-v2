'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Wedding date: February 14, 2025
    const weddingDate = new Date('2025-02-14T10:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days', icon: 'bi-calendar-heart' },
    { value: timeLeft.hours, label: 'Hours', icon: 'bi-clock' },
    { value: timeLeft.minutes, label: 'Minutes', icon: 'bi-stopwatch' },
    { value: timeLeft.seconds, label: 'Seconds', icon: 'bi-hourglass-split' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="glass-morphism rounded-xl p-4 md:p-6 text-center min-w-[85px] md:min-w-[110px] backdrop-blur-md border border-white/20"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-yellow-300 mb-3">
            <i className={`${unit.icon} text-2xl md:text-3xl drop-shadow-lg`}></i>
          </div>
          <motion.div 
            className="text-3xl md:text-5xl font-bold text-white mb-2 hero-text-shadow"
            key={unit.value} // Re-animate when value changes
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {unit.value.toString().padStart(2, '0')}
          </motion.div>
          <div className="text-sm md:text-base text-white/80 font-medium uppercase tracking-wider">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
