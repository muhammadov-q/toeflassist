'use client'

import {useCallback, useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {ChevronDown, Globe, HelpCircle, Home, Menu, MessageCircle, Moon, Rocket, Sun, Trophy, X} from 'lucide-react'

const navItems = [
    {href: "#hero", label: "Главная", icon: Home},
    {href: "#how-it-works", label: "Как это работает", icon: Rocket},
    {href: "#results", label: "Результаты", icon: Trophy},
    {href: "#testimonials", label: "Отзывы", icon: MessageCircle},
    {href: "#faq", label: "FAQ", icon: HelpCircle},
]

const languages = ['Русский 🇷🇺']

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('Русский 🇷🇺')
    const [activeItem, setActiveItem] = useState('hero')
    const menuRef = useRef<HTMLDivElement>(null)

    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.classList.toggle('dark')
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100 // Offset for navbar height

            const sections = navItems.map(item => ({
                id: item.href.slice(1),
                element: document.getElementById(item.href.slice(1))
            })).filter(section => section.element !== null)

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section.element) {
                    if (section.element.offsetTop <= scrollPosition) {
                        setActiveItem(section.id)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [navItems])

    return (
        <header className="w-full py-4 px-4 sm:px-6 lg:px-8 fixed top-4 z-50">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={menuRef}
                    className={`backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 px-6 py-4 transition-all duration-300 ${isOpen ? 'h-auto' : 'h-16'} lg:h-auto`}
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center relative">
                        <div className="flex items-center justify-between w-full lg:w-auto h-8">
                            <div className="flex items-center">
                                <Image src="https://muhammadov-q.github.io/toeflassist/logo.JPG" alt="Toefl Assist Logo" width={42} height={42} className="rounded-xl text-black dark:text-white"/>
                                <div className="ml-2 flex flex-col justify-center h-full">
                                    <span className="text-lg font-bold text-black dark:text-white uppercase leading-none">VISION ASSIST</span>
                                    <span className="mt-1 text-xs text-gray-600 dark:text-gray-400 leading-none pr-4">Быстро. Удобно. Безопасно.</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 lg:hidden h-8">
                                <Button
                                    variant="default"
                                    size="sm"
                                    className="bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                                >
                                    Связаться
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleMenu}
                                    aria-label="Переключить меню"
                                    className="text-black bg-gray-200 dark:text-white dark:bg-gray-800 p-1"
                                >
                                    {isOpen ? <X className="h-8 w-8"/> : <Menu className="h-8 w-8"/>}
                                </Button>
                            </div>
                        </div>
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm flex items-center gap-2 px-3 py-2 rounded-md ${
                                        activeItem === item.href.slice(1)
                                            ? 'bg-gray-200 dark:bg-gray-700'
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setActiveItem(item.href.slice(1))
                                        document.querySelector(item.href)?.scrollIntoView({
                                            behavior: 'smooth'
                                        })
                                    }}
                                >
                                    <item.icon className="h-4 w-4"/>
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="hidden lg:flex items-center space-x-4">
                            <Button
                                variant="default"
                                className="bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                            >
                                Связаться
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 bg-gray-100 dark:bg-gray-800"
                            >
                                {theme === 'light' ? <Moon className="h-5 w-5"/> : <Sun className="h-5 w-5"/>}
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon"
                                            className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 bg-gray-100 dark:bg-gray-800">
                                        <Globe className="h-5 w-5"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {languages.map((lang) => (
                                        <DropdownMenuItem
                                            key={lang}
                                            onClick={() => setLanguage(lang)}
                                            className="cursor-pointer"
                                        >
                                            {lang}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div
                            className={`lg:hidden w-full overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                            <nav className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm flex items-center gap-2 px-3 py-2 rounded-md ${
                                            activeItem === item.href.slice(1)
                                                ? 'bg-gray-200 dark:bg-gray-700'
                                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setActiveItem(item.href.slice(1))
                                            document.querySelector(item.href)?.scrollIntoView({
                                                behavior: 'smooth'
                                            })
                                            toggleMenu()
                                        }}
                                    >
                                        <item.icon className="h-5 w-5"/>
                                        {item.label}
                                    </Link>
                                ))}
                                <div
                                    className="flex flex-col space-y-2 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                                    <Button
                                        variant="ghost"
                                        onClick={toggleTheme}
                                        className="w-full justify-start text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                                    >
                                        {theme === 'light' ? <Moon className="h-5 w-5 mr-2"/> :
                                            <Sun className="h-5 w-5 mr-2"/>}
                                        {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost"
                                                    className="w-full justify-between text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <span className="flex items-center">
                          <Globe className="h-5 w-5 mr-2"/>
                            {language}
                        </span>
                                                <ChevronDown className="h-4 w-4"/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {languages.map((lang) => (
                                                <DropdownMenuItem
                                                    key={lang}
                                                    onClick={() => {
                                                        setLanguage(lang)
                                                        toggleMenu()
                                                    }}
                                                    className="cursor-pointer"
                                                >
                                                    {lang}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
