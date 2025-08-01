'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

export default function LandingPage({ guestName, onOpenInvitation }: LandingPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    setIsPlaying(true);
    // You can add background music logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-800 to-rose-700 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{
              y: [0, -100, 0],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="text-center text-white z-10 px-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="font-script text-4xl md:text-6xl mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          The Wedding of
        </motion.h1>
        
        <motion.h2 
          className="font-script text-6xl md:text-8xl mb-8 text-rose-100"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Dimas & Niken
        </motion.h2>

        {guestName && (
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="text-lg mb-2">Dear</p>
            <p className="text-2xl md:text-3xl font-semibold text-rose-200">{guestName}</p>
            <p className="text-lg mt-2">You are cordially invited to celebrate our special day</p>
          </motion.div>
        )}

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {!isPlaying && (
            <button
              onClick={handlePlayMusic}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 mb-4 flex items-center space-x-2 mx-auto"
            >
              <i className="bi bi-music-note"></i>
              <span>Play Music</span>
            </button>
          )}
          
          <button
            onClick={onOpenInvitation}
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <i className="bi bi-envelope-heart mr-2"></i>
            Open Invitation
          </button>
        </motion.div>

        <motion.div 
          className="mt-12 text-sm opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p>Saturday, February 14, 2025</p>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-white/20">
        <i className="bi bi-heart text-4xl animate-pulse"></i>
      </div>
      <div className="absolute bottom-10 right-10 text-white/20">
        <i className="bi bi-heart text-4xl animate-pulse" style={{ animationDelay: '1s' }}></i>
      </div>
      <div className="absolute top-1/3 right-20 text-white/20">
        <i className="bi bi-heart text-2xl animate-pulse" style={{ animationDelay: '2s' }}></i>
      </div>
      <div className="absolute bottom-1/3 left-20 text-white/20">
        <i className="bi bi-heart text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></i>
      </div>
    </div>
  );
}
