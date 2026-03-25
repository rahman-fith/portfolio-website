import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Siddiq | Digital Marketing & Ecommerce | AI Automation",
  description:
    "Portfolio of Abdul Siddiq, a Digital Marketing & Ecommerce professional specializing in AI automation, paid media, and DTC brand growth.",
  openGraph: {
    title: "Abdul Siddiq | Digital Marketing & Ecommerce | AI Automation",
    description:
      "Portfolio of Abdul Siddiq, a Digital Marketing & Ecommerce professional specializing in AI automation, paid media, and DTC brand growth.",
    url: "https://abdulsiddiq.com",
    siteName: "Abdul Siddiq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Siddiq | Digital Marketing & Ecommerce | AI Automation",
    description:
      "Portfolio of Abdul Siddiq, a Digital Marketing & Ecommerce professional specializing in AI automation, paid media, and DTC brand growth.",
  },
  metadataBase: new URL("https://abdulsiddiq.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* GA4 — Replace G-XXXXXXXXXX with your Measurement ID and uncomment
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#FAFAFA]`}>
        {children}
      </body>
    </html>
  );
}
