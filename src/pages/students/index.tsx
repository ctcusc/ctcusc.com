import Link from 'next/link'
import Header from '../../components/header'
import sharedStyles from '../../styles/shared.module.css'

const Index = () => {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
        <h1>Join us.</h1>
        <p>We're a group of students on a mission</p>
        <h2>Our roles</h2>
        <p>
          Code the Change works with leaders at Nonprofits working tirelessly to
          drive social change in their specific domain. They are the experts in
          the understanding of the social issue and our organization leads the
          efforts in creating technology to help solve those issues.
        </p>
        <h3>Developer</h3>
        <h3>Designer</h3>
        <p>
          Design at CTC is the bridge that helps ensure our solutions are
          well-designed to help our intended users. You'll focus on coming up
          with solutions to complex problems within user experience.
        </p>
        <h4>What you'll be doing</h4>
        <ul>
          <li>Own the design for impactful features in the product</li>
          <li>
            Work primarily with the Product Manager and Nonprofit client to
            conduct user research and identify nonprofit needs
          </li>
          <li>
            Collaborate with 1-2 other designers on your team to create UI
            prototypes, high-fidelity visuals, and flows for features
          </li>
          <li>
            Handoff to developers to ensure high-quality implementation. Your
            designs will be made into reality!
          </li>
        </ul>
        <h4>What you should look out for:</h4>
        <ul>
          <li>
            Our design stack is almost purely on Figma. If you are unfamiliar,
            we have a robust onboarding sequence.
          </li>
          <li>
            The nature of designing for social good means that the work you do
            as a designer is focused on understanding our end users (the
            nonprofit or their target audience).
          </li>
          <li>
            Our organization (like the tech industry) is engineering-driven.
            We've recently doubled our design team and looking to invest more
            heavily in designers.
          </li>
          <li>
            Feedback processes are not quite built out. It is still a bit ad-hoc
            and based on the PM, but we're working to figure out better ways to
            improve our systems for growth.
          </li>
          <li>
            Due to the nature of our nonprofit's needs, it is still a bit
            variable which products have a strong need for design. This means
            you may end up on a team that may have more focus on technical
            implementation.
          </li>
        </ul>
        <h3>Product Manager</h3>
        <h3>Tech Lead</h3>
      </div>
    </>
  )
}

export default Index
