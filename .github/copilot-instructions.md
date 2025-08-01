# Digital Wedding Invitation - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern digital wedding invitation website for Dimas & Niken built with Next.js, React, TypeScript, and Tailwind CSS.

## Key Technologies & Libraries
- **Frontend**: Next.js 15 with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with responsive design
- **Icons**: Bootstrap Icons
- **Animations**: AOS (Animate On Scroll), Framer Motion
- **Forms**: React Hook Form with validation
- **Carousel**: React Slick for photo gallery
- **Scroll**: React Scroll for smooth navigation
- **Security**: Google reCAPTCHA v2 for spam protection
- **Deployment**: Vercel with serverless functions

## Project Structure
- `/src/app` - Next.js App Router pages
- `/src/components` - Reusable UI components
- `/src/api` - Vercel serverless functions
- `/public/images` - Static assets and photos

## Key Features to Implement
1. **Landing Page** with guest name from URL query
2. **Countdown Timer** to wedding date
3. **Our Story Section** with AOS animations
4. **Event Details** with Google Maps
5. **Photo Gallery** using Slick Carousel
6. **RSVP Form** with reCAPTCHA protection
7. **Guestbook** for messages
8. **Gift Info** section
9. **Bottom Navigation** (mobile only)
10. **Floating Gemini AI Chat**

## Coding Guidelines
- Use TypeScript for all components and functions
- Follow Next.js 15 App Router conventions
- Use Tailwind CSS for all styling
- Implement responsive design (mobile-first)
- Use Bootstrap Icons consistently
- Add proper error handling and loading states
- Implement proper SEO meta tags
- Use proper TypeScript types and interfaces

## API Integration
- Telegram Bot API for notifications
- Discord Webhooks for messages
- Google reCAPTCHA v2 for spam protection
- Gemini AI API for chat functionality

## Environment Variables
- DISCORD_WEBHOOK_URL
- TELEGRAM_BOT_TOKEN
- TELEGRAM_CHAT_ID
- RECAPTCHA_SECRET_KEY
- RECAPTCHA_SITE_KEY
- GEMINI_API_KEY
