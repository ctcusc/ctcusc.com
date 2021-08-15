import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Image from 'next/image'
import Team from '../components/team'
import Header from '../components/header'
import Footer from '../components/footer'
import Value from '../components/value'
import aboutStyles from '../styles/about.module.css'
import sharedStyles from '../styles/shared.module.css'
import group from '../../public/2017-CTC-Group.jpg'
import retreat from '../../public/gopro-retreat.jpg'
import dinner from '../../public/ctc-dinner.jpg'
import great from '../../public/placement1.svg'
import things from '../../public/placement2.svg'

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
      <div className={aboutStyles.photogrid}>
        <div className={aboutStyles.photo}>
          <Image
            src={group}
            alt="All Team Photo of Code the Change"
            placeholder="blur"
          />
        </div>
        <Image
          className={aboutStyles.photo}
          src={dinner}
          alt="Code the Change Dinner Photo"
          placeholder="blur"
        />
        <Image
          className={aboutStyles.photo}
          src={retreat}
          alt="Code the Change at Retreat"
          placeholder="blur"
        />
      </div>
      <div className={aboutStyles.mission}>
        <div>
          <h5>OUR MISSION</h5>
          <h3>
            Design and build sustainable software for nonprofit organizations to
            create social change.
          </h3>
        </div>
      </div>
      <h2>Our Values</h2>
      <div className={aboutStyles.values}>
        {values.map((value) => {
          return <Value {...value} />
        })}
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
