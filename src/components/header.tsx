import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import Logo from './svgs/logo'

export function debounce(func, wait, immediate) {
  var timeout
  return function () {
    var context = this,
      args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Students', page: '/students' },
  { label: 'Nonprofits', page: '/nonprofits' },
  { label: 'About', page: '/about' },
]

const ogImageUrl = '../../public/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [navVisible, setNavVisible] = useState(true)

  const handleScroll = debounce(
    () => {
      const currentScrollPos = window.pageYOffset

      setNavVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
      )

      setPrevScrollPos(currentScrollPos)
    },
    100,
    false
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, navVisible, handleScroll])

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
      <div className={`${styles.nav} ${navVisible ? '' : styles.navHidden}`}>
        <Link href="/" className={styles.left}>
          <Logo
            className={styles.logo}
            width={48}
            height={32}
            aria-label={title}
          />
          <span className={styles.name}>{title}</span>
        </Link>
        <ul>
          {navItems.map(({ label, page, link }) => (
            <li key={label}>
              {page ? (
                <Link
                  href={page}
                  className={pathname === page ? 'active' : undefined}
                >
                  {label}
                </Link>
              ) : (
                <ExtLink href={link}>{label}</ExtLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
