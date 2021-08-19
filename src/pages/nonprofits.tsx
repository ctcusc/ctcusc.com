import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Accordion from '../components/accordion'
import { motion } from 'framer-motion'
import Clock from 'react-live-clock'
import sharedStyles from '../styles/shared.module.css'
import nonprofitStyles from '../styles/nonprofits.module.css'
import banner from '../../public/greendot-team.jpg'
import panel from '../../public//demo-night.jpg'
import present from '../../public/present.jpg'
import usc from '../../public/usc.jpg'

const faq = [
  {
    question: 'What is the application timeline?',
    answer: 'We open up applications in May — August.',
  },
  {
    question: 'What does communication look like?',
    answer: 'Our expectation is biweekly meetings virtually with a Team lead.',
  },
  {
    question: 'What kinds of projects do you accept?',
    answer:
      "We'll work with you to scope out a technical solution to your problem. We've done web, mobile, data science in the past.",
  },
  {
    question:
      'What does the timeline of the project look like? Start and end dates?',
    answer:
      "September through April. While we've successfully completed all projects with our clients in the past, we cannot contractually obligate our members to do so.",
  },
  {
    question: 'What about maintenance?',
    answer:
      "We expect you to maintain the project after handoff. We'll work to make that painless.",
  },
]

export default function Nonprofits() {
  return (
    <div className={sharedStyles.layout}>
      <Header titlePre="Contact" />
      <h1>Partner with us.</h1>
      <div className={nonprofitStyles.banner}>
        <Image
          src={banner}
          alt="Greendot Schools Team in front of sign"
          quality="100"
          priority
          placeholder="blur"
        />
      </div>
      <h2>Let's achieve your goals — together.</h2>
      <div className={nonprofitStyles.info}>
        <div>
          <p>
            If you are a registered nonprofit with a clear understanding of your
            problem that can be solved with technology, let’s talk.
          </p>
          <p>
            We’ll work deeply with you for 9 months to help build out a solution
            within web development, data science, mobile apps, or backend
            system.
          </p>
          <p>
            Probono! We open up applications for Nonprofits in May and select
            the best fit for their needs and our bandwidth. Apply or send us an
            email with questions!
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
                Apply Now →
              </motion.div>
            </ExtLink>
          </div>
        </div>
        <div className={nonprofitStyles.faq}>
          {faq.map(({ question, answer }) => {
            return <Accordion question={question} answer={answer} />
          })}
        </div>
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
          <h3>Apply</h3>
          <p>
            We focus on Los Angeles Nonprofit organizations, however we do
            accept applications for NGO's outside the area depending on their
            experience with remote work.
          </p>
          <p>
            If you would like to apply for our next year of projects, we accept
            applications between May - August. Contact us to set up a meeting.
          </p>
          <p>
            Our members volunteer to serve the community in other ways as well.
            If you have opportunities to speak or contribute in other ways, we'd
            love them.
          </p>
        </div>
        <div>
          <div className={nonprofitStyles.location}>
            <h3>Los Angeles, CA</h3>
            <h3>
              <Clock format={'h:mm a'} ticking={true} timezone={'US/Pacific'} />
            </h3>
          </div>
          <p>ctcusc@gmail.com</p>
          <p>
            We're a registered student organization out of the University of
            Southern California Viterbi School of Engineering. Advised by
            Professor Mark Redekopp.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
