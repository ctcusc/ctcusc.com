import Header from '../components/header'
import Footer from '../components/footer'
import PastProjects from '../components/projects'
import Image from 'next/image'
import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Accordion from '../components/accordion'
import { motion } from 'framer-motion'
import Clock from 'react-live-clock'
import sharedStyles from '../styles/shared.module.css'
import nonprofitStyles from '../styles/nonprofits.module.css'
import studentsStyles from '../styles/students.module.css'
import 'react-multi-carousel/lib/styles.css'
import panel from '../../public//demo-night.jpg'
import present from '../../public/present.jpg'
import usc from '../../public/usc.jpg'
import volunteering from '../../public/cathartic-volunteering.jpg'

const faq = [
  {
    question: 'What is the application timeline?',
    answer:
      'We open up applications around May and will select our clients in July. We have already picked our partners for the 2024-2025 school year.',
  },
  {
    question: 'What does the application look like?',
    answer:
      "We'll reach out to you to fill out an initial interest form. From there, we'll then set up a follow-up meeting to assess your needs and how well your nonprofit fits with our organization's abilities.",
  },
  {
    question: 'How does communication work?',
    answer:
      "Our expectation is biweekly virtual meetings virtually with your team's leads. You'll work directly with an assigned Product Manager and Tech Lead.",
  },
  {
    question: 'Who builds the project?',
    answer:
      "We'll assign a Product Manager, Tech Lead, and associated team of 8-14 developers and designers to create your custom solution.",
  },
  {
    question: 'What kinds of projects do you accept?',
    answer:
      "We'll work with you to scope out a technical solution to your problem. We've done web, mobile, data science in the past.",
  },
  {
    question: 'What about maintenance?',
    answer:
      "We expect you to maintain the project after handoff. We'll work to make that painless.",
  },
  {
    question:
      'What does the timeline of the project look like? Start and end dates?',
    answer:
      "September through April. While we've successfully completed all projects with our clients in the past, we cannot contractually obligate our members to do so.",
  },
]

export default function Nonprofits() {
  return (
    <div className={sharedStyles.layout}>
      <Header titlePre="Contact" />
      <h1>Partner with us.</h1>
      <div className={nonprofitStyles.grid}>
        <Image
          src={volunteering}
          alt="CTC doing a volunteer event for Cathartic Health "
          quality="100"
          priority
          placeholder="blur"
        />
        <div>
          <div>
            <p>
              If you are a registered nonprofit with a clear understanding of a
              problem you're facing that can be solved with technology, let’s
              talk.
            </p>
            <p>
              We’ll work deeply with you for 7 months to help build out a
              solution within web development, data science, mobile apps, or
              backend system.
            </p>
            <p>
              Don't worry about cost, we operate pro bono. Even though we're a
              student club, we're dedicated to producing high quality work. If
              you're interested, please reach out to us! Feel free to check out
              some of our recent projects below.
            </p>
            <div className={nonprofitStyles.buttons}>
              <ExtLink href="mailto:ctcusc@gmail.com">
                <motion.div
                  whileHover={{
                    x: 12,
                    transition: { duration: 0.125 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={nonprofitStyles.primarybutton}
                >
                  Partner with us →
                </motion.div>
              </ExtLink>
            </div>
          </div>
        </div>
      </div>
      <PastProjects />
      <h2>Questions.</h2>
      <div className={studentsStyles.faq}>
        {faq.map(({ question, answer }) => {
          return <Accordion question={question} answer={answer} />
        })}
      </div>
      <div className={nonprofitStyles.photogrid}>
        <div className={nonprofitStyles.c}>
          <Image
            src={usc}
            quality="50"
            priority
            alt="picture of University of Southern California Campus"
          />
        </div>
        <Image
          className={nonprofitStyles.a}
          src={panel}
          quality="50"
          priority
          alt="Member presenting to nonprofits"
        />
        <Image
          className={nonprofitStyles.b}
          src={present}
          quality="50"
          priority
          alt="Member presenting to audience"
        />
      </div>
      <div className={nonprofitStyles.info}>
        <div>
          <h3>Apply.</h3>
          <p>
            We focus on Los Angeles Nonprofit organizations, however we do
            accept applications for NGO's outside the area depending on their
            experience with remote work.
          </p>
          <p>
            If you would like to apply to be a 2024-25 partner, we accept
            applications between May - August. Contact us in May 2024 to set up
            a meeting.
          </p>
          <p>
            Our members are interested in serving communities not just
            technically. If you have volunteer opportunities or other events
            you'd be interested in having CTC be a part of, we'd love to hear
            them.
          </p>
        </div>
        <div>
          <div className={nonprofitStyles.location}>
            <h3>Los Angeles, CA</h3>
            <h3>
              <Clock format={'h:mm a'} ticking={true} timezone={'US/Pacific'} />
            </h3>
          </div>
          <ExtLink href="mailto:ctcusc@gmail.com">
            <div className={studentsStyles.mail}>ctcusc@gmail.com</div>
          </ExtLink>
          <br />
          <p>
            We're a registered student organization out of the University of
            Southern California Viterbi School of Engineering, advised by
            Professor Mark Redekopp.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
