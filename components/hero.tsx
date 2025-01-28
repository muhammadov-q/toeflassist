"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowUpRight, BookOpen, GraduationCap, Globe, TrendingUp, MessageCircle } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    title: "Тест IELTS",
    description: "Узнаете формат и динамику экзамена, прокачаете слабые стороны",
    icon: BookOpen,
    gradient: "from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900",
    iconColor: "text-purple-500 dark:text-purple-400",
  },
  {
    title: "Тест TOEFL",
    description: "Готовим к выпускным экзаменам и сдаче экзамена для поступления",
    icon: GraduationCap,
    gradient: "from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900",
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  {
    title: "Тест DUOLINGO",
    description: "Узнаете формат и динамику экзамена, прокачаете слабые стороны",
    icon: Globe,
    gradient: "from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900",
    iconColor: "text-green-500 dark:text-green-400",
  },
  {
    title: "Тест GMAT, GRE",
    description: "Подготовка к GMAT для поступления в бизнес-школы",
    icon: TrendingUp,
    gradient: "from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900",
    iconColor: "text-yellow-500 dark:text-yellow-400",
  },
]

export default function Hero() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contact")
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative mb-20 pt-12 lg:pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight mb-4">
            Хочешь сдать языковой тест успешно?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Мы с легкостью поможем вам сдать различные тесты и экзамены по вашему запросу.
          </p>
          <Button
            size="lg"
            onClick={scrollToContacts}
            className="group relative text-base font-medium px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all duration-200 hover:translate-y-[-1px] hover:shadow-md"
          >
            <span className="flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              Бесплатная консультация
            </span>
          </Button>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="relative overflow-hidden group">
              <Link
                href="https://t.me/toeflassist"
                target="_blank"
                rel="noopener noreferrer"
                className={`block border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-gradient-to-br ${feature.gradient} transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 h-full`}
              >
                <div className="flex items-center mb-2">
                  <feature.icon className={`h-6 w-6 ${feature.iconColor} mr-2`} aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{feature.description}</p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm group-hover:underline">
                  <span className="mr-1">Узнать больше</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

