'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'

const updateMessages = [
  "Обновление знаний английского языка...",
  "Загрузка новых идиом...",
  "Оптимизация грамматических структур...",
  "Перезагрузка словарного запаса...",
  "Настройка произношения...",
]

export default function NotFound() {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState(updateMessages[0])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prevProgress + 1
      })
    }, 200) // 20 seconds total

    const messageInterval = setInterval(() => {
      setMessage(updateMessages[Math.floor(Math.random() * updateMessages.length)])
    }, 4000) // Change message every 4 seconds

    const redirectTimer = setTimeout(() => {
      window.location.href = '/'
    }, 20000) // Redirect after 20 seconds

    return () => {
      clearInterval(progressInterval)
      clearInterval(messageInterval)
      clearTimeout(redirectTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#00008B] text-white font-mono p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md text-center">
        <Image
          src="https://muhammadov-q.github.io/toeflassist/logo.png"
          alt="Toefl Assist Logo"
          width={80}
          height={80}
          className="mx-auto mb-8"
        />

        <h1 className="text-3xl font-bold mb-4">Toefl Assist</h1>

        <div className="bg-gray-200 text-[#00008B] p-2 mb-6 inline-block">
          Ошибка - 404
        </div>

        <motion.p
          key={message}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-xl mb-8"
        >
          {message}
        </motion.p>

        <div className="w-full bg-white/20 rounded-full h-4 mb-4">
          <motion.div
            className="bg-white h-full rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <p className="text-lg mb-8">{progress}% завершено</p>

        <div className="flex justify-center space-x-4 mb-8">
          <Link href="/">
            <button className="bg-white text-[#00008B] px-4 py-2 rounded flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Главная
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white text-[#00008B] px-4 py-2 rounded flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад
          </button>
        </div>

        <p className="text-sm">
          Не выключайте компьютер. Это может занять некоторое время.
        </p>

        <p className="mt-4 text-xs">
          Если вы случайно попали на эту страницу, не волнуйтесь.
          Мы автоматически вернем вас на главную через несколько секунд.
        </p>

        <p className="mt-8 text-xs">
          Поддержка: <a href="https://kobiljon.tech" target="_blank" rel="noopener noreferrer" className="underline">Kobiljon.tech</a>
        </p>
      </div>
    </div>
  )
}

