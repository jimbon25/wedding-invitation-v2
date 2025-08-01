import type { Metadata } from "next";
import { Inter, Dancing_Script, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dimas & Niken Wedding Invitation",
  description: "Join us in celebrating the wedding of Dimas & Niken",
  keywords: "wedding, invitation, Dimas, Niken, celebration",
  authors: [{ name: "Dimas & Niken" }],
  openGraph: {
    title: "Dimas & Niken Wedding Invitation",
    description: "Join us in celebrating the wedding of Dimas & Niken",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${dancingScript.variable} ${greatVibes.variable} font-sans antialiased bg-gradient-to-br from-rose-50 to-pink-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
