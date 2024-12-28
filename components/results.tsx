'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, ChevronUp, ArrowUpRight, SortAsc, SortDesc, Filter } from 'lucide-react'

const results = [
  { id: 1, totalScore: 110, testName: "TOEFL", image: "/toefl.png", details: "Reading: 28 | Listening: 27 | Speaking: 28 | Writing: 27" },
  { id: 2, totalScore: 108, testName: "TOEFL", image: "/toefl.png", details: "Reading: 27 | Listening: 26 | Speaking: 28 | Writing: 27" },
  { id: 3, totalScore: 115, testName: "TOEFL", image: "/toefl.png", details: "Reading: 29 | Listening: 29 | Speaking: 28 | Writing: 29" },
  { id: 4, totalScore: 100, testName: "TOEFL", image: "/toefl.png", details: "Reading: 28 | Listening: 27 | Speaking: 28 | Writing: 27" },
  { id: 5, totalScore: 108, testName: "TOEFL", image: "/toefl.png", details: "Reading: 27 | Listening: 26 | Speaking: 28 | Writing: 27" },
  { id: 6, totalScore: 98, testName: "TOEFL", image: "/toefl.png", details: "Reading: 29 | Listening: 29 | Speaking: 28 | Writing: 29" },
  { id: 7, totalScore: 108, testName: "TOEFL", image: "/toefl.png", details: "Reading: 27 | Listening: 26 | Speaking: 28 | Writing: 27" },
  { id: 8, totalScore: 98, testName: "TOEFL", image: "/toefl.png", details: "Reading: 29 | Listening: 29 | Speaking: 28 | Writing: 29" },
]


export default function Results() {
  const [showAll, setShowAll] = useState(false)
  const [expandedResult, setExpandedResult] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    setExpandedResult(null)
  }, [filter, searchTerm, sortOrder])

  const filteredResults = results
  .filter(result => {
    if (filter === 'all') return true;
    if (filter === 'reading') return parseInt(result.details.split('|')[0].split(':')[1]) >= 25;
    if (filter === 'listening') return parseInt(result.details.split('|')[1].split(':')[1]) >= 25;
    if (filter === 'speaking') return parseInt(result.details.split('|')[2].split(':')[1]) >= 25;
    if (filter === 'writing') return parseInt(result.details.split('|')[3].split(':')[1]) >= 25;
    return true;
  })
  .filter(result =>
    result.totalScore.toString().includes(searchTerm) ||
    result.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.details.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => sortOrder === 'asc' ? a.totalScore - b.totalScore : b.totalScore - a.totalScore)

  const displayedResults = showAll ? filteredResults : filteredResults.slice(0, 6)

  const toggleExpand = useCallback((id: number) => {
    setExpandedResult(prevId => prevId === id ? null : id)
  }, [])

  const toggleSortOrder = useCallback(() => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc')
  }, [])

  const ResultCard = ({ result }: { result: typeof results[0] }) => (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg bg-white dark:bg-gray-800 rounded-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={result.image}
            alt={`TOEFL Certificate for score ${result.totalScore}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <p className="text-blue-600 dark:text-blue-400 text-lg font-semibold">{result.testName}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">Score: {result.totalScore}</p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{result.details}</p>
          <Button
            variant="outline"
            className="w-full justify-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
            onClick={() => toggleExpand(result.id)}
          >
            {expandedResult === result.id ? (
              <>
                See Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                See More <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
          <AnimatePresence>
            {expandedResult === result.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-sm text-gray-600 dark:text-gray-400"
              >
                <p className="mb-2">Additional details about the test performance and preparation strategies can be found in the full report.</p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  View Full Report <ArrowUpRight className="ml-1 h-4 w-4 inline" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="results" className="mb-40 opacity-100 animate-fade-in-up px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        Stellar Student Achievements
      </h2>
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Input
              type="text"
              placeholder="Search by score or test"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={toggleSortOrder}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <span className="hidden sm:inline">Sort</span> {sortOrder === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />}
            </Button>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <Filter size={16} /> <span className="hidden sm:inline">Filters</span>
            </Button>
          </div>
        </div>

        <AnimatePresence mode="sync">
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <div className="flex flex-wrap gap-4">
                <div className="flex-grow">
                  <label htmlFor="filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Filter by score:</label>
                  <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    <option value="all">All Scores</option>
                    <option value="reading">Reading ≥ 25</option>
                    <option value="listening">Listening ≥ 25</option>
                    <option value="speaking">Speaking ≥ 25</option>
                    <option value="writing">Writing ≥ 25</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence>
            {displayedResults.map((result) => (
              <motion.div
                key={result.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ResultCard result={result} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="mt-12 text-center">
          {!showAll && filteredResults.length > 6 && (
            <Button
              onClick={() => setShowAll(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-2 rounded-md transition-colors duration-200"
            >
              View More Success Stories
            </Button>
          )}
          {showAll && (
            <Button
              onClick={() => setShowAll(false)}
              className="bg-purple-500 hover:bg-purple-600 text-white text-lg px-6 py-2 rounded-md transition-colors duration-200"
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

