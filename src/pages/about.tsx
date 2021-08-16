import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Image from 'next/image'
import Team from '../components/team'
import Header from '../components/header'
import Footer from '../components/footer'
import aboutStyles from '../styles/about.module.css'
import sharedStyles from '../styles/shared.module.css'
import great from '../../public/placement1.svg'
import things from '../../public/placement2.svg'
import { motion } from 'framer-motion'

const news = [
  {
    img: '/mark.png',
    link:
      'https://viterbischool.usc.edu/news/2020/08/student-group-spotlight-code-the-change-building-software-for-social-impact/',
  },
]

const Index = () => {
  return (
    <div className={sharedStyles.layout}>
      <Header titlePre="About" />
      <h1>About us.</h1>
      <div className={aboutStyles.explanation}>
        <p>Welcome!</p>
        <p>
          Code the Change started in 2015 by a group of civic-minded developers
          and designers looking to use their skills for service.
        </p>
        <p>
          Since then, we’ve partnered with around three nonprofits yearly,
          working in solidarity with the communities to help our partner
          organizations accomplish their missions.
        </p>
        <p>
          However, it goes beyond the vague buzzword of “tech for social good”.
          We as technologists have a responsibility to hold our community
          accountable for tech’s harms and its role in society.
        </p>
        <p>
          We must do better than technosolutionism—we’re currently growing our
          organization not just to build short term projects, but engage our
          members in activism, foster discussions on campus, and promote service
          in our communities.
        </p>
        <p>
          If this mission toward a better future resonates, we’d love to have
          you join us.
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
      <h1>Our Team</h1>
      <p>
        We're a completely student-run organization of ~40 members. Meet a few
        of our members:
      </p>
      <Team />

      <h1>After Graduation</h1>
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
      <h6>
        If you're a potential sponsor or partner, please{' '}
        <ExtLink href="mailto:ctcusc@gmail.com">reach out ↗.</ExtLink>
      </h6>
      <h1>Code the Change</h1>
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
        At USC, if CTC isn't the right fit, there are plenty of other student
        organizations to check out. There are many tech-focused groups for
        aspiring developers and designers such as CAIS++, AthenaHacks, Lavalab,
        Scope, Innovative Design, etc. There are also many social impact focused
        groups such as LACI, 180 degrees consulting, JEP, etc. We'll also be
        hosting events and discussions on social impact which are totally open
        to the public.
      </p>
      <p>
        If you don't go to USC, there are also other great student organizations
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
