import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import ExtLink from '../components/ext-link'
import Clock from 'react-live-clock'
import sharedStyles from '../styles/shared.module.css'
import nonprofitStyles from '../styles/nonprofits.module.css'

export default function Nonprofits() {
  return (
    <div className={sharedStyles.layout}>
      <Header titlePre="Contact" />
      <h1>Partner with us.</h1>
      <img
        src="/greendot-team.jpg"
        alt="Greendot Schools Team in front of sign"
      />
      <h2>Let's achieve your goals — together.</h2>
      <div className={nonprofitStyles.info}>
        <div>
          <p>
            If you are a registered nonprofit with a clear understanding of your
            problem that can be solved with technology, let’s talk.
          </p>
          <p>
            We’ll work deeply with you for 9 months to help build out a solution
            within web development, data science, mobile apps, or backend
            system.
          </p>
          <p>
            All for free! We open up applications for Nonprofits in May and
            select the best fit for their needs and our bandwidth. Apply or send
            us an email with questions!
          </p>
        </div>
        <div>
          <b>What is the application timeline?</b>
          <p>We open up applications in May.</p>
          <b>What is the application timeline?</b>
          <p>We open up applications in May.</p>
          <b>What is the application timeline?</b>
          <p>We open up applications in May.</p>
          <b>What is the application timeline?</b>
          <p>We open up applications in May.</p>
          <b>What is the application timeline?</b>
          <p>We open up applications in May.</p>
        </div>
      </div>
      <div className={nonprofitStyles.photogrid}>
        <img
          className={nonprofitStyles.c}
          src="/usc.jpg"
          alt="picture of University of Southern California Campus"
        />
        <img
          className={nonprofitStyles.a}
          src="/demo-night.jpg"
          alt="4 members smiling"
        />
        <img
          className={nonprofitStyles.b}
          src="/demo-night.jpg"
          alt="4 members smiling"
        />
      </div>
      <div className={nonprofitStyles.info}>
        <div>
          <h3>Apply</h3>
          <p>
            We focus on Los Angeles Nonprofit organizations, however we do
            accept applications for NGO's outside the area depending on their
            experience with remote work.
          </p>
          <p>
            If you would like to apply for our next year of projects, we accept
            applications between May - August. Contact us to set up a meeting.
          </p>
          <p>
            Our members volunteer to serve the community in other ways as well.
            If you have opportunities to speak or contribute in other ways, we'd
            love them.
          </p>
        </div>
        <div>
          <div className={nonprofitStyles.location}>
            <h3>Los Angeles, CA</h3>
            <h3>
              <Clock format={'h:mm a'} ticking={true} timezone={'US/Pacific'} />
            </h3>
          </div>
          <p>ctcusc@gmail.com</p>
          <p>
            We're a registered student organization out of the University of
            Southern California Viterbi School of Engineering. Advised by
            Professor Mark Redekopp.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
