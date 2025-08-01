'use client';

import { motion } from 'framer-motion';

export default function EventDetails() {
  const events = [
    {
      title: 'Akad Nikah',
      date: 'Friday, February 14, 2025',
      time: '08:00 - 10:00 WIB',
      location: 'Masjid Al-Ikhlas',
      address: 'Jl. Merdeka No. 123, Jakarta Pusat',
      icon: 'bi-moon-stars',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Wedding Reception',
      date: 'Friday, February 14, 2025',
      time: '18:00 - 21:00 WIB',
      location: 'Grand Ballroom Hotel Mulia',
      address: 'Jl. Asia Afrika No. 8, Jakarta Selatan',
      icon: 'bi-hearts',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="font-script text-5xl md:text-6xl gradient-text mb-4">
            Wedding Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in celebrating our special day at these beautiful venues
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`h-32 bg-gradient-to-r ${event.color} flex items-center justify-center`}>
                <i className={`${event.icon} text-6xl text-white`}></i>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <i className="bi bi-calendar-event text-rose-600 mr-3 text-xl"></i>
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <i className="bi bi-clock text-rose-600 mr-3 text-xl"></i>
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-start text-gray-600">
                    <i className="bi bi-geo-alt-fill text-rose-600 mr-3 text-xl mt-1"></i>
                    <div>
                      <div className="font-semibold">{event.location}</div>
                      <div className="text-sm">{event.address}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    <i className="bi bi-map mr-2"></i>
                    View on Google Maps
                  </button>
                  
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    <i className="bi bi-calendar-plus mr-2"></i>
                    Add to Calendar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-6 gradient-text">Wedding Location</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666!2d106.8456!3d-6.1745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Location"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Dress Code */}
        <motion.div 
          className="mt-16 text-center"
          data-aos="zoom-in"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <i className="bi bi-palette text-4xl text-rose-600 mb-4 block"></i>
            <h3 className="text-2xl font-bold gradient-text mb-4">Dress Code</h3>
            <p className="text-gray-600 mb-4">
              We kindly request our guests to dress in elegant attire
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-rose-600 mx-auto mb-2"></div>
                <span className="text-sm">Rose</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-pink-500 mx-auto mb-2"></div>
                <span className="text-sm">Pink</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-gray-800 mx-auto mb-2"></div>
                <span className="text-sm">Black</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-blue-900 mx-auto mb-2"></div>
                <span className="text-sm">Navy</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
