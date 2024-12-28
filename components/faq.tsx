import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does AI enhance the TOEFL preparation experience?",
    answer: "Our AI-powered system analyzes your performance in real-time, adapting your study plan and providing personalized recommendations. It simulates real TOEFL scenarios, offering a truly immersive learning experience."
  },
  {
    question: "Can I access Toefl Assist's virtual reality features on any device?",
    answer: "Yes, our VR features are compatible with most modern smartphones and tablets. For the best experience, we recommend using a VR headset, but it's not required to benefit from our advanced learning tools."
  },
  {
    question: "What sets Toefl Assist apart from traditional TOEFL prep methods?",
    answer: "Toefl Assist combines cutting-edge AI, VR technology, and adaptive learning algorithms to create a personalized, engaging, and highly effective study experience. Our approach is designed to be more efficient and tailored to individual learning styles compared to traditional methods."
  },
  {
    question: "How quickly can I expect to see improvements in my TOEFL score?",
    answer: "While individual results may vary, most students see significant improvement within 4-6 weeks of consistent study with Toefl Assist. Our AI-driven analytics provide detailed progress tracking, allowing you to see your improvements in real-time."
  },
  {
    question: "Are the AI tutors and human instructors available 24/7?",
    answer: "Our AI tutors are available 24/7 for instant support and practice. Human instructors are available for scheduled one-on-one sessions, with flexible timing options to accommodate different time zones and schedules."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="mb-40 opacity-100 animate-fade-in-up px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white hover:no-underline bg-gray-50 dark:bg-gray-700 px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 px-6 py-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

