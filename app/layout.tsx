import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.toeflassist.org'),
  title: 'Toefl Assist - Подготовка к TOEFL | Быстро, удобно, безопасно',
  description: 'Toefl Assist предлагает эффективную подготовку к TOEFL, IELTS, GRE и GMAT. Получите высокий балл с нашей помощью. Быстро, удобно, безопасно.',
  keywords: 'TOEFL, IELTS, GRE, GMAT, подготовка к экзаменам, изучение английского, онлайн обучение, языковые тесты',
  openGraph: {
    title: 'Toefl Assist - Эффективная подготовка к языковым тестам',
    description: 'Подготовьтесь к TOEFL, IELTS, GRE и GMAT с Toefl Assist. Высокие баллы гарантированы!',
    images: [
      {
        url: 'https://www.toeflassist.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Toefl Assist - Подготовка к языковым тестам',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
    siteName: 'Toefl Assist',
    url: 'https://www.toeflassist.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toefl Assist - Подготовка к TOEFL и другим языковым тестам',
    description: 'Эффективная подготовка к TOEFL, IELTS, GRE и GMAT. Высокие баллы с Toefl Assist.',
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
    apple: 'https://muhammadov-q.github.io/toeflassist/apple-icon.png',
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

