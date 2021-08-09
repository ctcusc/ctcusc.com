import Link from 'next/link'
import ExtLink from './ext-link'

import footerStyles from '../styles/footer.module.css'
import headerStyles from '../styles/header.module.css'

import Logo from './svgs/logo'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

export default function Footer() {
  return (
    <footer className={footerStyles.grid}>
      <div className={footerStyles.colophon}>
        <Link href="/">
          <a className={footerStyles.left}>
            <Logo
              className={footerStyles.logo}
              width={48}
              height={32}
              aria-label="Code the Change Logo"
            />
            <span className={footerStyles.name}>Code the Change</span>
          </a>
        </Link>
        <div></div>
        <ExtLink href="https://instagram.com/ctcusc">Instagram</ExtLink>
        <ExtLink href="https://github.com/ctcusc">Github</ExtLink>
        <ExtLink href="https://figma.com/codethechange">Figma</ExtLink>
        <p>© USC Code the Change</p>
      </div>
      <div className={footerStyles.section}>
        <Link href="/about">About</Link>
        <Link href="/about">Projects</Link>
        <Link href="/about">Team</Link>
        <Link href="/about">Sponsor</Link>
      </div>
      <div className={footerStyles.section}>
        <Link href="/students">Apply</Link>
        <Link href="/students">Process</Link>
        <Link href="/students">FAQ</Link>
        <Link href="/students">Resources</Link>
      </div>
      <div className={footerStyles.section}>
        <Link href="/nonprofits">Apply</Link>
        <Link href="/nonprofits">Process</Link>
        <Link href="/nonprofits">FAQ</Link>
        <Link href="/nonprofits">Resources</Link>
      </div>
    </footer>
  )
}
