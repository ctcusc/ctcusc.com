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
import beach from '../../public/beach-pyramid.jpg'
import beachgroup from '../../public/beach-group.jpg'
import beachcandid from '../../public/mysterious-beachcandid.jpeg'
import ellen from '../../public/ellen-gardening.jpg'
import bathtub from '../../public/bathtub.jpg'
import meetingCandid from '../../public/meeting-candid.jpg'

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
      'Unfortunately, no. However, many members try multiple roles across their different projects at CTC.',
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
      "We'll be at Viterbi's Spring Get Connected Fair on January 13th! In addition, we'll be hosting a number of technical workshops throughout the semester for anyone interested in learning more about what we do!",
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
            More information about applications for the 2025-26 school year will
            be out soon!
          </p>
          {/* <div className={studentsStyles.buttons}>
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
          </div> */}
        </div>
        <Image
          className={studentsStyles.photo}
          src={beachgroup}
          priority
          quality="100"
          alt="Members having coffee together"
          placeholder="blur"
        />
      </div>
      <Roles />
      <div className={studentsStyles.photogrid}>
        <div className={studentsStyles.photo}>
          <Image
            src={meetingCandid}
            alt="GMs at Old Annenberg"
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
          src={bathtub}
          alt="CTC members in a bathtub"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={ellen}
          alt="VP of Face at retreat"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={beachcandid}
          alt="Mysterious beach candid"
          quality="100"
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
