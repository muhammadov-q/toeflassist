'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Остались вопросы?
            </h2>
            <p className="text-xl text-[#1e3a8a] dark:text-white mb-8">
              Свяжитесь с нами и менеджер проконсультирует вас бесплатно.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full"
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
                className="w-full"
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
                className="w-full"
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

