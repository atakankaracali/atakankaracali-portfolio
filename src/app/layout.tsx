import "./styles/globals.css";
import Navbar from "components/Navbar";

export const metadata = {
  metadataBase: new URL("https://atakankaracali.com"),
  title: "Atakan Karacali | Frontend & Python Developer",
  description: "Experienced frontend and Python developer building modern web applications with Python, React, Next.js, and Node.js.",
  keywords: "Atakan Karacali, frontend developer, software engineer, Typescript, Node.js, Python, React, Next.js, fullstack developer, web development portfolio",
  author: "Atakan Karacali",
  robots: "index, follow",
  openGraph: {
    title: "Atakan Karacali | Developer Portfolio",
    description: "Experienced frontend and Python developer specializing in modern web applications.",
    type: "website",
    site_name: "Atakan Karacali",
    images: [
      {
        url: "/icon3.png",
        width: 1200,
        height: 630,
        alt: "Atakan Karacali Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AtakanKaracal",
    creator: "@AtakanKaracal",
    title: "Atakan Karacali | Frontend & Python Developer",
    description: "Experienced web developer specializing in React, Next.js, and Python.",
    images: ["/icon3.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon3.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon3.png" />
        <link rel="shortcut icon" href="/icon3.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Atakan Karacali" />
        <meta name="keywords" content="Atakan Karacali, frontend developer, fullstack developer, React, Python, Next.js, web development" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Atakan Karacali | Frontend & Python Developer" />
        <meta property="og:description" content="Experienced web developer specializing in React, Next.js, and Python." />
        <meta property="og:image" content="https://atakankaracali.com/icon3.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AtakanKaracal" />
        <meta name="twitter:creator" content="@AtakanKaracal" />
        <meta name="twitter:title" content="Atakan Karacali | Web Developer" />
        <meta name="twitter:description" content="Building modern and scalable web applications." />
        <meta name="twitter:image" content="https://atakankaracali.com/icon3.png" />
      </head>
      <body>
        <Navbar />
        <main className="container mx-auto pt-24">{children}</main>
      </body>
    </html>
  );
}
