import { NextRequest, NextResponse } from 'next/server';

interface ChatData {
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { message }: ChatData = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { response: 'AI chat is currently unavailable. Please contact the couple directly for questions.' },
        { status: 200 }
      );
    }

    // Wedding-specific context for the AI
    const weddingContext = `
You are a helpful wedding assistant for Dimas & Niken's wedding on February 14, 2025. 
Here are the key details:

WEDDING EVENTS:
- Akad Nikah: Friday, February 14, 2025, 08:00-10:00 WIB at Masjid Al-Ikhlas, Jl. Merdeka No. 123, Jakarta Pusat
- Wedding Reception: Friday, February 14, 2025, 18:00-21:00 WIB at Grand Ballroom Hotel Mulia, Jl. Asia Afrika No. 8, Jakarta Selatan

DRESS CODE: Elegant attire in Rose, Pink, Black, or Navy colors

RSVP: Guests can RSVP through the website form
PARKING: Available at both venues
GIFTS: Bank transfer details and e-wallet information are provided on the website
HASHTAG: #DimasNikenWedding

Answer questions helpfully and warmly, as if you're assisting wedding guests. Keep responses concise and friendly.
If you don't know something specific, suggest they contact the couple directly.
`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${weddingContext}\n\nGuest question: ${message}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      'I apologize, but I\'m having trouble understanding your question. Please try rephrasing it or contact the couple directly.';

    return NextResponse.json(
      { response: aiResponse },
      { status: 200 }
    );

  } catch (error) {
    console.error('Gemini chat error:', error);
    
    // Fallback responses for common questions
    const fallbackResponses: Record<string, string> = {
      'time': 'The Akad Nikah is at 08:00-10:00 WIB and the Wedding Reception is at 18:00-21:00 WIB on February 14, 2025.',
      'venue': 'Akad Nikah at Masjid Al-Ikhlas (Jl. Merdeka No. 123, Jakarta Pusat) and Reception at Grand Ballroom Hotel Mulia (Jl. Asia Afrika No. 8, Jakarta Selatan).',
      'dress': 'Please wear elegant attire in Rose, Pink, Black, or Navy colors.',
      'rsvp': 'You can RSVP through the form on this website. Please let us know if you\'ll be attending!',
      'parking': 'Yes, parking is available at both wedding venues.',
      'plus': 'Please check with the couple directly about bringing additional guests.'
    };

    const lowerMessage = request.body?.toString().toLowerCase() || '';
    const fallback = Object.entries(fallbackResponses).find(([key]) => 
      lowerMessage.includes(key)
    )?.[1] || 'I\'m sorry, I\'m having technical difficulties. Please contact Dimas & Niken directly for assistance.';

    return NextResponse.json(
      { response: fallback },
      { status: 200 }
    );
  }
}
