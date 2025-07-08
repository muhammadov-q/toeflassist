"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Globe,
  TrendingUp,
  MessageCircle,
  CheckCircle,
  Sparkles,
  Star,
} from "lucide-react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Тест IELTS",
    description: "Узнаете формат и динамику экзамена, прокачаете слабые стороны",
    icon: BookOpen,
    gradient: "from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950",
    iconColor: "text-violet-600 dark:text-violet-400",
    borderColor: "border-violet-200 dark:border-violet-800",
    hoverColor: "hover:border-violet-300 dark:hover:border-violet-600",
  },
  {
    title: "Тест TOEFL",
    description: "Готовим к выпускным экзаменам и сдаче экзамена для поступления",
    icon: GraduationCap,
    gradient: "from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800",
    hoverColor: "hover:border-blue-300 dark:hover:border-blue-600",
  },
  {
    title: "Тест DUOLINGO",
    description: "Узнаете формат и динамику экзамена, прокачаете слабые стороны",
    icon: Globe,
    gradient: "from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    hoverColor: "hover:border-emerald-300 dark:hover:border-emerald-600",
  },
  {
    title: "Тест GMAT, GRE",
    description: "Подготовка к GMAT для поступления в бизнес-школы",
    icon: TrendingUp,
    gradient: "from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950",
    iconColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800",
    hoverColor: "hover:border-amber-300 dark:hover:border-amber-600",
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
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contact")
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative py-4 lg:py-8 overflow-hidden rounded-2xl animate-fade-in-up"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Хочешь сдать языковой
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              тест успешно?
            </span>
          </motion.h1>

          {/* Highlighted Hook - Payment After Results */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-2xl blur-xl opacity-25 animate-pulse" />
            <div className="relative bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 text-white px-8 py-5 rounded-2xl border border-emerald-300/50 transform transition-all duration-300">
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="flex-shrink-0"
                >
                  <Sparkles className="h-7 w-7 text-yellow-300 drop-shadow-sm" />
                </motion.div>
                <span className="text-xl lg:text-2xl font-bold tracking-wide">ОПЛАТА ПОСЛЕ РЕЗУЛЬТАТА</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-6 w-6 text-emerald-200" />
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Мы с легкостью поможем вам сдать различные тесты и экзамены по вашему запросу.
            <br />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={scrollToContacts}
              className="group relative text-lg font-semibold px-8 py-4 h-auto rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
            >
              <span className="flex items-center justify-center gap-3">
                <MessageCircle className="h-5 w-5 transition-transform duration-300" />
                Бесплатная консультация
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group">
              <a
                href="https://t.me/toeflassist"
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative overflow-hidden rounded-2xl p-6 lg:p-8 bg-gradient-to-br ${feature.gradient} border-2 ${feature.borderColor} ${feature.hoverColor} transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50 hover:-translate-y-1 h-full group-hover:scale-[1.02]`}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent" />

                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-sm mr-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.iconColor}`} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    <span className="mr-2">Узнать больше</span>
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Более 1000+ успешных студентов</p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">4.9/5 рейтинг</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
