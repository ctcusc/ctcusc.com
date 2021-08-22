import Header from '../components/header'
import Footer from '../components/footer'
import Roles from '../components/roles'
import Features from '../components/features'
import Link from 'next/link'
import landingStyles from '../styles/landing.module.css'
import sharedStyles from '../styles/shared.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import organization from '../../public/alumni_pic.jpg'
import Value from '../components/value'
import group from '../../public/group.jpg'
import retreat from '../../public/selfie-retreat.jpg'
import dinner from '../../public/ctc-dinner.jpg'
import candid from '../../public/candid.jpg'
import relax from '../../public/team-room.jpg'
import selfie from '../../public/selfie.jpg'

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
          <h1 className={landingStyles.title}>
            Students Building for <br />
            social change
          </h1>
          <h2 className={landingStyles.subtitle}>
            A community of PMs, developers, and designers at USC working on pro
            bono software for nonprofits
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
            <Link href="/students/">
              <motion.div
                whileHover={{
                  y: 4,
                  transition: { duration: 0.125 },
                }}
                whileTap={{ scale: 0.95 }}
                className={landingStyles.primarybutton}
              >
                Apply now
              </motion.div>
            </Link>
          </div>
        </div>
        <div className={landingStyles.photogrid}>
          <div className={landingStyles.photo}>
            <Image
              src={group}
              quality="100"
              priority
              alt="All Team Photo of Code the Change"
              placeholder="blur"
            />
          </div>
          <Image
            className={landingStyles.photo}
            src={retreat}
            quality="100"
            priority
            alt="Code the Change at Retreat"
            placeholder="blur"
          />
          <Image
            className={landingStyles.photo}
            src={dinner}
            quality="100"
            priority
            alt="Code the Change Dinner Photo"
            placeholder="blur"
          />
        </div>
        <div>
          <div>
            <h3 className={landingStyles.mission}>OUR MISSION</h3>
            <h2 className={landingStyles.statement}>
              Design and build sustainable software for nonprofit organizations
              to create social change.
            </h2>
          </div>
        </div>
        <div className={landingStyles.grid}>
          <Image
            className={landingStyles.photo}
            src={relax}
            alt="Members in team relaxing in room"
            quality="50"
            priority
            placeholder="blur"
          />
          <h4>
            Every year, we partner with several nonprofits in the Los Angeles
            area. Many nonprofits do not have the resources in the technology
            department; we build something free-of-charge to help them achieve
            their mission.
          </h4>
        </div>
        <div className={landingStyles.grid}>
          <h4>
            As an organization, we are structured in project teams, with
            Developers, Designers, Tech Lead, and a Product Manager to lead the
            team.
          </h4>
          <Image
            src={candid}
            alt="Gladeo team working on project together"
            quality="50"
            priority
            placeholder="blur"
          />
        </div>
        <div className={landingStyles.grid}>
          <Image
            className={landingStyles.photo}
            src={selfie}
            alt="Alumni Selfie of Org"
            quality="100"
            priority
            placeholder="blur"
          />
          <h4>
            We're committed to our impact, but we go beyond work — 'CTC' is a
            family. During an Alumni night last year, we had members all the way
            back from Code the Change's founding year (!) come in and hang out
            with us. We support each other beyond just our projects.
          </h4>
        </div>
        <Roles />
        <h2>Our Values</h2>
        <div className={landingStyles.values}>
          {values.map((value) => {
            return <Value {...value} />
          })}
        </div>
        <Features />
        <div className={landingStyles.buttons}>
          <Link href="/students/">
            <motion.div
              whileHover={{
                y: 4,
                transition: { duration: 0.125 },
              }}
              whileTap={{ scale: 0.95 }}
              className={landingStyles.primarybutton}
            >
              Apply now
            </motion.div>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  )
}
