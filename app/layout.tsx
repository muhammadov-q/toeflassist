import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.toeflassist.org'),
  title: 'Toefl Assist - Быстро. Удобно. Безопасно.',
  description: 'Toefl Assist предоставляет консультации по TOEFL, IELTS, GRE и GMAT. Получите профессиональную поддержку для достижения ваших целей.',
  keywords: 'TOEFL, IELTS, GRE, GMAT, консультации по экзаменам, языковые тесты, академический английский',
  openGraph: {
    title: 'Toefl Assist - Профессиональные консультации по языковым тестам',
    description: 'Получите экспертную поддержку для TOEFL, IELTS, GRE и GMAT с Toefl Assist. Индивидуальный подход к вашим целям.',
    images: [
      {
        url: 'https://www.toeflassist.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Toefl Assist - Консультации по языковым тестам',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
    siteName: 'Toefl Assist',
    url: 'https://www.toeflassist.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toefl Assist - Экспертная поддержка в языковых тестах',
    description: 'Профессиональные консультации по TOEFL, IELTS, GRE и GMAT. Индивидуальный подход к вашим академическим целям.',
    images: ['https://www.toeflassist.org/twitter-image.jpg'],
    creator: '@toeflassist',
  },
  alternates: {
    canonical: 'https://www.toeflassist.org',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://muhammadov-q.github.io/toeflassist/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://muhammadov-q.github.io/toeflassist/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://muhammadov-q.github.io/toeflassist/favicon-16x16.png" />
        <link rel="manifest" href="https://muhammadov-q.github.io/toeflassist/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

