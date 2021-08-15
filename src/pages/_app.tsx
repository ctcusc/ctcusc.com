import '../styles/global.css'
import 'katex/dist/katex.css'
import { motion } from 'framer-motion'

export default function MyApp({ Component, pageProps }) {
  const variants = {
    initial: {
      opacity: 0,
      y: 8,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  }
  return (
    <>
      <motion.div initial="initial" animate="enter" variants={variants}>
        <Component {...pageProps} />
      </motion.div>
    </>
  )
}
