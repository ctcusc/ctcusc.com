import Link from 'next/link'
import ExtLink from './ext-link'

import footerStyles from '../styles/footer.module.css'
import sharedStyles from '../styles/shared.module.css'

import Logo from './svgs/logo'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

export default function Footer() {
  return (
    <footer className={sharedStyles.fullbleedfooter}>
      <div className={footerStyles.colophon}>
        <b>© USC Code the Change</b>
        <div className={footerStyles.socials}>
          <ExtLink href="https://instagram.com/ctcusc">Instagram</ExtLink>
          <br className={footerStyles.space} />
          <ExtLink href="https://github.com/ctcusc">Github</ExtLink>
          <br className={footerStyles.space} />
          <ExtLink href="https://figma.com/codethechange">Figma</ExtLink>
        </div>
        <Link href="/">
          <a className={footerStyles.left}>
            <Logo
              className={footerStyles.logo}
              width={48}
              height={32}
              aria-label="Code the Change Logo"
            />
          </a>
        </Link>
      </div>
    </footer>
  )
}
