# 🎨 Customization Guide - Wedding Invitation

This guide will help you personalize the wedding invitation for your special day.

## 📝 Content Customization

### 1. Couple Names & Wedding Date

**Files to update:**
- `src/components/LandingPage.tsx` - Line 68: Wedding date display
- `src/components/CountdownTimer.tsx` - Line 20: Target wedding date
- `src/app/layout.tsx` - Lines 18-22: Meta titles and descriptions
- `src/components/Footer.tsx` - Line 96: Footer couple names

**Example:**
```typescript
// In CountdownTimer.tsx
const weddingDate = new Date('2025-02-14T10:00:00').getTime(); // Change this date

// In LandingPage.tsx  
<h2 className="font-script text-6xl md:text-8xl mb-8 text-rose-100">
  Your Names Here // Replace with your names
</h2>
```

### 2. Wedding Events Details

**File:** `src/components/EventDetails.tsx`

Update the `events` array with your venue information:

```typescript
const events = [
  {
    title: 'Your Ceremony Name', // e.g., 'Akad Nikah'
    date: 'Your Date',          // e.g., 'Saturday, March 15, 2025'
    time: 'Your Time',          // e.g., '10:00 - 12:00 WIB'
    location: 'Your Venue',     // e.g., 'Grand Ballroom'
    address: 'Your Address',    // Full venue address
    icon: 'bi-moon-stars',      // Bootstrap icon
    color: 'from-emerald-500 to-teal-500' // Tailwind gradient
  }
  // Add more events as needed
];
```

### 3. Our Love Story

**File:** `src/components/OurStory.tsx`

Customize the `storyEvents` array with your relationship milestones:

```typescript
const storyEvents = [
  {
    year: '2020',
    title: 'How We Met',
    description: 'Tell your story of how you first met...',
    icon: 'bi-heart-arrow',
    position: 'left'
  }
  // Add your own milestones
];
```

### 4. Gift Information

**File:** `src/components/GiftInfo.tsx`

Update bank accounts and e-wallets:

```typescript
const bankAccounts = [
  {
    id: 'bank1',
    bank: 'Your Bank Name',
    accountNumber: 'Your Account Number',
    accountName: 'Your Account Name',
    logo: 'bi-bank',
    color: 'from-blue-500 to-blue-600'
  }
];

const eWallets = [
  {
    id: 'ewallet1', 
    name: 'GoPay/OVO/DANA',
    number: 'Your E-wallet Number',
    accountName: 'Your Name',
    logo: 'bi-phone',
    color: 'from-green-500 to-green-600'
  }
];
```

## 🖼️ Photo Gallery Setup

### 1. Add Your Photos

1. **Add photos to:** `public/images/`
2. **Recommended filenames:**
   - `photo1.jpg` - Engagement photos
   - `photo2.jpg` - Dating photos  
   - `photo3.jpg` - Vacation photos
   - `photo4.jpg` - Pre-wedding shoot
   - `photo5.jpg` - Family photos
   - `photo6.jpg` - Proposal photos

### 2. Update Photo Gallery

**File:** `src/components/PhotoGallery.tsx`

Replace the photos array:

```typescript
const photos = [
  {
    id: 1,
    src: '/images/engagement.jpg', // Your actual photo
    alt: 'Your Names Engagement',
    caption: 'Our Engagement Day'
  }
  // Add more photos
];
```

### 3. Enable Real Photos

Uncomment the `<img>` tag in PhotoGallery.tsx and comment out the placeholder div.

## 🎨 Color & Style Customization

### 1. Color Scheme

**File:** `src/app/globals.css`

Update the gradient colors:

```css
.gradient-text {
  background: linear-gradient(135deg, #your-color1, #your-color2, #your-color3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 2. Primary Colors

Update Tailwind colors throughout components:
- `rose-600` → `your-primary-600`
- `pink-500` → `your-secondary-500`  
- `rose-50` → `your-primary-50`

### 3. Font Changes

**File:** `src/app/layout.tsx`

Replace fonts:

```typescript
import { YourFont, YourScriptFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

## 🌐 Social Media & Contact

### 1. Social Links

**File:** `src/components/Footer.tsx`

Update the `socialLinks` array:

```typescript
const socialLinks = [
  {
    name: 'Instagram',
    icon: 'bi-instagram', 
    url: 'https://instagram.com/your-handle',
    color: 'hover:text-pink-600'
  }
  // Add your actual social media links
];
```

### 2. Contact Information

Update phone numbers and email addresses in:
- `src/components/EventDetails.tsx` - Contact buttons
- `src/components/Footer.tsx` - Social links
- `src/components/GiftInfo.tsx` - Contact for gift delivery

## 🤖 AI Chat Customization

**File:** `src/app/api/gemini-chat/route.ts`

Update the wedding context with your details:

```typescript
const weddingContext = `
You are a helpful wedding assistant for [Your Names]'s wedding on [Your Date].
Here are the key details:

WEDDING EVENTS:
- [Your Event]: [Date], [Time] at [Venue], [Address]

DRESS CODE: [Your dress code requirements]
// Add your specific wedding information
`;
```

## 📱 Mobile Navigation

**File:** `src/components/BottomNavigation.tsx`

Customize navigation items:

```typescript
const navItems = [
  { id: 'home', label: 'Home', icon: 'bi-house-fill' },
  { id: 'story', label: 'Story', icon: 'bi-heart-fill' },
  // Add/remove navigation items as needed
];
```

## 🎵 Background Music (Optional)

### 1. Add Music File

1. Add your music file to `public/audio/wedding-song.mp3`

### 2. Enable Music Player

**File:** `src/components/LandingPage.tsx`

Update the `handlePlayMusic` function:

```typescript
const handlePlayMusic = () => {
  const audio = new Audio('/audio/wedding-song.mp3');
  audio.loop = true;
  audio.volume = 0.3;
  audio.play();
  setIsPlaying(true);
};
```

## 🗺️ Google Maps Integration

**File:** `src/components/EventDetails.tsx`

Update the Google Maps embed URL with your venue coordinates:

1. Go to Google Maps
2. Find your venue
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the existing URL in the component

## ✅ Final Checklist

Before going live, verify:

- [ ] All names and dates are correct
- [ ] Venue addresses are accurate  
- [ ] Bank account details are correct
- [ ] Photos are uploaded and displaying
- [ ] Social media links work
- [ ] Contact information is current
- [ ] Colors match your wedding theme
- [ ] Mobile navigation works properly
- [ ] RSVP form is receiving responses
- [ ] All text is in your preferred language

## 🎯 Pro Tips

1. **Test on Multiple Devices:** Check on mobile, tablet, and desktop
2. **Optimize Images:** Compress photos for faster loading
3. **Backup Configuration:** Save your customized files
4. **Preview with Guest Names:** Test URL with `?to=GuestName`
5. **Check Notifications:** Ensure Discord/Telegram is receiving messages

---

**Happy customizing! Make it uniquely yours! 💕**
