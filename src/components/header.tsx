import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import Logo from './svgs/logo'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Projects', page: '/projects' },
  { label: 'About', page: '/about' },
  { label: 'Nonprofits', page: '/nonprofits' },
  { label: 'Students', page: '/students' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()
  const title = 'Code the Change'
  const desc =
    'Code the Change is a student-run organization at USC that develops technology for nonprofits pro-bono.'

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre ? `${titlePre} |` : ''} {title}
        </title>
        <meta name="description" content={desc} />
        <meta name="og:title" content="Code the Change" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@ctcusc" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <Link href="/">
        <a className={styles.left}>
          <Logo
            className={styles.logo}
            width={48}
            height={32}
            aria-label={title}
          />
          <span className={styles.name}>{title}</span>
        </a>
      </Link>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
