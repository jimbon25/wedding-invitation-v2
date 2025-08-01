'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import AOS from 'aos';

// Components
import LandingPage from '@/components/LandingPage';
import CountdownTimer from '@/components/CountdownTimer';
import OurStory from '@/components/OurStory';
import EventDetails from '@/components/EventDetails';
import PhotoGallery from '@/components/PhotoGallery';
import RSVPForm from '@/components/RSVPForm';
import Guestbook from '@/components/Guestbook';
import GiftInfo from '@/components/GiftInfo';
import Footer from '@/components/Footer';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingChat from '@/components/FloatingChat';

function HomeContent() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [guestName, setGuestName] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Get guest name from URL parameter
    const toParam = searchParams.get('to');
    if (toParam) {
      setGuestName(decodeURIComponent(toParam));
    }
  }, [searchParams]);

  const handleOpenInvitation = () => {
    setShowInvitation(true);
  };

  if (!showInvitation) {
    return (
      <LandingPage 
        guestName={guestName} 
        onOpenInvitation={handleOpenInvitation} 
      />
    );
  }

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      {/* Modern Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-pink-800 to-rose-700"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(212,175,55,0.1), rgba(244,63,94,0.2))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div data-aos="fade-down" data-aos-duration="1000" className="mb-12">
            <h1 className="font-elegant text-7xl md:text-9xl text-white hero-text-shadow mb-6">
              Dimas & Niken
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-3xl text-white/90 hero-text-shadow mb-8 font-light">
              We&apos;re getting married!
            </p>
            <p className="text-lg md:text-xl text-yellow-200/80 hero-text-shadow font-light">
              Join us in celebrating our love story
            </p>
          </div>
          
          {/* Countdown Timer */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <CountdownTimer />
          </div>

          {/* Call to Action Button */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="mt-12">
            <button 
              onClick={() => {
                const rsvpSection = document.getElementById('rsvp');
                rsvpSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-elegant text-sm md:text-base hover:scale-105 transition-transform duration-300"
            >
              <i className="bi bi-envelope-heart mr-2"></i>
              Konfirmasi Kehadiran
            </button>
          </div>

          {/* Scroll indicator */}
          <div 
            data-aos="fade-in" 
            data-aos-duration="1000" 
            data-aos-delay="1000"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-white/60 text-xs mt-2">Scroll Down</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <OurStory />

      {/* Event Details Section */}
      <EventDetails />

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* RSVP Section */}
      <RSVPForm />

      {/* Guestbook Section */}
      <Guestbook />

      {/* Gift Info Section */}
      <GiftInfo />

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      <BottomNavigation />

      {/* Floating AI Chat */}
      <FloatingChat />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
