import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Himanshu Mahaseth" />
        <meta name="description" content="By Himanshu Studio" />

        {/* SEO Meta Tags */}
        <meta
          name="keywords"
          content="Himanshu Mahaseth, portfolio, web development, projects, achievements, technology, innovation"
        />
        <meta name="author" content="Himanshu Mahaseth" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://himanshumahaseth.com.np" />
        <meta property="og:title" content="Himanshu Mahaseth " />
        <meta
          property="og:description"
          content="Explore the portfolio of Himanshu Mahaseth, showcasing projects, achievements, and skills in web development, technology, and innovation."
        />
        <meta property="og:image" content="https://himanshumahaseth.com.np" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://x.com/thegr8_himanshu" />
        <meta property="twitter:title" content="Himanshu Mahaseth" />
        <meta
          property="twitter:description"
          content="Explore the portfolio of Himanshu Mahaseth, showcasing projects, achievements, and skills in web development, technology, and innovation."
        />
        <meta
          property="twitter:image"
          content="https://x.com/thegr8_himanshu"
        />

        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://himanshumahaseth.com.np" />

        {/* Page Title */}
        <title>Himanshu Mahaseth</title>
      </head>
      <body className={inter.className}>
        {children}

        {/* Microsoft Clarity Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "nk2xc37947");
            `,
          }}
        />
      </body>
    </html>
  );
}
