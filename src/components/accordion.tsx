import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import accordionStyles from '../styles/accordion.module.css'

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={accordionStyles.accordion}>
      <AnimatePresence>
        <button
          className={accordionStyles.question}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={accordionStyles.questionRow}>
            <span>{question}</span>
            <span className={accordionStyles.questionPlus}>+</span>
          </div>
          {isOpen && (
            <motion.div
              className={accordionStyles.answer}
              style={{ overflow: 'hidden' }}
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.125 }}
            >
              {answer}
            </motion.div>
          )}
        </button>
      </AnimatePresence>
    </div>
  )
}

export default Accordion
