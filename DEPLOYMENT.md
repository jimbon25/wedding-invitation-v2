# 🚀 Deployment Guide - Digital Wedding Invitation

This guide will help you deploy your wedding invitation website to Vercel with all the necessary configurations.

## 📋 Pre-Deployment Checklist

### 1. Customize Your Content
- [ ] Update couple names in all components
- [ ] Set wedding date in `CountdownTimer.tsx` and `LandingPage.tsx`
- [ ] Update venue details in `EventDetails.tsx`
- [ ] Replace bank account details in `GiftInfo.tsx`
- [ ] Add your wedding photos to `public/images/`
- [ ] Update photo paths in `PhotoGallery.tsx`
- [ ] Customize colors and styling if needed

### 2. Set Up Required Services

#### Google reCAPTCHA (Required)
1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Click "Create" and choose reCAPTCHA v2 "I'm not a robot"
3. Add your domain (e.g., `your-wedding.vercel.app`)
4. Save the Site Key and Secret Key

#### Discord Webhook (Optional)
1. In your Discord server, go to Settings → Integrations → Webhooks
2. Create New Webhook, choose a channel
3. Copy the Webhook URL

#### Telegram Bot (Optional)
1. Message [@BotFather](https://t.me/botfather)
2. Send `/newbot` and follow the instructions
3. Save the Bot Token
4. Get your Chat ID by messaging [@userinfobot](https://t.me/userinfobot)

#### Gemini AI (Optional)
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create new API key
3. Save the API key

## 🚀 Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel --prod
```

4. **Set Environment Variables:**
After deployment, add these environment variables in your Vercel dashboard:

```
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
TELEGRAM_BOT_TOKEN=1234567890:YOUR_BOT_TOKEN  
TELEGRAM_CHAT_ID=-1001234567890
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

### Method 2: Using GitHub Integration

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial wedding invitation setup"
git push origin main
```

2. **Connect to Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Configure environment variables in the deployment settings

## 🔧 Environment Variables Setup

In your Vercel dashboard, go to Settings → Environment Variables and add:

| Variable | Value | Required |
|----------|-------|----------|
| `DISCORD_WEBHOOK_URL` | Your Discord webhook URL | Optional |
| `TELEGRAM_BOT_TOKEN` | Your Telegram bot token | Optional |
| `TELEGRAM_CHAT_ID` | Your Telegram chat ID | Optional |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA site key | Required |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret key | Required |
| `GEMINI_API_KEY` | Gemini AI API key | Optional |

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard:**
- Go to your project → Settings → Domains
- Add your custom domain (e.g., `dimasniken.com`)
- Follow Vercel's DNS configuration instructions

2. **Update reCAPTCHA Domain:**
- Go back to Google reCAPTCHA admin
- Add your custom domain to the allowed domains list

## 📱 Testing Your Deployment

### Test These Features:
- [ ] Landing page loads with guest name parameter (`?to=YourName`)
- [ ] Countdown timer shows correct time
- [ ] All sections scroll smoothly  
- [ ] RSVP form submits successfully
- [ ] Guestbook form works
- [ ] Discord/Telegram notifications are received
- [ ] Mobile navigation works on mobile devices
- [ ] AI chat responds (if enabled)
- [ ] reCAPTCHA verification works

### Test URLs:
- `https://your-domain.com` - Main invitation
- `https://your-domain.com/?to=John%20Doe` - Personalized invitation

## 🐛 Troubleshooting

### Common Issues:

**1. Build Fails:**
- Check for TypeScript errors: `npm run build`
- Ensure all imports are correct
- Verify all required dependencies are installed

**2. reCAPTCHA Not Working:**
- Verify site key is correct in environment variables
- Check that domain is added to reCAPTCHA configuration
- Make sure you're using v2 "I'm not a robot" checkbox

**3. API Routes Not Working:**
- Check Vercel Function logs in dashboard
- Verify environment variables are set correctly
- Test API endpoints individually

**4. Images Not Loading:**
- Ensure images are in `public/images/` folder
- Check file names match component references
- Verify images are optimized for web

**5. Mobile Issues:**
- Test bottom navigation on actual mobile device
- Check responsive breakpoints
- Verify touch interactions work

## 🔄 Updates After Deployment

To update your website after deployment:

1. **Make changes locally**
2. **Test with `npm run dev`**
3. **Deploy updates:**
```bash
vercel --prod
```

Or if using GitHub integration, just push to main branch:
```bash
git add .
git commit -m "Update wedding details"
git push origin main
```

## 📊 Monitoring

### Vercel Analytics
- Enable analytics in Vercel dashboard
- Monitor page views and performance
- Track user interactions

### RSVP/Guestbook Monitoring
- Check Discord/Telegram for new submissions
- Monitor Vercel Function logs for errors
- Set up alerts for failed submissions

## 🎉 Launch Checklist

- [ ] All content is personalized and accurate
- [ ] Wedding date and venues are correct
- [ ] Contact information is updated
- [ ] Photos are uploaded and displaying
- [ ] RSVP and guestbook forms work
- [ ] Notifications are being received
- [ ] Mobile experience is smooth
- [ ] Custom domain is configured
- [ ] SSL certificate is active
- [ ] Social media links work
- [ ] AI chat responds appropriately (if enabled)

## 📞 Support

If you encounter any issues during deployment:

1. Check Vercel's [deployment documentation](https://vercel.com/docs)
2. Review the [Next.js deployment guide](https://nextjs.org/docs/deployment)
3. Check this project's GitHub issues
4. Contact the developer for support

---

**Congratulations on your upcoming wedding! 💒✨**
