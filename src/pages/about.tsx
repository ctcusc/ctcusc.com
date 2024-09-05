import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Image from 'next/image'
import Team from '../components/team'
import Header from '../components/header'
import Footer from '../components/footer'
import aboutStyles from '../styles/about.module.css'
import sharedStyles from '../styles/shared.module.css'
import 'react-multi-carousel/lib/styles.css'
import great from '../../public/about/placement-left.svg'
import things from '../../public/about/right-placement.svg'
import { motion } from 'framer-motion'
import stickers from '../../public/about/stickers.png'
import NewTeam from '../components/newteam'

const Index = () => {
  return (
    <div className={sharedStyles.layout}>
      <Header titlePre="About" />
      <h1>About us.</h1>
      <div className={aboutStyles.explanation}>
        <p>Welcome!</p>
        <p>
          Code the Change started in 2015 by a group of civic-minded developers
          and designers looking to use their skills for service. Since then,
          we’ve partnered with over 30 nonprofits, working in solidarity with
          their communities to accomplish their missions.
        </p>
        <p>
          Code the Change tries to goes beyond the vague buzz of “tech for
          social good”. We realize that technology is never the full solution to
          a problem. We strive to proactively consider our potential negative
          impacts and operate with full transparency.
        </p>
        <p>
          We must do better than technosolutionism—we’re currently growing our
          organization to not just build projects, but engage our members in
          activism, foster discussions on campus, and promote service in our
          communities.
        </p>
      </div>
      <div className={aboutStyles.buttons}>
        <Link href="/students/">
          <motion.div
            whileHover={{
              y: 4,
              transition: { duration: 0.125 },
            }}
            whileTap={{ scale: 0.95 }}
            className={aboutStyles.primarybutton}
          >
            Apply now
          </motion.div>
        </Link>
      </div>
      <h1>Our Team.</h1>
      <p>
        We're a completely student-run organization. Meet our members below.
      </p>
      {/* <Team /> */}
      <NewTeam />

      <h1>After Graduation.</h1>
      <p>
        Our alumni have gone on to impact at greater scales in many different
        areas.
      </p>
      <div className={aboutStyles.alumni}>
        <Image
          src={great}
          alt="List of companies, fellowships, doctoral studies"
        />
        <Image
          src={things}
          alt="List of companies, fellowships, doctoral studies"
        />
      </div>

      <h1>Sponsors.</h1>
      <p>
        While Code the Change is lucky enough to receive some funding from the
        Viterbi School of Engineering, we are always on the lookout for
        corporate sponsors to truly enhance CTC's mission.
      </p>
      <h6>
        If you're interested in being a potential sponsor or partner, please{' '}
        <ExtLink href="mailto:ctcusc@gmail.com">
          reach out to hear about our benefits ↗.
        </ExtLink>
      </h6>
      <div className={aboutStyles.grid}>
        <p>
          Thank you to <a href="https://mule.to/p4rt">Sticker Mule</a> for
          providing our members with wonderful custom stickers.
        </p>
        <Image
          src={stickers}
          alt="Sticker Mule logo"
          quality="50"
          priority
          placeholder="blur"
        />
      </div>

      <h1>Learn more.</h1>
      <p>
        Code the Change is part of a{' '}
        <ExtLink href="https://codethechange.org/">
          nationwide nonprofit organization
        </ExtLink>{' '}
        with chapters at{' '}
        <ExtLink href="https://codethechange.stanford.edu/">
          Stanford University
        </ExtLink>
        ,{' '}
        <ExtLink href="http://codethechange.ca/">
          University of British Columbia
        </ExtLink>
        , and the{' '}
        <ExtLink href="https://codethechangeyyc.ca/">
          University of Calgary
        </ExtLink>
        .
      </p>

      <p>
        At USC, if we aren't the right fit, there are plenty of other student
        organizations to check out. For aspiring developers and designers such
        as
        <ExtLink href="http://caisplusplus.usc.edu/">CAIS++</ExtLink>,{' '}
        <ExtLink href="https://innodatusc.com/">Innovative Design</ExtLink>,{' '}
        <ExtLink href="https://www.scopeusc.com/">Scope</ExtLink>,{' '}
        <ExtLink href="https://usclavalab.org/">Lavalab</ExtLink>,{' '}
        <ExtLink href="https://athenahacks.com/">and AthenaHacks. </ExtLink>
      </p>
      <p>
        There are also many social impact focused groups such as{' '}
        <ExtLink href="http://www.usclaci.org/">LACI</ExtLink>,{' '}
        <ExtLink href="https://www.180degreesusc.org/">
          180 Degrees Consulting
        </ExtLink>
        , and{' '}
        <ExtLink href="https://communities.usc.edu/joint-educational-project-jep-service-learning/">
          JEP.{' '}
        </ExtLink>
        We'll also be hosting events and discussions on social impact which are
        all open to the public.
      </p>
      <p>
        If you're a client, there are also other great student organizations
        focused on social impact and technology, including Blueprint at UC
        Berkeley, University of Waterloo, UCLA, Hack4Impact at University of
        Pennsylvania, Cornell University, UIUC, Georgia Tech, and Code 4 Good at
        MIT.
      </p>
      <Footer />
    </div>
  )
}

export default Index
