# 💒 Digital Wedding Invitation - Dimas & Niken

A modern, responsive digital wedding invitation website built with Next.js, React, TypeScript, and Tailwind CSS. Features RSVP forms, guestbook, photo gallery, countdown timer, and AI-powered chat assistance.

## ✨ Features

- 🎨 **Modern Design**: Beautiful gradient backgrounds with rose/pink theme
- 📱 **Fully Responsive**: Optimized for mobile and desktop
- ⏰ **Countdown Timer**: Real-time countdown to wedding day
- 📖 **Our Story Timeline**: Animated story section with AOS
- 📍 **Event Details**: Wedding ceremony and reception information with Google Maps
- 🖼️ **Photo Gallery**: Slick carousel for couple's photos
- 📝 **RSVP Form**: Complete RSVP system with guest count and dietary restrictions
- 💬 **Guestbook**: Guest message system
- 🎁 **Gift Information**: Bank transfer and e-wallet details
- 🤖 **AI Chat Assistant**: Gemini AI-powered wedding FAQ bot
- 📱 **Bottom Navigation**: Mobile-only sticky navigation
- 🔒 **Spam Protection**: Google reCAPTCHA v2 integration
- 📧 **Notifications**: Discord webhooks and Telegram bot integration
- 🎵 **Background Music**: Optional music player
- 🌐 **SEO Optimized**: Meta tags and Open Graph support

## 🚀 Tech Stack

### Frontend
- **Next.js 15** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **AOS (Animate On Scroll)** for scroll animations
- **React Slick** for photo carousel
- **React Hook Form** for form handling
- **React Scroll** for smooth scrolling
- **Bootstrap Icons** for iconography

### Backend & APIs
- **Vercel Serverless Functions**
- **Google reCAPTCHA v2** for spam protection
- **Discord Webhooks** for notifications
- **Telegram Bot API** for notifications
- **Google Gemini AI** for chat assistance

## 📁 Project Structure

```
wedding-invitation-v2/
├── public/
│   └── images/           # Wedding photos and assets
├── src/
│   ├── app/
│   │   ├── api/          # Serverless API routes
│   │   │   ├── rsvp/     # RSVP submission handler
│   │   │   ├── guestbook/ # Guestbook submission handler
│   │   │   └── gemini-chat/ # AI chat handler
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Main page
│   └── components/       # React components
│       ├── LandingPage.tsx
│       ├── CountdownTimer.tsx
│       ├── OurStory.tsx
│       ├── EventDetails.tsx
│       ├── PhotoGallery.tsx
│       ├── RSVPForm.tsx
│       ├── Guestbook.tsx
│       ├── GiftInfo.tsx
│       ├── BottomNavigation.tsx
│       ├── FloatingChat.tsx
│       └── Footer.tsx
├── .env.local           # Environment variables
├── .env.example         # Environment variables template
└── README.md
```

## 🛠️ Setup & Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd wedding-invitation-v2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy the environment variables template:
```bash
cp .env.example .env.local
```

Fill in your environment variables in `.env.local`:

```env
# Discord Webhook URL (optional)
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN

# Telegram Bot Configuration (optional)
TELEGRAM_BOT_TOKEN=1234567890:YOUR_BOT_TOKEN
TELEGRAM_CHAT_ID=-1001234567890

# Google reCAPTCHA v2 Keys (required)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key

# Gemini AI API Key (optional)
GEMINI_API_KEY=your_gemini_api_key
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🔧 Configuration Guide

### Google reCAPTCHA Setup
1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/)
2. Create a new site with reCAPTCHA v2 "I'm not a robot" checkbox
3. Add your domain (localhost for development)
4. Copy the site key and secret key to `.env.local`

### Discord Webhook Setup
1. Create a Discord server or use an existing one
2. Go to Server Settings → Integrations → Webhooks
3. Create a new webhook and copy the URL
4. Add the URL to `DISCORD_WEBHOOK_URL` in `.env.local`

### Telegram Bot Setup
1. Message [@BotFather](https://t.me/botfather) on Telegram
2. Create a new bot with `/newbot`
3. Copy the bot token to `TELEGRAM_BOT_TOKEN`
4. Get your chat ID (message [@userinfobot](https://t.me/userinfobot))
5. Add both values to `.env.local`

### Gemini AI Setup
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to `GEMINI_API_KEY` in `.env.local`

## 📱 Customization

### Wedding Details
Update the following files with your wedding information:
- `src/components/LandingPage.tsx` - Couple names and wedding date
- `src/components/CountdownTimer.tsx` - Wedding date
- `src/components/EventDetails.tsx` - Venue details and Google Maps
- `src/components/GiftInfo.tsx` - Bank account and e-wallet details

### Photos
1. Add your wedding photos to `public/images/`
2. Update `src/components/PhotoGallery.tsx` with actual image paths
3. Replace placeholder images with real photos

### Colors & Styling
- Primary colors are defined in `src/app/globals.css`
- Tailwind configuration can be modified in `tailwind.config.js`
- Component-specific styles are in individual component files

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Set Environment Variables:**
After deployment, go to your Vercel dashboard and add all environment variables from `.env.local` to your project settings.

### Alternative Deployment Options
- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Connect your Git repository
- **Self-hosted**: Build with `npm run build` and serve the `out` folder

## 🎯 URL Parameters

The website supports guest personalization via URL parameters:
```
https://your-domain.com/?to=John%20Doe
```
This will personalize the landing page with the guest's name.

## 📊 Features Overview

| Feature | Status | Description |
|---------|--------|-------------|
| Landing Page | ✅ | Animated cover with guest name from URL |
| Countdown Timer | ✅ | Real-time countdown to wedding day |
| Our Story | ✅ | Timeline with scroll animations |
| Event Details | ✅ | Ceremony and reception info with maps |
| Photo Gallery | ✅ | Responsive carousel with placeholders |
| RSVP Form | ✅ | Complete form with validation and reCAPTCHA |
| Guestbook | ✅ | Message system with spam protection |
| Gift Info | ✅ | Bank and e-wallet information |
| Bottom Navigation | ✅ | Mobile-only sticky navigation |
| AI Chat | ✅ | Gemini AI-powered FAQ assistant |
| Notifications | ✅ | Discord/Telegram integration |
| Responsive Design | ✅ | Mobile-first responsive layout |

## 🐛 Troubleshooting

### Common Issues

1. **reCAPTCHA not working:**
   - Check if site key and secret key are correct
   - Verify domain is added to reCAPTCHA configuration

2. **Discord/Telegram not receiving messages:**
   - Verify webhook URL and bot token
   - Check if chat ID is correct (include - for group chats)

3. **Images not loading:**
   - Ensure images are in `public/images/` folder
   - Update image paths in components

4. **Styling issues:**
   - Clear browser cache
   - Check if Tailwind CSS is properly loaded

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 👨‍💻 Author

Created with ❤️ for Dimas & Niken's special day.

---

**Happy Wedding! 💒✨**
