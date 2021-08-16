import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import landingStyles from '../styles/landing.module.css'
import sharedStyles from '../styles/shared.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import organization from '../../public/alumni_pic.jpg'
import Value from '../components/value'
import group from '../../public/2017-CTC-Group.jpg'
import retreat from '../../public/gopro-retreat.jpg'
import dinner from '../../public/ctc-dinner.jpg'

const values = [
  {
    number: 1,
    title: 'Impact',
    desc:
      'Do you care about creating a positive impact in your communities? This might be through projects, active volunteering, or advocacy.',
  },
  {
    number: 2,
    title: 'Community',
    desc:
      'How do you collaborate with others? We value diverse, new opinions and extend this respect beyond our projects and into friendships.',
  },
  {
    number: 3,
    title: 'Growth',
    desc:
      'Do you exhibit a desire for continuous growth? Onboarding, mentorship, learning from others are huge parts of our organization.',
  },
  {
    number: 4,
    title: 'Initiative',
    desc:
      'Are you self-motivated to call out injustices and tackle new problems? CTC thrives under ambiguous "no-right-answer" challenges.',
  },
]

export default function Index() {
  return (
    <>
      <div className={sharedStyles.layout}>
        <Header titlePre="Home" />
        <div className={sharedStyles.fullbleedhero}>
          <p className={landingStyles.alert}>
            <div>
              Applications open 8/26. Get notified through the
              <Link href="/students/">
                <motion.div
                  whileHover={{
                    x: 2,
                    transition: { duration: 0.125 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={landingStyles.alertLink}
                >
                  interest form →
                </motion.div>
              </Link>
            </div>
          </p>
          <h1 className={landingStyles.title}>Code the Change</h1>
          <h2 className={landingStyles.subtitle}>
            We’re a community of technologists at USC dedicated to social impact
            that builds products for nonprofit organizations in Los Angeles
          </h2>
          <div className={landingStyles.buttons}>
            <Link href="/about/">
              <motion.div
                whileHover={{
                  y: 4,
                  transition: { duration: 0.125 },
                }}
                whileTap={{ scale: 0.95 }}
                className={landingStyles.primarybutton}
              >
                About us
              </motion.div>
            </Link>
          </div>
        </div>
        <div className={landingStyles.photogrid}>
          <div className={landingStyles.photo}>
            <Image
              src={group}
              alt="All Team Photo of Code the Change"
              placeholder="blur"
            />
          </div>
          <Image
            className={landingStyles.photo}
            src={dinner}
            alt="Code the Change Dinner Photo"
            placeholder="blur"
          />
          <Image
            className={landingStyles.photo}
            src={retreat}
            alt="Code the Change at Retreat"
            placeholder="blur"
          />
        </div>
        <div className={landingStyles.mission}>
          <div>
            <h5>OUR MISSION</h5>
            <h3>
              Design and build sustainable software for nonprofit organizations
              to create social change.
            </h3>
          </div>
        </div>
        <h6>
          Every year, we partner with several nonprofits in the Los Angeles
          area. Many nonprofits do not have the resources in the technology
          department; we build something free-of-charge to help them achieve
          their mission.
        </h6>
        <h6>
          As an organization, we are structured in project teams, with
          developers and designers as well as a Tech Lead and Product Manager to
          lead the team.
        </h6>
        <Image src={organization} alt="Alumni Night" placeholder="blur" />
        <h6>
          We're committed to our impact, but we go beyond work — 'CTC' is a
          family. During an Alumni night last year, we had members all the way
          back from Code the Change's founding year (!) come in and hang out
          with us. We support each other beyond just our projects.
        </h6>
        <h6>
          Want to learn more? <Link href="/students/">Join us</Link>
        </h6>
        <h2>Our Values</h2>
        <div className={landingStyles.values}>
          {values.map((value) => {
            return <Value {...value} />
          })}
        </div>
        <Features />
        <Footer />
      </div>
    </>
  )
}
