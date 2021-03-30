import Link from 'next/link'
import Image from 'next/image'
import Team from '../../components/team'
import Header from '../../components/header'
import Value from '../../components/value'
import aboutStyles from '../../styles/about.module.css'
import sharedStyles from '../../styles/shared.module.css'

const values = [
  {
    title: 'Dedication to Impact',
    desc:
      'CTC members care about creating a positive impact in their communities. This might be through active volunteering, advocacy, projects, or any other way to support the people around them.',
  },
  {
    title: 'Community',
    desc:
      'CTC is a close community brought together by a common goal. Throughout the year, mentorship grows and friendships are made. Members support each other on their project teams and even beyond CTC.',
  },
  {
    title: 'Growth',
    desc:
      'CTC members are dedicated to growing themselves and those around them. They are curious to learn new things and take initiative on their own.',
  },
  {
    title: 'Technical Growth',
    desc:
      'CTC members are interested in growing their technical skills across many facets, including development, design, and product. They work collaboratively with nonprofits and within their teams and also play active leadership roles.',
  },
]

const Index = () => {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
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
        <h2>Our Mission</h2>
        <p>
          Design and build sustainable software for nonprofit organizations that
          helps them scale their impact and ultimately create social change.
        </p>
        <p>
          Code the Change is a nationwide nonprofit organization with another
          chapter at Stanford University. There are also other great student
          organizations focused on social impact and technology, including
          Blueprint (UC Berkeley, University of Waterloo, UCLA), Hack4Impact
          (University of Pennsylvania, Cornell University, UIUC, Georgia Tech),
          and Code 4 Good (MIT).
        </p>
        <h2>Our Values</h2>
        <div className={aboutStyles.values}>
          {values.map((value) => {
            return <Value {...value} />
          })}
        </div>
        <h1>Our Team</h1>
        <p>
          We're completely student-run organization of ~40 members. Here are
          some of our members:
        </p>
        <Team />
      </div>
    </>
  )
}

export default Index
