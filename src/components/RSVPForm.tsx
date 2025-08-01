'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';

interface RSVPFormData {
  name: string;
  email: string;
  phone: string;
  attendance: 'yes' | 'no';
  guestCount: number;
  dietaryRestrictions: string;
  message: string;
}

export default function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<RSVPFormData>();
  
  const attendance = watch('attendance');

  const onSubmit = async (data: RSVPFormData) => {
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/rsvp', {
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
        setIsSubmitted(true);
        reset();
        setCaptchaValue(null);
      } else {
        throw new Error('Failed to submit RSVP');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-green-600 mb-6">
                <i className="bi bi-check-circle text-6xl"></i>
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your RSVP has been submitted successfully. We can&apos;t wait to celebrate with you!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Submit Another RSVP
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="font-script text-5xl md:text-6xl gradient-text mb-4">
            RSVP
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please let us know if you&apos;ll be joining us for our special day
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  placeholder="Your full name"
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

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Will you attend? *
                </label>
                <select
                  {...register('attendance', { required: 'Please select your attendance' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes, I&apos;ll be there!</option>
                  <option value="no">Sorry, I can&apos;t make it</option>
                </select>
                {errors.attendance && (
                  <p className="text-red-500 text-sm mt-1">{errors.attendance.message}</p>
                )}
              </div>
            </div>

            {/* Guest Count - only show if attending */}
            {attendance === 'yes' && (
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">
                  Number of Guests *
                </label>
                <select
                  {...register('guestCount', { 
                    required: attendance === 'yes' ? 'Please select number of guests' : false 
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={5}>5+ Guests</option>
                </select>
                {errors.guestCount && (
                  <p className="text-red-500 text-sm mt-1">{errors.guestCount.message}</p>
                )}
              </motion.div>
            )}

            {/* Dietary Restrictions */}
            {attendance === 'yes' && (
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">
                  Dietary Restrictions or Allergies
                </label>
                <input
                  type="text"
                  {...register('dietaryRestrictions')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  placeholder="Any dietary restrictions or allergies?"
                />
              </motion.div>
            )}

            {/* Message */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message for the Couple
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent resize-none"
                placeholder="Share your wishes for the happy couple..."
              ></textarea>
            </div>

            {/* reCAPTCHA */}
            <div className="mt-6 flex justify-center">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                onChange={setCaptchaValue}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-rose-600 hover:bg-rose-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-envelope-heart"></i>
                    <span>Submit RSVP</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
