"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PhoneIcon as WhatsappIcon, InstagramIcon, SendIcon, MailIcon } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const botToken = "7213438831:AAEgN-2Dyym_LnGmT8OckC9bBVejT7I77qM"
      const chatId = "6066584454"

      const message = `
New Contact Form Submission:
👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
💬 Telegram: @${formData.telegram}
      `.trim()

      // Send to Telegram Bot API
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      })

      const data = await response.json()

      if (data.ok) {
        setNotification({
          show: true,
          type: "success",
          message: "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
        })
        setFormData({ name: "", phone: "", telegram: "" })

        // Hide notification after 5 seconds
        setTimeout(() => {
          setNotification({ show: false, type: "", message: "" })
        }, 5000)
      } else {
        throw new Error("Failed to send message to Telegram")
      }
    } catch (error) {
      console.error("Error sending form data:", error)
      setNotification({
        show: true,
        type: "error",
        message: "Ошибка отправки. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.",
      })

      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, type: "", message: "" })
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      icon: WhatsappIcon,
      href: "https://wa.me/+996555005515",
      label: "WhatsApp",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/vision.assistt?igsh=MXE2ajBwYXByMzV2Zw==",
      label: "Instagram",
      bgColor: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
    {
      icon: SendIcon,
      href: "https://t.me/toeflassist",
      label: "Telegram",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: MailIcon,
      href: "mailto:your@email.com",
      label: "Email",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
  ]

  return (
    <section id="contact" className="mb-40 opacity-100 animate-fade-in-up px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        {notification.show && (
          <div
            className={`mb-6 p-4 rounded-md ${
              notification.type === "success"
                ? "bg-green-100 border border-green-400 text-green-700"
                : "bg-red-100 border border-red-400 text-red-700"
            }`}
          >
            {notification.message}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Остались вопросы?
            </h2>
            <p className="text-xl text-[#1e3a8a] dark:text-white mb-4">
              Свяжитесь с нами и менеджер проконсультирует вас бесплатно.
            </p>
            <div className="flex space-x-6 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.bgColor} ${link.hoverColor} text-white p-3 rounded-full transition-colors duration-300 transform hover:scale-110`}
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#1e3a8a] dark:text-white mb-2">
                Ваше имя
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Иван"
                required
                className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[#1e3a8a] dark:text-white mb-2">
                Номер телефона
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (999) 123-45-67"
                required
                className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="telegram" className="block text-[#1e3a8a] dark:text-white mb-2">
                Никнейм в телеграм
              </label>
              <Input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@toeflassist"
                required
                className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F15A2B] hover:bg-[#d94d22] text-white font-medium py-3 text-lg"
            >
              {isSubmitting ? "Отправка..." : "Оставить заявку"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

