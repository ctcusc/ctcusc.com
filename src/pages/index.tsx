import Header from '../components/header'
import Link from 'next/link'
import Features from '../components/features'
import landingStyles from '../styles/landing.module.css'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={landingStyles.hero} />
      <div className={sharedStyles.layout}>
        <p className={landingStyles.title}>
          Code <br />
          the Change
        </p>
        <h2 className={landingStyles.subtitle}>
          Welcome! We’re a group of USC Students dedicated to social impact
          through technology. We’ve helped build software solutions probono for
          Nonprofits to help achieve their mission.
        </h2>
        <div className={landingStyles.buttons}>
          <Link href="/nonprofits/">
            <a className={landingStyles.primarybutton}>Apply Now →</a>
          </Link>
          <Link href="/about/">
            <a className={landingStyles.secondarybutton}>About us</a>
          </Link>
        </div>
        <Features />

        <div className="explanation">
          <p>
            We’re a community of student technologists at USC connected by our
            passion for creating social good. Together, we design and build
            software to empower philanthropic organizations and help them
            alleviate various problems facing our world.
          </p>
        </div>
      </div>
    </>
  )
}
