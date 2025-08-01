'use client';

import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

export default function PhotoGallery() {
  const sliderRef = useRef<Slider>(null);

  // Sample photos - replace with actual photos
  const photos = [
    {
      id: 1,
      src: '/images/photo1.jpg',
      alt: 'Dimas & Niken Engagement',
      caption: 'Our Engagement Day'
    },
    {
      id: 2,
      src: '/images/photo2.jpg',
      alt: 'Dimas & Niken Date',
      caption: 'First Date Anniversary'
    },
    {
      id: 3,
      src: '/images/photo3.jpg',
      alt: 'Dimas & Niken Vacation',
      caption: 'Vacation Together'
    },
    {
      id: 4,
      src: '/images/photo4.jpg',
      alt: 'Dimas & Niken Pre-wedding',
      caption: 'Pre-wedding Photoshoot'
    },
    {
      id: 5,
      src: '/images/photo5.jpg',
      alt: 'Dimas & Niken Family',
      caption: 'With Our Families'
    },
    {
      id: 6,
      src: '/images/photo6.jpg',
      alt: 'Dimas & Niken Proposal',
      caption: 'The Proposal Moment'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="font-script text-5xl md:text-6xl gradient-text mb-4">
            Our Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into our journey together through beautiful moments captured in time
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Slider ref={sliderRef} {...settings} className="gallery-slider">
              {photos.map((photo) => (
                <div key={photo.id} className="px-2">
                  <motion.div 
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                      {/* Placeholder for images - replace with actual photos */}
                      <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                        <div className="text-center">
                          <i className="bi bi-camera text-4xl text-rose-600 mb-2 block"></i>
                          <p className="text-rose-700 font-medium">Photo Placeholder</p>
                          <p className="text-sm text-rose-600 mt-1">{photo.caption}</p>
                        </div>
                      </div>
                      {/* 
                      Uncomment when you have actual photos:
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      */}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="text-white text-center">
                        <i className="bi bi-zoom-in text-2xl mb-2 block"></i>
                        <p className="text-sm font-medium">{photo.caption}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-rose-600 hover:bg-rose-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-rose-600 hover:bg-rose-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Photo Categories */}
        <motion.div 
          className="mt-16"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: 'bi-heart-fill', title: 'Engagement', count: '12 Photos' },
              { icon: 'bi-camera2', title: 'Pre-wedding', count: '24 Photos' },
              { icon: 'bi-people-fill', title: 'With Family', count: '18 Photos' },
              { icon: 'bi-geo-alt-fill', title: 'Adventures', count: '15 Photos' }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-4 text-center cursor-pointer hover:shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`${category.icon} text-3xl text-rose-600 mb-2 block`}></i>
                <h3 className="font-semibold text-gray-800">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instagram Section */}
        <motion.div 
          className="mt-16 text-center"
          data-aos="zoom-in"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white max-w-2xl mx-auto">
            <i className="bi bi-instagram text-4xl mb-4 block"></i>
            <h3 className="text-2xl font-bold mb-4">Share Your Moments</h3>
            <p className="mb-4">
              Don&apos;t forget to share your photos from our special day!
            </p>
            <p className="text-xl font-bold">#DimasNikenWedding</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
