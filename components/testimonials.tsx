'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: "ЕКАТЕРИНА",
    university: "Поступила в University of Amsterdam",
    quote: "Вы стали для меня настоящим ключиком! Помогли во всем: от подготовки к IELTS до подачи документов. Я очень переживала за тест, но благодаря вам сдала на 7.5 и теперь учусь в Амстердаме!",
    image: "👩"
  },
  {
    name: "АЛЕКСАНДР",
    university: "Поступил в University of British Columbia",
    quote: "Учеба в Канаде была моей мечтой, и ребята помогли сделать её реальностью. Подготовили меня к TOEFL, объяснили, как лучше подать документы, и поддержали на всех этапах. В итоге — 89 баллов по TOEFL и поступление на компьютерные науки в UBC.",
    image: "👨"
  },
  {
    name: "АЙЖАН",
    university: "Поступила в University of Southern California",
    quote: "С toefl assist мне удалось поступить в США. Они помогли сдать TOEFL, что было очень важно — нужно было сдать на 100+ баллов. С их поддержкой я добился нужного результата, и теперь учусь в Калифорнии.",
    image: "👩"
  },
  {
    name: "АЗИЗ",
    university: "Поступил в University of Toronto",
    quote: "Ребята помогли мне подготовиться к TOEFL и составить отличное портфолио для поступления. Я набрал 93 балла и получил место в университете мечты. Спасибо за поддержку на всех этапах!",
    image: "👨"
  },
  {
    name: "АННА",
    university: "Поступила в King's College London",
    quote: "Вы помогли мне разобраться с выбором университета, подготовиться к IELTS и написать мотивационное письмо. С вашей помощью я добилась результата и теперь учусь в Лондоне!",
    image: "👩"
  }
];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="mb-40 opacity-100 animate-fade-in-up px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        ОТЗЫВЫ
      </h2>
      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
              <div className="flex flex-col items-center md:items-start">
                <div className="text-4xl mb-4 text-[#1e3a8a] dark:text-blue-400">
                  {testimonials[currentIndex].image}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] dark:text-blue-400 mb-2">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-[#1e3a8a]/80 dark:text-blue-400/80 text-center md:text-left">
                  {testimonials[currentIndex].university}
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-sm">
                <p className="text-[#1e3a8a] dark:text-gray-200 text-lg leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8 gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-2 border-[#1e3a8a] dark:border-blue-400 text-[#1e3a8a] dark:text-blue-400 hover:bg-[#1e3a8a] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Предыдущий отзыв</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-2 border-[#1e3a8a] dark:border-blue-400 text-[#1e3a8a] dark:text-blue-400 hover:bg-[#1e3a8a] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Следующий отзыв</span>
          </Button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#1e3a8a] dark:bg-blue-400 w-4' 
                  : 'bg-[#1e3a8a]/30 dark:bg-blue-400/30 hover:bg-[#1e3a8a]/50 dark:hover:bg-blue-400/50'
              }`}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

