'use client'

import { useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import Results from '@/components/results'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Contact from '../components/contact'
import Footer from '@/components/footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.animate-fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-50 dark:bg-slate-950 flex flex-col items-center justify-center text-black dark:text-white scroll-smooth">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <Hero />
        <HowItWorks />
        <Results />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

