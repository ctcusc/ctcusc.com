import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>Code the Change</h1>
        <h2>
          We're a student-run organization at USC that drives social impact
          through software projects for nonprofit organizations
        </h2>

        <Features />

        <div className="explanation">
          <p>
            We’re a community of student technologists at USC connected by our
            passion for creating social good. Together, we design and build
            software to empower philanthropic organizations and help them
            alleviate various problems facing our world.
          </p>
        </div>
      </div>
    </>
  )
}
