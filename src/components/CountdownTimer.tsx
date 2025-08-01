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
    <div className="flex flex-wrap justify-center gap-4 md:gap-8" data-aos="zoom-in">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="bg-white/90 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg text-center min-w-[80px] md:min-w-[100px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-rose-600 mb-2">
            <i className={`${unit.icon} text-2xl md:text-3xl`}></i>
          </div>
          <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-1">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-gray-600 font-medium">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
