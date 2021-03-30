import Image from 'next/image'
import styles from '../styles/role.module.css'

const roles = [
  {
    rolename: 'Designer',
    picture: '/des-placeholder.png',
    overview:
      "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
    roledesc: [
      'Own the design for impactful features in the product.',
      'Work primarily with the Product Manager and Nonprofit client to conduct user research and identify nonprofit needs',
      'Collaborate with 1-2 other designers on your team to create UI prototypes, high-fidelity visuals, and flows for features',
      'Handoff to developers to ensure high-quality implementation. Your designs will be made into reality!',
    ],
    guide: [
      'Our design stack is almost purely on Figma. If you are unfamiliar, we have a robust onboarding sequence.',
      'The nature of designing for social good means that the work you do as a designer is focused on understanding our end users (the nonprofit or their target audience).',
      "Our organization (like the tech industry) is engineering-driven. We've recently doubled our design team and looking to invest more heavily in designers.",
      "Feedback processes are not quite built out. It is still a bit ad-hoc and based on the PM, but we're working to figure out better ways to improve our systems for growth.",
      "Due to the nature of our nonprofit's needs, it is still a bit variable which products have a strong need for design. This means you may end up on a team that may have more focus on technical implementation.",
    ],
  },
]

const Role = () => {
  const members = roles.map(
    ({ rolename, picture, overview, roledesc, guide }) => {
      return (
        <div className={styles.item}>
          <div>
            <Image src={picture} alt={rolename} width={100} height={100} />
            <h3 className={styles.title}>{rolename}</h3>
          </div>
          <div className={styles.text}>
            <b>Overview</b>
            <p>{overview}</p>
            <ul>
              <li>{roledesc[0]}</li>
              <li>{roledesc[0]}</li>
              <li>{roledesc[0]}</li>
            </ul>
          </div>
          <ul className={styles.navigation}>
            <li>——</li>
            <li>——</li>
            <li>——</li>
            <li>——</li>
          </ul>
        </div>
      )
    }
  )

  return (
    <div>
      <div className={styles.grid}>{members}</div>
    </div>
  )
}

export default Role
