import Link from 'next/link'
import ExtLink from './ext-link'

import footerStyles from '../styles/footer.module.css'
import headerStyles from '../styles/header.module.css'

import Logo from './svgs/logo'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const links = [
  {
    title: 'Social',
    list: [
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
    ],
  },
  {
    title: 'General',
    list: [
      {
        alt: 'About',
        link: '/about',
      },
      {
        alt: 'Projects',
        link: '/projects',
      },
    ],
  },
  {
    title: 'Students',
    list: [
      {
        alt: 'Apply',
        link: '/students',
      },
    ],
  },
  {
    title: 'Nonprofits',
    list: [
      {
        alt: 'Apply',
        link: '/nonprofits',
      },
    ],
  },
]

export default function Footer() {
  return (
    <>
      <footer>
        <div className={footerStyles.colophon}>
          <Link href="/">
            <a className={headerStyles.left}>
              <Logo
                className={headerStyles.logo}
                width={48}
                height={32}
                aria-label="Code the Change"
              />
              <h4 className={headerStyles.name}>Code the Change</h4>
            </a>
          </Link>
        </div>
        <div className={footerStyles.links}>
          <div className={footerStyles.section}>
            {links.map(({ title, list }) => {
              {
                title
              }
              ;<ul>
                {list.map(({ alt, link }) => (
                  <li key={alt}>
                    <Link href={link}>
                      <a>{alt}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            })}
          </div>
        </div>
      </footer>
    </>
  )
}
