'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function BottomNavigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: 'bi-house-fill' },
    { id: 'story', label: 'Story', icon: 'bi-heart-fill' },
    { id: 'events', label: 'Events', icon: 'bi-calendar-event' },
    { id: 'gallery', label: 'Gallery', icon: 'bi-images' },
    { id: 'rsvp', label: 'RSVP', icon: 'bi-envelope-heart' }
  ];

  useEffect(() => {
    const sections = ['home', 'story', 'events', 'gallery', 'rsvp'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 md:hidden z-50 bottom-nav-shadow"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="flex flex-col items-center p-2 cursor-pointer transition-all duration-300"
          >
            <motion.div
              className={`flex flex-col items-center space-y-1 ${
                activeSection === item.id ? 'text-rose-600' : 'text-gray-500'
              }`}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <div className="relative">
                <i className={`${item.icon} text-xl`}></i>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-rose-600 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
