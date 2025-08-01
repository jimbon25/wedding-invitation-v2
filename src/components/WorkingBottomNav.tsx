'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function WorkingBottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: 'bi-house-fill', color: 'text-rose-600' },
    { id: 'gallery', label: 'Gallery', icon: 'bi-images', color: 'text-purple-600' },
    { id: 'rsvp', label: 'RSVP', icon: 'bi-envelope-heart', color: 'text-pink-600' },
    { id: 'guestbook', label: 'Guestbook', icon: 'bi-chat-heart', color: 'text-blue-600' },
    { id: 'chat', label: 'Chat', icon: 'bi-robot', color: 'text-green-600' },
  ];

  useEffect(() => {
    const sections = ['home', 'gallery', 'rsvp', 'guestbook'];
    
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleChatClick = () => {
    const chatButton = document.querySelector('[data-chat-toggle]') as HTMLElement;
    if (chatButton) {
      chatButton.click();
    } else {
      alert('Chat feature is loading...');
    }
  };

  return (
    <>
      {/* Bottom Navigation - Always visible on mobile */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 block md:hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(239, 68, 68, 0.1)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
          height: '70px',
        }}
      >
        <div className="flex justify-around items-center h-full px-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            if (item.id === 'chat') {
              return (
                <button
                  key={item.id}
                  onClick={handleChatClick}
                  className="flex flex-col items-center justify-center p-2 transition-all duration-300 flex-1"
                >
                  <div className="flex flex-col items-center space-y-1">
                    <div className="relative p-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg">
                      <i className={`${item.icon} text-lg`}></i>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">{item.label}</span>
                  </div>
                </button>
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
                className="flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 flex-1"
                style={{ textDecoration: 'none' }}
              >
                <div className={`flex flex-col items-center space-y-1 transition-colors duration-300 ${
                  isActive ? item.color : 'text-gray-500'
                }`}>
                  <div className="relative">
                    <div className={`p-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-rose-100 to-pink-100 shadow-md' 
                        : 'hover:bg-gray-100'
                    }`}>
                      <i className={`${item.icon} text-lg`}></i>
                    </div>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full" />
                    )}
                  </div>
                  <span className={`text-xs font-medium transition-colors duration-300 ${
                    isActive ? 'text-gray-800' : 'text-gray-600'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop notice - hidden on mobile */}
      <div className="hidden md:block fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm z-40">
        Bottom Navigation: Mobile Only
      </div>
    </>
  );
}
