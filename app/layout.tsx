import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toefl Assist',
  description: 'Быстро, удобно, безопасно, на высокий балл',
  openGraph: {
    title: 'Toefl Assist',
    description: 'Быстро, удобно, безопасно, на высокий балл',
    images: [
      {
        url: 'https://muhammadov-q.github.io/toeflassist/logo.png',
        width: 1200,
        height: 630,
        alt: 'Toefl Assist - Подготовка к TOEFL',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
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

