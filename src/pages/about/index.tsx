import Link from 'next/link'
import Image from 'next/image'
import Team from '../../components/team'
import Header from '../../components/header'
import sharedStyles from '../../styles/shared.module.css'

const Index = () => {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
        <h1>About us.</h1>
        <h2>Our Mission</h2>
        <p>
          design and build sustainable software for nonprofit organizations that
          helps them scale their impact and ultimately create social change.
        </p>
        <h2>Our Values</h2>
        <span>1</span>
        <h3>Dedication to Impact</h3>
        <p>
          CTC members care about creating a positive impact in their
          communities. This might be through active volunteering, advocacy,
          projects, or any other way to support the people around them.
        </p>
        <span>2</span>
        <h3>Community</h3>
        <p>
          CTC is a close community brought together by a common goal. Throughout
          the year, mentorship grows and friendships are made. Members support
          each other on their project teams and even beyond CTC.
        </p>
        <span>3</span>
        <h3>Intrinsic Motivation</h3>
        <p>
          CTC members are dedicated to growing themselves and those around them.
          They are curious to learn new things and take initiative on their own.
        </p>
        <span>4</span>
        <h3>Technical Growth</h3>
        <p>
          CTC members are interested in growing their technical skills across
          many facets, including development, design, and product. They work
          collaboratively with nonprofits and within their teams and also play
          active leadership roles.
        </p>
        <Team />
      </div>
    </>
  )
}

export default Index
