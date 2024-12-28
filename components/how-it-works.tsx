'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    value: "assess",
    title: "1. Assess Your Level",
    description: "Begin your TOEFL journey with a comprehensive diagnostic test.",
    details: [
      "Complete a full-length TOEFL practice test",
      "Receive a detailed breakdown of your performance in each section",
      "Identify your strengths and areas for improvement",
      "Get an initial estimated TOEFL score"
    ],
    icon: "📊"
  },
  {
    value: "plan",
    title: "2. Get a Personalized Plan",
    description: "Our AI crafts a study plan tailored to your needs and goals.",
    details: [
      "Set your target TOEFL score and test date",
      "AI analyzes your diagnostic results and goals",
      "Receive a week-by-week study schedule",
      "Get personalized resource recommendations"
    ],
    icon: "🎯"
  },
  {
    value: "practice",
    title: "3. Practice with Purpose",
    description: "Engage with targeted exercises and full-length tests.",
    details: [
      "Access section-specific practice questions",
      "Complete AI-recommended exercises based on your weak areas",
      "Take periodic full-length TOEFL practice tests",
      "Receive instant feedback and explanations for each question"
    ],
    icon: "🏋️‍♂️"
  },
  {
    value: "improve",
    title: "4. Track and Improve",
    description: "Monitor your progress and refine your approach.",
    details: [
      "View detailed analytics of your performance over time",
      "Track your estimated TOEFL score as you practice",
      "Receive AI-powered suggestions for improvement",
      "Adjust your study plan based on your progress"
    ],
    icon: "📈"
  },
]

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("assess")
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNextStep()
      } else if (e.key === 'ArrowLeft') {
        handlePrevStep()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeTab])

  const handleNextStep = () => {
    const currentIndex = steps.findIndex(step => step.value === activeTab)
    if (currentIndex < steps.length - 1) {
      setActiveTab(steps[currentIndex + 1].value)
      setDirection(1)
    }
  }

  const handlePrevStep = () => {
    const currentIndex = steps.findIndex(step => step.value === activeTab)
    if (currentIndex > 0) {
      setActiveTab(steps[currentIndex - 1].value)
      setDirection(-1)
    }
  }

  return (
    <section id="how-it-works" className="mb-40 opacity-100 animate-fade-in-up px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        Your Path to TOEFL Success
      </h2>
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          setDirection(steps.findIndex(step => step.value === value) > steps.findIndex(step => step.value === activeTab) ? 1 : -1)
          setActiveTab(value)
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <TabsList className="hidden sm:grid w-full grid-cols-2 lg:grid-cols-4 bg-gray-100 dark:bg-white/10 p-1 rounded-full mb-8">
          {steps.map((step) => (
            <TabsTrigger
              key={step.value}
              value={step.value}
              className={`text-sm rounded-full transition-all duration-300 ${
                activeTab === step.value 
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/20'
              }`}
            >
              {step.title.split('.')[0]}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            {steps.map((step) => (
              <TabsContent key={step.value} value={step.value} className="outline-none">
                <motion.div
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Card className="border-none shadow-lg bg-white dark:bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex flex-row items-center gap-4">
                      <span className="text-4xl">{step.icon}</span>
                      <div>
                        <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">{step.title}</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{step.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {step.details.map((detail, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevStep}
              disabled={activeTab === steps[0].value}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextStep}
              disabled={activeTab === steps[steps.length - 1].value}
              className="flex items-center gap-2"
            >
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Tabs>
    </section>
  )
}

