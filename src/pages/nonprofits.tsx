import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import nonprofitStyles from '../styles/nonprofits.module.css'

export default function Nonprofits() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <h1>Partner with us.</h1>
        <div className={nonprofitStyles.photogrid}>
          <img
            className={nonprofitStyles.c}
            src="/usc.jpg"
            alt="picture of University of Southern California Campus"
          />
          <img
            className={nonprofitStyles.a}
            src="/greendot-team.jpg"
            alt="Greendot Schools Team in front of sign"
          />
          <img
            className={nonprofitStyles.b}
            src="/demo-night.jpg"
            alt="4 members smiling"
          />
        </div>
        <h3>Los Angeles</h3>
        <div className={nonprofitStyles.name}>
          <ExtLink href="mailto:ctcusc@gmail.com">ctcusc@gmail.com</ExtLink>
        </div>
        <p>
          Code the Change is based out of the University of Southern California.
          We focus on Los Angeles Nonprofit organizations, however we do accept
          applications for NGO's outside the area depending on their experience
          with remote work.
        </p>
        <p>
          If you would like to apply for our next year of projects, we accept
          applications between May - August. Contact us here.
        </p>
      </div>
    </>
  )
}
