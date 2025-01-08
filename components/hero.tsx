'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle, ArrowUpRight, X } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    title: "Тест IELTS",
    description: "Узнаете формат и динамику экзамена, прокачаете слабые стороны для получения отличного результата"
  },
  {
    title: "Тест TOEFL",
    description: "Готовим к выпускным экзаменам и сдаче экзамена для поступления в любой стране."
  },
  // {
  //   title: "Тест GRE",
  //   description: "Подготовка к GRE для поступления в аспирантуру в США и другие страны."
  // },
     {
    title: "Тест DUOLINGO",
    description: "Узнаете формат и динамику экзамена, прокачаете слабые стороны для получения отличного результата"
  },
  {
    title: "Тест GMAT, GRE",
    description: "Подготовка к GMAT для поступления в бизнес-школы в США и другие страны."
  }
]

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contact')
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
      <section id="hero" className="relative text-center mb-20 pt-0 lg:pt-4 overflow-hidden">
        <div className="h1-background mb-4 py-2">
          <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight px-4 py-2 mb-2"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
          >
            Хочешь сдать языковой тест успешно?
          </motion.h1>
        </div>

        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.p
              variants={itemVariants}
              className="text-sm pt-4 sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Мы помогаем с сдачей разных тестов и экзаменов по вашему запросу не покидая Российскую Федерацию
          </motion.p>

          <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 sm:mb-16 max-w-3xl mx-auto"
          >
            <Button
            className="bg-[#FF5733] text-white hover:bg-[#E64D2E] dark:bg-[#FF5733] dark:hover:bg-[#E64D2E] text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#FF5733]/50 w-full sm:w-auto"
            onClick={scrollToContacts}
          >
            Начать обучение <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
            <Button
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/50 w-full sm:w-auto"
                onClick={() => setShowVideo(true)}
            >
              Смотреть демо <PlayCircle className="ml-2 h-4 w-4 sm:h-5 sm:w-5"/>
            </Button>
          </motion.div>

          <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative overflow-hidden group cursor-pointer"
                    onClick={scrollToContacts}
                >
                  <div
                      className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 h-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-left mb-8">
                      {feature.description}
                    </p>
                    <div
                        className="absolute bottom-4 right-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-6 w-6 text-blue-500 dark:text-blue-400"/>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {showVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="relative w-full max-w-4xl mx-4 aspect-video">
                <button
                    className="absolute -top-10 right-0 text-white hover:text-gray-300"
                    onClick={() => setShowVideo(false)}
                >
                  <X className="h-8 w-8"/>
                </button>
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Product Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
              </div>
            </div>
        )}
      </section>
  )
}

