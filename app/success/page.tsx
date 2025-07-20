"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ContactSuccess() {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Заявка отправлена!</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Спасибо за ваше обращение. Мы свяжемся с вами в ближайшее время.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleBackClick}
            className="w-full bg-[#F15A2B] hover:bg-[#d94d22] text-white font-medium py-3 text-lg"
          >
            Вернуться назад
          </Button>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Или свяжитесь с нами напрямую:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://wa.me/+996555005515"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/toeflassist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
