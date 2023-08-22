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
import members from '../../public/members-sitting.jpg'
import retreat from '../../public/retreat-spring23.jpg'
import boys from '../../public/ctc-boys.jpg'
import donut from '../../public/donut-22.jpg'
import designers from '../../public/designers-conference.jpg'
import writegirl from '../../public/writegirl.jpg'
import retreatfa from '../../public/retreat-fall23.jpg'

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
      'Look out for us at the USC Involvment Fair on August 24th and the Viterbi Get Connected! Fair on August 29th. We will also be holding a hybrid info session on August 30th @ 7PM.',
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
          <div className={studentsStyles.buttons}>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeiNY6bkKT6Io7U-dJd_2pXPKK8XuMawDabw41HhLh1xuNbwg/viewform"
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
            src={designers}
            alt="CTC Designers at a conference"
            quality="100"
            priority
            placeholder="blur"
          />
        </div>
        <Image
          src={retreat}
          alt="Club retreat in Del Mar"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={boys}
          alt="CTC members smiling together"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={writegirl}
          alt="Write Girl team hack night"
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
