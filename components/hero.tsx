'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle, CheckCircle, X } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const features = [
  "AI-powered personalized study plans",
  "Real-time progress tracking",
  "Interactive speaking practice",
  "Adaptive question bank"
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

  return (
    <section id="hero" className="relative text-center mb-20 pt-4 overflow-hidden">
      <style jsx>{`
        .h1-background {
          position: relative;
          display: inline-block;
          padding: 2rem 1rem;
          margin: 2rem 0;
        }

        .h1-background::before {
          content: '';
          position: absolute;
          top: -200%;
          left: -200%;
          right: -200%;
          bottom: -200%;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          mask-image: 
            linear-gradient(to right, transparent, black 20%, black 80%, transparent),
            linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
          -webkit-mask-image: 
            linear-gradient(to right, transparent, black 20%, black 80%, transparent),
            linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
          mask-composite: intersect;
          -webkit-mask-composite: source-in;
          z-index: -1;
        }

        .dark .h1-background::before {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }

        .h1-glow {
          position: absolute;
          top: -50px;
          left: -50px;
          right: -50px;
          bottom: -50px;
          background: radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.1) 50%, rgba(147,51,234,0) 100%);
          filter: blur(30px);
          z-index: -2;
        }

        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .video-container {
          position: relative;
          width: 80%;
          max-width: 800px;
          aspect-ratio: 16 / 9;
        }

        .close-button {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>

      <div className="h1-background">
        <div className="h1-glow"></div>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Master the TOEFL with AI-Powered Precision
        </motion.h1>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          Harness the power of advanced AI and personalized coaching to boost your TOEFL score by up to 30 points.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-10"
        >
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 w-full sm:w-auto"
          >
            Launch Your Journey <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/50 w-full sm:w-auto"
            onClick={() => setShowVideo(true)}
          >
            Watch Demo <PlayCircle className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center mb-4 space-x-2 text-left bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {showVideo && (
        <div className="video-modal">
          <div className="video-container">
            <button className="close-button" onClick={() => setShowVideo(false)}>
              <X />
            </button>
            <iframe
              width="100%"
              height="100%"
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

