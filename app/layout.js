import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VitaBoost Hub | Premium Vitamins for Optimal Health",
  description:
    "Discover VitaBoost Hub's premium vitamins designed to boost your health and wellness. Shop quality supplements now.",
  keywords: "vitamins, health supplements, wellness, VitaBoost Hub, nutrition",
  openGraph: {
    title: "VitaBoost Hub | Premium Vitamins for Optimal Health",
    description:
      "Explore our range of premium vitamins designed to enhance your health and wellness.",
    url: "https://vitaboosthub.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://vitaboosthub.netlify.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VitaBoost Hub Vitamins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VitaBoost Hub | Premium Vitamins for Optimal Health",
    description:
      "Explore our premium vitamins designed to enhance your health and wellness.",
    image: "https://vitaboosthub.netlify.app/images/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta
          name="twitter:card"
          content={metadata.twitter.card}
        />
        <meta
          name="twitter:title"
          content={metadata.twitter.title}
        />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta
          name="twitter:image"
          content={metadata.twitter.image}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              name: "VitaBoost Hub",
              url: "https://vitaboosthub.netlify.app/",
              logo: "https://vitaboosthub.netlify.app/images/logo.png",
              sameAs: [
                "https://www.facebook.com/VitaBoostHub",
                "https://www.instagram.com/VitaBoostHub",
                "https://www.twitter.com/VitaBoostHub",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
