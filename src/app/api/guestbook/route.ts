import { NextRequest, NextResponse } from 'next/server';

interface GuestbookData {
  name: string;
  email: string;
  message: string;
  captcha: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: GuestbookData = await request.json();

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY || '',
        response: data.captcha,
      }),
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Format message for Discord/Telegram
    const formattedMessage = [
      '💌 **NEW GUESTBOOK MESSAGE**',
      `👤 **From:** ${data.name}`,
      `📧 **Email:** ${data.email}`,
      `💬 **Message:**`,
      `"${data.message}"`,
      `⏰ **Time:** ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}`
    ].join('\n');

    // Send to Discord if webhook URL is provided
    if (process.env.DISCORD_WEBHOOK_URL) {
      await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: formattedMessage,
          username: 'Wedding Guestbook Bot',
          avatar_url: 'https://cdn-icons-png.flaticon.com/512/1001/1001371.png'
        }),
      });
    }

    // Send to Telegram if bot token and chat ID are provided
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: formattedMessage,
          parse_mode: 'Markdown'
        }),
      });
    }

    return NextResponse.json(
      { message: 'Guestbook message submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Guestbook submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit guestbook message' },
      { status: 500 }
    );
  }
}
