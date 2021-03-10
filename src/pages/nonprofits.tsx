import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

export default function Nonprofits() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <h1 style={{ marginTop: 0 }}>Apply</h1>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="placeholder img" height={60} />
        </div>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="placeholder img" height={60} />
        </div>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="placeholder img" height={60} />
        </div>
        <h2>Los Angeles</h2>
        <div className={contactStyles.name}>
          <ExtLink href="mailto:ctcusc@gmail.com">ctcusc@gmail.com</ExtLink>
        </div>
        <h2>
          Code the Change is based out of the University of Southern California.
          We focus on Los Angeles Nonprofit organizations, however we do accept
          applications for NGO's outside the area depending on their experience
          with remote work.
        </h2>
        <h2>
          If you would like to apply for our next year of projects, we accept
          applications between May - August. Contact us here.
        </h2>
        <h2>
          Code the Change is a nationwide organization with another chapter at
          Stanford University. There are also other great student organizations
          focused on social impact and technology, including Cal Blueprint (UC
          Berkeley), Hack4Impact (University of Pennsylvania), CS4Social Good
          (Brown University).
        </h2>
      </div>
    </>
  )
}
