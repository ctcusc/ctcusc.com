import ExtLink from './ext-link'

import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/codethechange',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/ctcusc',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/codethechange',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:ctcusc@gmail.com?subject=Nonprofit Client',
  },
]

export default function Footer() {
  return (
    <>
      <footer>
        <h2></h2>
        <span>For Nonprofits: Want to work with us?</span>
        <ExtLink href="/contact">
          <img
            src="https://vercel.com/button"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink>
        <span>For Students: Want to apply?</span>
        <ExtLink href="/contact">
          <img
            src="https://vercel.com/button"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink>
        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </footer>
    </>
  )
}
