'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'bi-instagram',
      url: 'https://instagram.com/dimasniken2025',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Facebook',
      icon: 'bi-facebook',
      url: 'https://facebook.com/dimasniken2025',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: 'bi-whatsapp',
      url: 'https://wa.me/6281234567890',
      color: 'hover:text-green-600'
    },
    {
      name: 'Email',
      icon: 'bi-envelope',
      url: 'mailto:wedding@dimasniken.com',
      color: 'hover:text-red-600'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-rose-900 to-pink-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Couple Info */}
          <motion.div 
            className="space-y-4"
            data-aos="fade-up"
          >
            <h3 className="font-script text-3xl text-rose-200 mb-4">Dimas & Niken</h3>
            <p className="text-gray-300 leading-relaxed">
              Thank you for being part of our love story. Your presence makes our special day even more meaningful.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-2 text-rose-200">
              <i className="bi bi-calendar-heart"></i>
              <span>February 14, 2025</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-xl font-semibold text-rose-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Our Story', href: '#story' },
                { name: 'Wedding Events', href: '#events' },
                { name: 'Photo Gallery', href: '#gallery' },
                { name: 'RSVP', href: '#rsvp' },
                { name: 'Guestbook', href: '#guestbook' },
                { name: 'Wedding Gift', href: '#gift' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-rose-200 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <i className="bi bi-arrow-right text-xs"></i>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div 
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4 className="text-xl font-semibold text-rose-200 mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-4">
              Follow our journey and share your memories with us using our wedding hashtag:
            </p>
            <div className="bg-black/20 rounded-lg p-3 mb-6">
              <p className="font-script text-2xl text-rose-200">#DimasNikenWedding</p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wedding Info Cards */}
        <motion.div 
          className="mt-12 grid md:grid-cols-2 gap-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* Akad Nikah */}
          <div className="bg-black/20 rounded-lg p-6 text-center">
            <i className="bi bi-moon-stars text-3xl text-emerald-400 mb-3 block"></i>
            <h5 className="text-lg font-semibold text-emerald-200 mb-2">Akad Nikah</h5>
            <p className="text-gray-300 text-sm">
              Friday, February 14, 2025<br />
              08:00 - 10:00 WIB<br />
              Masjid Al-Ikhlas
            </p>
          </div>

          {/* Reception */}
          <div className="bg-black/20 rounded-lg p-6 text-center">
            <i className="bi bi-hearts text-3xl text-rose-400 mb-3 block"></i>
            <h5 className="text-lg font-semibold text-rose-200 mb-2">Wedding Reception</h5>
            <p className="text-gray-300 text-sm">
              Friday, February 14, 2025<br />
              18:00 - 21:00 WIB<br />
              Grand Ballroom Hotel Mulia
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} Dimas & Niken Wedding. Made with{' '}
                <i className="bi bi-heart-fill text-rose-400 mx-1"></i>
                for our special day.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Built with Next.js & Tailwind CSS</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 w-12 h-12 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 hidden md:flex"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <i className="bi bi-arrow-up text-lg"></i>
      </motion.button>
    </footer>
  );
}
