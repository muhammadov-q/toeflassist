import type React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PolicyModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PolicyModal

