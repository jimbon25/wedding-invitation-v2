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
    <main className="min-h-screen mobile-padding">
      {/* Hero Section with Countdown */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-50">
        <div className="text-center px-4">
          <div data-aos="fade-down" className="mb-8">
            <h1 className="font-script text-6xl md:text-8xl gradient-text mb-4">
              Dimas & Niken
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              We&apos;re getting married!
            </p>
          </div>
          <CountdownTimer />
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
