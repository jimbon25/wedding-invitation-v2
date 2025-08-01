'use client';

import { motion } from 'framer-motion';

export default function OurStory() {
  const storyEvents = [
    {
      year: '2020',
      title: 'First Met',
      description: 'We first met at a college campus event. It was love at first sight, though we were both too shy to admit it!',
      icon: 'bi-heart-arrow',
      position: 'left'
    },
    {
      year: '2021',
      title: 'First Date',
      description: 'Our first official date was at a cozy café downtown. We talked for hours and knew we had found something special.',
      icon: 'bi-cup-hot',
      position: 'right'
    },
    {
      year: '2022',
      title: 'Became Official',
      description: 'After months of getting to know each other, we officially became a couple on a beautiful spring evening.',
      icon: 'bi-heart-fill',
      position: 'left'
    },
    {
      year: '2023',
      title: 'Moving In Together',
      description: 'We took the next big step and moved in together, creating our first home filled with love and laughter.',
      icon: 'bi-house-heart-fill',
      position: 'right'
    },
    {
      year: '2024',
      title: 'The Proposal',
      description: 'On a romantic evening under the stars, Dimas got down on one knee and asked the most important question of his life.',
      icon: 'bi-gem',
      position: 'left'
    },
    {
      year: '2025',
      title: 'Our Wedding Day',
      description: 'And now, we invite you to witness and celebrate our love as we begin this beautiful journey as husband and wife.',
      icon: 'bi-heart-pulse-fill',
      position: 'right'
    }
  ];

  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="font-script text-5xl md:text-6xl gradient-text mb-4">
            Our Love Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite. Here's how it all began...
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-300 to-pink-300 rounded-full"></div>

          {storyEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 ${event.position === 'left' ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              data-aos={event.position === 'left' ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
            >
              <div className={`md:flex ${event.position === 'right' ? 'md:justify-end' : ''}`}>
                <div className={`bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-6 shadow-lg max-w-md ${event.position === 'right' ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <i className={`${event.icon} text-xl`}></i>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-rose-600">{event.year}</div>
                      <div className="text-lg font-semibold text-gray-800">{event.title}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-600 rounded-full border-4 border-white shadow-lg top-6"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          data-aos="zoom-in"
        >
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-8 max-w-2xl mx-auto">
            <i className="bi bi-quote text-4xl text-rose-600 mb-4 block"></i>
            <p className="text-xl italic text-gray-700 mb-4">
              "The best thing to hold onto in life is each other."
            </p>
            <p className="text-gray-600">- Audrey Hepburn</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
