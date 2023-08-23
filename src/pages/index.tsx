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
import developer from '../../public/dev-char.png'
import designer from '../../public/designer-char.png'
import techlead from '../../public/tl-char.png'
import pm from '../../public/pm-char.png'
import nonprofit1 from '../../public/nonprofit1.png'
import nonprofit2 from '../../public/nonprofit2.png'
import nonprofit3 from '../../public/nonprofit3.png'
import rfpvolunteering from '../../public/rfpvolunteering.jpeg'
import yash from '../../public/yash.jpg'

const values = [
  {
    number: 1,
    title: 'Impact',
    desc:
      'Do you care about creating a positive impact in your communities? How do you create impact through projects, volunteering, or advocacy?',
  },
  {
    number: 2,
    title: 'Community',
    desc:
      'How do you collaborate with others? We value diverse, new opinions and extend this respect beyond just our projects.',
  },
  {
    number: 3,
    title: 'Growth',
    desc:
      'Do you exhibit a desire for continuous growth? Onboarding, mentorship, and learning from others are important aspects of our organization.',
  },
  {
    number: 4,
    title: 'Initiative',
    desc:
      'Are you self-motivated to call out injustices and tackle compex issues? Our problem-solving requires active, passionate thinkers.',
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
            social impact
          </h1>
          <br />
          <h2 className={landingStyles.subtitle}>
            A community of technologists at USC creating products for
            nonprofits.
          </h2>
          <div className={landingStyles.buttons}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeiNY6bkKT6Io7U-dJd_2pXPKK8XuMawDabw41HhLh1xuNbwg/viewform?usp=sf_link"
              target="_blank"
            >
              <motion.div
                whileHover={{
                  y: 4,
                  transition: { duration: 0.125 },
                }}
                whileTap={{ scale: 0.95 }}
                className={landingStyles.primarybutton}
              >
                APPLY NOW
              </motion.div>
            </a>
          </div>
        </div>
        {/* <div className={landingStyles.photogrid}>
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
        </div> */}
        <div>
          <div>
            <h1>Our Purpose.</h1>
            {/* <h3 className={landingStyles.mission}>OUR PURPOSE:</h3> */}
            <h2 className={landingStyles.statement}>
              To promote social good by creating custom, sustainable software
              for nonprofit organizations.
            </h2>
          </div>
        </div>
        <div className={landingStyles.grid}>
          <Image
            className={landingStyles.photo}
            src={rfpvolunteering}
            alt="Volunteering event at The Ron Finley Project"
            quality="50"
            priority
            placeholder="blur"
          />
          <h4>
            Every year, we partner with three 501(c)(3) orginizations within the
            Los Angeles area. Many nonprofits are bound in their reach and scope
            of technology, so we're here to help free of charge so they can
            execute their mission to its fullest extent.
          </h4>
        </div>
        <div className={landingStyles.grid}>
          <h4>
            To accomplish this, CTC is structured into teams comprised of a
            project manager, technical lead, developers, and designers. The
            executive board manages recruitment, events, and fun.
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
            src={yash}
            alt="Alumni Selfie of Org"
            quality="100"
            priority
            placeholder="blur"
          />
          <h4>
            We're committed to our impact, but we go beyond work — Code the
            Change is a lifelong family. During our annual alumni nights, even
            members from our founding year come back. We support each other
            beyond just our projects.
          </h4>
        </div>
        {/* <h2>Last year's nonprofits</h2> */}
        {/* <div className={landingStyles.nonprofits}>
          <div className={landingStyles.nonprofit}>
            <Image
              src={nonprofit1}
              alt="ImagineLA"
              priority
              quality="100"
              placeholder="blur"
            />
          </div>
          <div className={landingStyles.nonprofit}>
            <Image
              src={nonprofit2}
              alt="Affordable South LA"
              priority
              quality="5"
              placeholder="blur"
            />
          </div>
          <div className={landingStyles.nonprofit}>
            <Image
              src={nonprofit3}
              alt="Humans Against Trafficking"
              priority
              quality="100"
              placeholder="blur"
            />
          </div>
        </div> */}
        <h2>Our Values.</h2>
        <div className={landingStyles.values}>
          {values.map((value) => {
            return <Value {...value} />
          })}
        </div>
        <h2 />
        <h2>Get to Know us.</h2>
        <p>
          If you'd like to learn more about what type of projects we do, what
          being a member includes, and what the application process looks like,
          we're participating in a number of student meet & greet events:
        </p>
        <ul>
          <li>
            <h4>
              USC Involvement Fair{' '}
              <p>Thursday, August 24th @ Alumni Park, 11am-2pm</p>
            </h4>
          </li>

          <li>
            <h4>
              Viterbi Get Connected! Fair{' '}
              <p>Tuesday, August 29th @ Viterbi Quad, 10am-2pm</p>
            </h4>
          </li>
          <li>
            <h4>
              Code the Change Info Session{' '}
              <p>
                Wednesday, August 30th @{' '}
                <a
                  href="https://usc.zoom.us/j/98152114430?pwd=VmVUdWMzTW9NeW1WcVpaZ05jZEZiZz09"
                  target="_blank"
                >
                  Zoom
                </a>{' '}
                & ZHS 159, 7pm-8:30pm
              </p>
            </h4>
          </li>
        </ul>
        {/* <h2>We're Recruiting For:</h2>
        <div className={landingStyles.roles}>
          <div className={landingStyles.role}>
            <Image
              src={developer}
              alt="Developer"
              priority
              quality="100"
              placeholder="blur"
            />
            <h3>Developers</h3>
          </div>
          <div className={landingStyles.role}>
            <Image
              src={designer}
              alt="Designer"
              priority
              quality="5"
              placeholder="blur"
            />
            <h3>Designers</h3>
          </div>
          <div className={landingStyles.role}>
            <Image
              src={pm}
              alt="Product Manager"
              priority
              quality="100"
              placeholder="blur"
            />
            <h3>Project Managers</h3>
          </div>
        </div>
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
              Join us
            </motion.div>
          </Link> */}
        {/* </div> */}
        <Footer />
      </div>
    </>
  )
}
