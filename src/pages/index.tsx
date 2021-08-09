import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Features from '../components/features'
import landingStyles from '../styles/landing.module.css'
import sharedStyles from '../styles/shared.module.css'
import Image from 'next/image'
import organization from '../../public/alumni_pic.jpg'

export default function Index() {
  return (
    <>
      <div className={sharedStyles.layout}>
        <Header titlePre="Home" />
        <div className={landingStyles.hero}>
          <p className={landingStyles.title}>Code the Change</p>
          <h2 className={landingStyles.subtitle}>
            We’re a community of technologists at USC dedicated to social impact
            that builds products for nonprofit organizations in Los Angeles
          </h2>
          <div className={landingStyles.buttons}>
            <Link href="/nonprofits/">
              <a className={landingStyles.primarybutton}>Join our Team</a>
            </Link>
            <Link href="/about/">
              <a className={landingStyles.secondarybutton}>
                Apply as a Nonprofit
              </a>
            </Link>
          </div>
        </div>
        <Image
          src={organization}
          alt="Picture of our Alumni night"
          placeholder="blur"
        />
        <div className={landingStyles.explanation}>
          <p>Welcome!</p>
          <p>
            Code the Change started in 2015 by a group of civic-minded
            developers and designers looking to use their skills for service.
          </p>
          <p>
            Since then, we’ve partnered with around three nonprofits yearly,
            working in solidarity with the communities to help our partner
            organizations accomplish their missions.
          </p>
          <p>
            However, it goes beyond the vague buzzword of “tech for social
            good”. We as technologists have a responsibility to hold our
            community accountable for tech’s harms and its role in society.
          </p>
          <p>
            We must do better than technosolutionism—we’re currently growing our
            organization not just to build short term projects, but engage our
            members in activism, foster discussions on campus, and promote
            service in our communities.
          </p>
          <p>
            If this mission toward a better future resonates, we’d love to have
            you join us.
          </p>
          <p>
            <Link href="/students/">FAQ</Link>
            <br />
            <Link href="/students/">Apply</Link>
          </p>
        </div>
        <Features />

        <Footer />
      </div>
    </>
  )
}
