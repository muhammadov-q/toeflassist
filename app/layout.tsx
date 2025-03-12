import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.toeflassist.org"),
  title: "Toefl Assist - Быстро. Удобно. Безопасно.",
  description:
    "Toefl Assist предоставляет консультации по TOEFL, IELTS, GRE и GMAT. Получите профессиональную поддержку для достижения ваших целей.",
  keywords: "TOEFL, IELTS, GRE, GMAT, консультации по экзаменам, языковые тесты, академический английский",
  openGraph: {
    title: "Toefl Assist - Профессиональные консультации по языковым тестам",
    description:
      "Получите экспертную поддержку для TOEFL, IELTS, GRE и GMAT с Toefl Assist. Индивидуальный подход к вашим целям.",
    images: [
      {
        url: "https://www.toeflassist.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toefl Assist - Консультации по языковым тестам",
      },
    ],
    locale: "ru_RU",
    type: "website",
    siteName: "Toefl Assist",
    url: "https://www.toeflassist.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toefl Assist - Экспертная поддержка в языковых тестах",
    description:
      "Профессиональные консультации по TOEFL, IELTS, GRE и GMAT. Индивидуальный подход к вашим академическим целям.",
    images: ["https://www.toeflassist.org/twitter-image.jpg"],
    creator: "@toeflassist",
  },
  alternates: {
    canonical: "https://www.toeflassist.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://muhammadov-q.github.io/toeflassist/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://muhammadov-q.github.io/toeflassist/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://muhammadov-q.github.io/toeflassist/favicon-16x16.png"
        />
        <link rel="manifest" href="https://muhammadov-q.github.io/toeflassist/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="beforeInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(100288386, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/100288386" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}

        {children}
      </body>
    </html>
  )
}

