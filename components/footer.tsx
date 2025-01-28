import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MailIcon, SendIcon, MessageCircleIcon, Instagram, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PolicyModal from "./PolicyModal"

const navItems = [
  { href: "#hero", label: "Главная" },
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#results", label: "Результаты" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
]

const socialLinks = [
  { icon: MessageCircleIcon, label: "Whatsapp", href: "https://wa.me/+996555005515" },
  { icon: SendIcon, label: "Telegram", href: "https://t.me/toeflassist" },
  { icon: MailIcon, label: "Email", href: "#" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/claster.assist?igsh=MWVhN3o3Z2RvdHdubg%3D%3D&utm_source=qr",
  },
]

const policyContent = `СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ

Настоящим, авторизуясь на сайте или в приложении TOEFL Assist (далее – Сервис), Пользователь подтверждает свое согласие на обработку персональных данных (далее – Согласие) в соответствии с действующим законодательством Кыргызской Республики. Действуя добровольно, своей волей и в своем интересе, а также подтверждая свою дееспособность, Пользователь дает согласие TOEFL Assist, юридическому лицу, предоставляющему услуги Сервиса, на обработку своих персональных данных на следующих условиях:

1. Общие положения

1.1. Согласие дается на обработку персональных данных как с использованием средств автоматизации, так и без их использования.
1.2. Персональные данные Пользователя не являются общедоступными и защищены в соответствии с законодательством.

2. Персональные данные

2.1. Согласие распространяется на обработку следующих данных Пользователя:
 • Имя;
 • Номер телефона;
 • Адрес электронной почты;
 • Возраст;
 • История посещений сайта/приложения (cookie-файлы, IP-адрес);
 • Информация об обучении и тестировании (например, данные о регистрации на экзамены TOEFL).

3. Цели обработки данных

3.1. Обработка персональных данных осуществляется в следующих целях:
 • Предоставление услуг по подготовке к экзамену TOEFL и другим образовательным программам;
 • Обеспечение технической поддержки Пользователей;
 • Маркетинговые рассылки, включая акции, предложения, и рекламу услуг Сервиса;
 • Улучшение качества работы Сервиса и персонализация услуг.

4. Действия с персональными данными

4.1. В ходе обработки персональных данных могут быть совершены следующие действия:
 • Сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение);
 • Извлечение, использование, передача (в пределах партнерских организаций TOEFL Assist, с обязательством конфиденциальности);
 • Блокирование, удаление, уничтожение данных.

5. Срок действия согласия

5.1. Согласие действует с момента его предоставления и сохраняет свою силу до достижения целей обработки данных или до момента его отзыва Пользователем.

6. Отзыв согласия

6.1. Пользователь вправе отозвать согласие на обработку своих данных, направив письменное заявление по адресу: г. Бишкек, ул. Ибраимова, д. 10, офис 301 или на электронную почту support@toeflassist.kg.

7. Прочие условия

7.1. Соглашаясь с настоящими условиями, Пользователь подтверждает, что ознакомлен с политикой конфиденциальности TOEFL Assist.
7.2. TOEFL Assist обязуется не передавать персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством или настоящим Согласием.

Настоящее согласие является обязательным документом для взаимодействия с Сервисом TOEFL Assist.`

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Подписка на email:", email)
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const openModal = (title: string) => {
    setModalContent({ title, content: policyContent })
    setIsModalOpen(true)
  }

  return (
    <footer className="w-full bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-gray-900 text-gray-800 dark:text-gray-200 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo, Slogan, and Social Links */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="https://muhammadov-q.github.io/toeflassist/logo.JPG"
                alt="Toefl Assist Логотип"
                width={62}
                height={62}
              />
              <div className="ml-2 flex flex-col justify-center h-full">
                <span className="text-lg font-bold text-black dark:text-white uppercase leading-none">
                  VISION ASSIST
                </span>
                <span className="mt-1 text-xs text-gray-600 dark:text-gray-400 leading-none pr-4">
                  Быстро, удобно, безопасно, на высокий балл
                </span>
              </div>
            </Link>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Подпишитесь на новости</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              {isSubmitted ? (
                <p className="text-sm text-green-600 dark:text-green-400">Спасибо за подписку!</p>
              ) : (
                <>
                  <Input
                    type="email"
                    placeholder="Введите ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-colors duration-200"
                  >
                    Подписаться <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Copyright and Additional Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
            © {new Date().getFullYear()} Toefl Assist. Все права защищены. При поддержке{" "}
            <a
              href="https://www.kobiljon.tech/nfc.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Kobiljon.tech
            </a>
          </p>

          <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <button
              onClick={() => openModal("Политика конфиденциальности")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Политика конфиденциальности
            </button>
            <button
              onClick={() => openModal("Условия использования")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Условия использования
            </button>
          </div>
        </div>
      </div>
      <PolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </footer>
  )
}

