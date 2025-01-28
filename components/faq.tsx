import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Сколько времени займет получение результатов теста TOEFL / DUOLINGO / IELTS?",
    answer: "Время получение сертификата зависит от ваших целей и дедлайнов. Самые срочные резултаты тестов: TOEFL (10 дней) IELTS (5 дней) DUOLINGO (2 дня)"
  },
  {
    question: "Могу ли я сдать экзамен, если мой уровень английского низкий?",
    answer: "Да, это возможно. Мы определяем уровень английского языка для того чтоб пройти проверку проктора (человек который будет контролировать процесс сдачи теста, для того чтоб запустить тест он потребует показать комнату и задаст несколько вопросов). Чтоб пройти проверку нужен минимальный уровень английского языка."
  },
  {
    question: "Какая стоимость сдачи экзамена?",
    answer: "Стоимость зависит от типа экзамена и выбранного пакета подготовки. Мы предлагаем различные варианты, подходящие под разные бюджеты. Свяжитесь с нами для получения детальной информации о ценах и специальных предложениях."
  },
  {
    question: "Мой уровень знания иностранного языка низкий, но я хочу учиться за границей. Что делать?",
    answer: "Не переживайте! Мы сдадим тест за вас, и вы наберете гарантированый бал 85+. Наш опыт показывает, что при правильном подходе и нашей системе вы набираете проходной балл."
  },
  {
    question: "Сколько занимает весь процесс поступления?",
    answer: "Процесс поступления обычно занимает от 2 до 6 месяцев, в зависимости от выбранной страны и учебного заведения. Мы помогаем оптимизировать этот процесс и предоставляем поддержку на каждом этапе, от подготовки к экзамену до получения визы."
  }
]


export default function FAQ() {
  return (
    <section id="faq" className="mb-40 opacity-100 animate-fade-in-up px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        Часто задаваемые вопросы
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
          >
            <AccordionTrigger className="text-lg font-medium text-[#1e3a8a] dark:text-white hover:no-underline px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 dark:text-gray-300 bg-white/30 dark:bg-gray-800/30 px-6 py-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

