"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testResults = {
  duolingo: [
    { id: 1, image: "https://muhammadov-q.github.io/toeflassist/duolingo_1.PNG" },
    { id: 2, image: "https://muhammadov-q.github.io/toeflassist/duolingo_2.PNG" },
    { id: 3, image: "https://muhammadov-q.github.io/toeflassist/duolingo_3.PNG" },
  ],
  toefl: [
    { id: 1, image: "https://muhammadov-q.github.io/toeflassist/toefl_1.PNG" },
    { id: 2, image: "https://muhammadov-q.github.io/toeflassist/toefl_2.PNG" },
    { id: 3, image: "https://muhammadov-q.github.io/toeflassist/toefl_3.PNG" },
    { id: 4, image: "https://muhammadov-q.github.io/toeflassist/toefl_4.PNG" },
    { id: 5, image: "https://muhammadov-q.github.io/toeflassist/toefl_5.PNG" },
    { id: 6, image: "https://muhammadov-q.github.io/toeflassist/toefl_6.PNG" },
  ],
}

export default function TestResults() {
  const [activeTest, setActiveTest] = useState<"duolingo" | "toefl" | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const openSlider = (test: "duolingo" | "toefl") => {
    setActiveTest(test)
    setCurrentIndex(0)
    setIsLoading(true)
  }

  const closeSlider = () => {
    setActiveTest(null)
  }

  const nextSlide = () => {
    if (activeTest) {
      setIsLoading(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testResults[activeTest].length)
    }
  }

  const prevSlide = () => {
    if (activeTest) {
      setIsLoading(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testResults[activeTest].length) % testResults[activeTest].length)
    }
  }

  return (
    <section id="results" className="py-16 px-4 mb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Результаты наших студентов
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <TestCard
              title="Duolingo"
              src="https://muhammadov-q.github.io/toeflassist/duolingo.png"
            color="bg-green-100 dark:bg-green-900"
            onClick={() => openSlider("duolingo")}
          />
          <TestCard
            title="TOEFL"
            src="https://muhammadov-q.github.io/toeflassist/toefl.jpg"
            color="bg-blue-100 dark:bg-blue-900"
            onClick={() => openSlider("toefl")}
          />
        </div>
      </div>

      <AnimatePresence>
        {activeTest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeSlider}
          >
            <div className="relative w-full max-w-lg mx-auto" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <Image
                  src={testResults[activeTest][currentIndex].image || "/placeholder.svg"}
                  alt={`${activeTest} result`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-xl mx-auto max-w-full h-auto"
                  onLoadingComplete={() => setIsLoading(false)}
                />
              </motion.div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous result"
              >
                <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next result"
              >
                <ChevronRight size={24} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function TestCard({
  title,
  src,
  color,
  onClick,
}: {
  title: string
  src: string
  color: string
  onClick: () => void
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-lg shadow-lg p-6 cursor-pointer w-full sm:w-64 flex flex-col items-center transition-all duration-300 hover:shadow-xl ${color}`}
      onClick={onClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-full p-4 mb-4 shadow-md">
        <Image src={src || "/placeholder.svg"} alt={`${title} icon`} width={64} height={64} className="rounded-full" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Посмотреть результаты</p>
    </motion.div>
  )
}

