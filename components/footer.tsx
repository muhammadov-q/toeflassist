import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
]

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribing email:', email)
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <footer className="w-full bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-gray-900 text-gray-800 dark:text-gray-200 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo, Slogan, and Social Links */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image src="https://muhammadov-q.github.io/toeflassist/logo.png" alt="Toefl Assist Logo" width={40} height={40} />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Toefl Assist</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">быстро, удобно, безопасно, на высокий баллx</p>
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
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Links</h3>
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

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Email: support@toeflassist.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 TOEFL Street, Language City, 12345</li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              {isSubmitted ? (
                <p className="text-sm text-green-600 dark:text-green-400">Thank you for subscribing!</p>
              ) : (
                <>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-colors duration-200">
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Copyright and Additional Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
            © {new Date().getFullYear()} Toefl Assist. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

