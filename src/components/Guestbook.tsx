'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

interface GuestbookFormData {
  name: string;
  email: string;
  message: string;
}

export default function Guestbook() {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<GuestbookFormData>();

  // Sample messages for demonstration
  useEffect(() => {
    const sampleMessages: GuestMessage[] = [
      {
        id: '1',
        name: 'Sarah & John',
        message: 'Wishing you both a lifetime of love and happiness! Congratulations!',
        timestamp: '2025-01-15T10:30:00Z'
      },
      {
        id: '2',
        name: 'Amanda',
        message: 'So excited to celebrate with you both! You make such a beautiful couple.',
        timestamp: '2025-01-14T15:45:00Z'
      },
      {
        id: '3',
        name: 'Michael & Lisa',
        message: 'Congratulations on your special day! May your love story continue to inspire others.',
        timestamp: '2025-01-13T09:20:00Z'
      }
    ];
    setMessages(sampleMessages);
  }, []);

  const onSubmit = async (data: GuestbookFormData) => {
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          captcha: captchaValue,
        }),
      });

      if (response.ok) {
        // Add the new message to the local state
        const newMessage: GuestMessage = {
          id: Date.now().toString(),
          name: data.name,
          message: data.message,
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [newMessage, ...prev]);
        
        reset();
        setCaptchaValue(null);
        alert('Thank you for your message!');
      } else {
        throw new Error('Failed to submit message');
      }
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="guestbook" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="font-script text-5xl md:text-6xl gradient-text mb-4">
            Guestbook
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leave us a message and share your wishes for our new journey together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Message Form */}
          <motion.div
            className="mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters long'
                    }
                  })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent resize-none"
                  placeholder="Share your wishes, memories, or advice for the happy couple..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* reCAPTCHA */}
              <div className="mb-6 flex justify-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                  onChange={setCaptchaValue}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-rose-600 hover:bg-rose-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-chat-heart"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Messages Display */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Messages from Our Loved Ones
            </h3>
            
            <div className="space-y-6">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="bi bi-person-heart text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{message.name}</h4>
                        <span className="text-sm text-gray-500">{formatDate(message.timestamp)}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{message.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {messages.length === 0 && (
              <div className="text-center py-12">
                <i className="bi bi-chat-dots text-4xl text-gray-400 mb-4 block"></i>
                <p className="text-gray-500">No messages yet. Be the first to leave a message!</p>
              </div>
            )}
          </motion.div>

          {/* Statistics */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
            data-aos="zoom-in"
          >
            {[
              { icon: 'bi-chat-heart', number: messages.length, label: 'Messages' },
              { icon: 'bi-people-fill', number: '250+', label: 'Invited Guests' },
              { icon: 'bi-heart-fill', number: '2', label: 'Hearts United' },
              { icon: 'bi-calendar-heart', number: '1', label: 'Special Day' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <i className={`${stat.icon} text-3xl text-rose-600 mb-2 block`}></i>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
