import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Image from 'next/image'
import Team from '../components/team'
import Header from '../components/header'
import Footer from '../components/footer'
import aboutStyles from '../styles/about.module.css'
import sharedStyles from '../styles/shared.module.css'
import studentsStyles from '../styles/students.module.css'
import { motion } from 'framer-motion'
import Accordion from '../components/accordion'
import ToggleGroup from '../components/toggle'

const faq = [
  {
    question: 'What apps do CTC usually build?',
    answer:
      "For the most part, projects are full-stack web application—but this does not mean that we only do these! We've also done mobile applications, data analytics, and more.",
  },
  {
    question: "What's the typical timeline for a project?",
    answer:
      'The first semester of a project typically involves more design work and backend design, while the second semester focuses more on implementing finalized designs and polishing the product.',
  },
  {
    question: 'Is there a common design process for every project?',
    answer:
      'All of our designers use Figma, but the actual process of designing a solution for the client is up to you and your project manager.',
  },
  {
    question: 'Is there a common technology stack for every project?',
    answer:
      "Nope! While a lot of our projects end up using PERN stacks, the specific tech stack you'll work on is up to your technology lead's discretion.",
  },
]

const Index = () => {
  return (
    <div className={sharedStyles.layout}>
      <Header titlePre="Projects" />
      <h1>Our past work.</h1>
      <p>Click the cards below to learn more about our previous work:</p>
      <Team />
      <h2>Questions.</h2>
      <div className={studentsStyles.faq}>
        {faq.map(({ question, answer }) => {
          return <Accordion question={question} answer={answer} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Index
