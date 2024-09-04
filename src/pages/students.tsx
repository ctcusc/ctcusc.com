import Image from 'next/image'
import Roles from '../components/roles'
import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Header from '../components/header'
import Accordion from '../components/accordion'
import Footer from '../components/footer'
import 'react-multi-carousel/lib/styles.css'
import studentsStyles from '../styles/students.module.css'
import sharedStyles from '../styles/shared.module.css'
import { motion } from 'framer-motion'
import beach from '../../public/ctcbeach.jpg'
import donut from '../../public/donut-22.jpg'
import designers from '../../public/designers-conference.jpg'
import retreatfa from '../../public/retreat-fall23.jpg'
import ctcf1 from '../../public/ctcf1.jpg'
import ctckfp from '../../public/ctckfp.jpg'
import ctcacro from '../../public/ctcacro.png'
import ctcpie from '../../public/ctcpie.png'

const faq = [
  {
    question: 'How does CTC work?',
    answer:
      'All active CTC members are split into teams and assigned a nonprofit to work with for the year. Teams vary in size depending on the scope of the project, but all will have 1 Product Manager, 1 Tech Lead, and multiple developers + designers.',
  },
  {
    question: 'How much experience do I need?',
    answer:
      'None! We care more about potential and passion than experience. We encourage all undergraduate students to apply. All new members go through onboarding and are paired with a mentor to work on project tasks together.',
  },
  {
    question: 'Can I apply for more than one role?',
    answer:
      'No, but if you believe you have a good reason to apply to more than one, we can accept on a per-request basis.',
  },
  {
    question: "I'm not a CS major. Can I still apply?",
    answer:
      'Please! While many of our members are Computer Science or Design-related majors, we have no preferences for major, year, background, experience level. We review every application we get.',
  },
  {
    question:
      "I'm not sure that I want to apply right now. Can I apply in the spring?",
    answer: 'No, sadly we will be midway through our projects by then.',
  },
  {
    question: 'What can I expect in terms of time commitment/workload?',
    answer:
      "2-5 hours weekly. You'll attend weekly General Meetings and weekly team meetings, and be assigned bi-weekly tickets (tasks) for your project. Projects run from October-April.",
  },
  {
    question: 'How can I meet members to learn more?',
    answer:
      "We're hosting an info session on Zoom on Wednesday, September 4th from 7-8 PM (https://usc.zoom.us/j/96473652607). In addition, you can find us tabling at the Viterbi Get Connected Fair on September 5th!",
  },
]

const Index = () => {
  return (
    <div className={sharedStyles.layout}>
      <Header titlePre="Students" />
      {/* <div className={studentsStyles.break}/> */}
      <h1>Join us.</h1>
      <div className={studentsStyles.grid}>
        <div>
          <p>
            We're a diverse group of students dedicated to using tech for good.
          </p>
          <p>
            Working alongside fellow CTCers, be prepared to immerse yourself in
            a nonprofit for the entire year.
          </p>
          <p>
            We want to build the best solutions possible for our partner
            organizations, so we're looking for students that genuinely share
            our values.
          </p>
          <p>If this resonates with you, we’d love to have you join us.</p>
          <p>
            Applications for the 2024-25 school year are now open! Meet us at
            our Zoom info session on Wednesday, September 4th from 7-8PM (
            <a href="https://usc.zoom.us/j/96473652607">link here</a>) or at the
            Viterbi Get Connected Fair on Thursday, September 5th from 11-2PM!
          </p>
          <div className={studentsStyles.buttons}>
            <a
              target="_blank"
              href="https://forms.gle/RqusrfwXVzxTZfo28"
              className={studentsStyles.center}
            >
              <motion.div
                whileHover={{
                  y: 4,
                  transition: { duration: 0.125 },
                }}
                whileTap={{ scale: 0.95 }}
                className={studentsStyles.primarybutton}
              >
                Apply now
              </motion.div>
            </a>
          </div>
        </div>
        <Image
          className={studentsStyles.photo}
          src={donut}
          priority
          quality="50"
          alt="Members having coffee together"
          placeholder="blur"
        />
      </div>
      <Roles />
      <div className={studentsStyles.photogrid}>
        <div className={studentsStyles.photo}>
          <Image
            src={ctcpie}
            alt="CTC Members pieing each other (for a good cause)"
            quality="100"
            priority
            placeholder="blur"
          />
        </div>
        <Image
          src={beach}
          alt="Club retreat at Huntington Beach"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={ctckfp}
          alt="CTC members watching Kung Fu Panda"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={ctcf1}
          alt="CTC members going go-karting"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={retreatfa}
          alt="Club retreat in Palm Spring Fall 2022"
          quality="50"
          priority
          placeholder="blur"
        />
      </div>
      <h2>Questions.</h2>
      <div className={studentsStyles.faq}>
        {faq.map(({ question, answer }) => {
          return <Accordion question={question} answer={answer} />
        })}
        <div>
          <div />
          <ExtLink href="mailto:ctcusc@gmail.com">
            <div className={studentsStyles.mail}>Have more? Email us!</div>
          </ExtLink>
        </div>
      </div>
      <div className={studentsStyles.break} />
      <h2>Diversity and Inclusion.</h2>
      <p className={studentsStyles.inclusion}>
        Code the Change is dedicated to recruiting members from diverse
        backgrounds, enhancing the accessibility, inclusivity, and value of our
        work. This is a necessity to build impactful, sustainable products for
        the nonprofits we partner with.
      </p>
      <Footer />
    </div>
  )
}

export default Index
