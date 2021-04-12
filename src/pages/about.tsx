import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Image from 'next/image'
import Team from '../components/team'
import Header from '../components/header'
import Footer from '../components/footer'
import Value from '../components/value'
import aboutStyles from '../styles/about.module.css'
import sharedStyles from '../styles/shared.module.css'

const values = [
  {
    number: 1,
    title: 'Dedication to Impact',
    desc:
      'CTC members care about creating a positive impact in their communities. This might be through active volunteering, advocacy, projects, or any other way to support the people around them.',
  },
  {
    number: 2,
    title: 'Community',
    desc:
      'CTC is a close community brought together by a common goal. Throughout the year, mentorship grows and friendships are made. Members support each other on their project teams and even beyond CTC.',
  },
  {
    number: 3,
    title: 'Growth',
    desc:
      'CTC members are dedicated to growing themselves and those around them. They are curious to learn new things and take initiative on their own.',
  },
  {
    number: 4,
    title: 'Technical Growth',
    desc:
      'CTC members are interested in growing their technical skills across many facets, including development, design, and product. They work collaboratively with nonprofits and within their teams and also play active leadership roles.',
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
        <img
          className={aboutStyles.photo}
          src="/2017-CTC-Group.jpg"
          alt="Group Photo of Code the Change Medmind Team"
        />
        <img
          className={aboutStyles.photo}
          src="/gopro-retreat.jpg"
          alt="Group Photo of Code the Change All Team"
        />
        <img
          className={aboutStyles.photo}
          src="/members-sitting.jpg"
          alt="4 members smiling"
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
      <h1>Code the Change</h1>
      <p>
        Code the Change is a{' '}
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
        There are also other great student organizations focused on social
        impact and technology, including Blueprint (UC Berkeley, University of
        Waterloo, UCLA), Hack4Impact (University of Pennsylvania, Cornell
        University, UIUC, Georgia Tech), and Code 4 Good (MIT).
      </p>
      <h2>In the news</h2>
      <div className={aboutStyles.news}>
        {news.map((news) => {
          return (
            <ExtLink href={news.link}>
              <Image src={news.img} width={100} height={100} />
            </ExtLink>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Index
