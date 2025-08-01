'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function SimpleBottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  console.log('SimpleBottomNav rendered');

  const navItems = [
    { id: 'home', label: 'Home', icon: 'bi-house-fill' },
    { id: 'gallery', label: 'Gallery', icon: 'bi-images' },
    { id: 'rsvp', label: 'RSVP', icon: 'bi-envelope-heart' },
    { id: 'guestbook', label: 'Guestbook', icon: 'bi-chat-heart' },
  ];

  useEffect(() => {
    console.log('SimpleBottomNav useEffect running');
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
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 block"
      style={{
        height: '70px',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex justify-around items-center h-full px-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          
          return (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 flex-1"
            >
              <div className={`flex flex-col items-center space-y-1 ${
                isActive ? 'text-rose-600' : 'text-gray-500'
              }`}>
                <div className="relative">
                  <i className={`${item.icon} text-xl`}></i>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full" />
                  )}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
