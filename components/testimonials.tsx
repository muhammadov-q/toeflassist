'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah L.",
    image: "/placeholder.svg?height=100&width=100",
    score: "110",
    quote: "Toefl Assist's AI-powered approach boosted my score by 25 points! The personalized study plan was a game-changer."
  },
  {
    name: "Michael T.",
    image: "/placeholder.svg?height=100&width=100",
    score: "108",
    quote: "The virtual reality practice tests and AI tutoring sessions made me feel fully prepared. Toefl Assist is truly next-gen!"
  },
  {
    name: "Emily W.",
    image: "/placeholder.svg?height=100&width=100",
    score: "115",
    quote: "I was amazed by how much I improved in just 8 weeks. The adaptive learning technology is incredibly effective!"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="mb-40 opacity-100 animate-fade-in-up">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Success Stories
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <Card className="border-none shadow-lg backdrop-blur-xl bg-white/10 rounded-2xl p-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={100}
                height={100}
                className="rounded-full border-4 border-blue-400"
              />
              <div className="text-center md:text-left">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300 italic">&ldquo;{testimonials[currentIndex].quote}&rdquo;</p>
                <p className="font-semibold text-xl text-white">{testimonials[currentIndex].name}</p>
                <p className="text-blue-400">TOEFL Score: {testimonials[currentIndex].score}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-purple-500 backdrop-blur-xl border-white/20 text-white hover:bg-white/20"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-purple-500 backdrop-blur-xl border-white/20 text-white hover:bg-white/20"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

