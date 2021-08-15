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
          <p className={accordionStyles.questionRow}>
            {question}
            <div className={accordionStyles.questionPlus}>+</div>
          </p>
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
