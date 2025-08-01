'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function BottomNavigation() {
  const [activeSection, setActiveSection] = useState('home');

  console.log('BottomNavigation rendered, activeSection:', activeSection);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'bi-house-fill', color: 'text-rose-600' },
    { id: 'gallery', label: 'Gallery', icon: 'bi-images', color: 'text-purple-600' },
    { id: 'rsvp', label: 'RSVP', icon: 'bi-envelope-heart', color: 'text-pink-600' },
    { id: 'guestbook', label: 'Guestbook', icon: 'bi-chat-heart', color: 'text-blue-600' },
    { id: 'chat', label: 'Chat', icon: 'bi-robot', color: 'text-green-600', onClick: () => {
      console.log('Chat button clicked');
      // Toggle floating chat
      const chatButton = document.querySelector('[data-chat-toggle]') as HTMLElement;
      chatButton?.click();
    }}
  ];

  useEffect(() => {
    const sections = ['home', 'gallery', 'rsvp', 'guestbook'];
    
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = typeof document !== 'undefined' ? document.getElementById(sections[i]) : null;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-rose-100 z-50 bottom-nav-shadow block md:hidden"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'block' }} // Force display untuk debugging
    >
      <div className="flex justify-around items-center py-3 px-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const handleClick = () => {
            if (item.onClick) {
              item.onClick();
            }
          };

          if (item.id === 'chat') {
            return (
              <motion.button
                key={item.id}
                onClick={handleClick}
                className="flex flex-col items-center p-2 cursor-pointer transition-all duration-300"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`flex flex-col items-center space-y-1 ${item.color}`}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative p-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg">
                    <i className={`${item.icon} text-lg`}></i>
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </motion.div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">{item.label}</span>
                </motion.div>
              </motion.button>
            );
          }

          return (
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
                  isActive ? item.color : 'text-gray-500'
                }`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-rose-100 to-pink-100 shadow-md' 
                      : 'hover:bg-gray-100'
                  }`}>
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isActive ? 'text-gray-800' : 'text-gray-600'
                }`}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
