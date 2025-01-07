'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PhoneIcon as WhatsappIcon, InstagramIcon, SendIcon, MailIcon } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '', telegram: '' })
    setIsSubmitting(false)
  }

  const socialLinks = [
    { icon: WhatsappIcon, href: 'https://wa.me/yourphonenumber', label: 'WhatsApp', bgColor: 'bg-green-500', hoverColor: 'hover:bg-green-600' },
    { icon: InstagramIcon, href: 'https://instagram.com/yourusername', label: 'Instagram', bgColor: 'bg-pink-500', hoverColor: 'hover:bg-pink-600' },
    { icon: SendIcon, href: 'https://t.me/yourusername', label: 'Telegram', bgColor: 'bg-blue-500', hoverColor: 'hover:bg-blue-600' },
    { icon: MailIcon, href: 'mailto:your@email.com', label: 'Email', bgColor: 'bg-red-500', hoverColor: 'hover:bg-red-600' },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
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
          <form onSubmit={handleSubmit} className=" space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#1e3a8a] dark:text-white mb-2">Ваше имя</label>
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
              <label htmlFor="phone" className="block text-[#1e3a8a] dark:text-white mb-2">Номер телефона</label>
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
              <label htmlFor="telegram" className="block text-[#1e3a8a] dark:text-white mb-2">Никнейм в телеграм</label>
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
              Оставить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

