import Link from 'next/link'
import Header from '../../components/header'
import Role from '../../components/role'
import studentsStyles from '../../styles/students.module.css'
import sharedStyles from '../../styles/shared.module.css'
import rpc from '../../lib/notion/rpc'

const faq = [
  {
    question: 'How is this club set up?',
    answer:
      'We usually work with three nonprofits with three teams each assigned to a specific project. Each team will have one Product Manager and Tech Lead, with a team of developers and designers accordingly sized.',
  },
  {
    question: 'What can I expect in terms of time commitment?',
    answer:
      "You'll attend weekly General Meetings and weekly team meetings, with tickets (tasks) for the project. We'll be working with the nonprofit from August to April",
  },
  {
    question: 'How much experience do I need?',
    answer:
      'We encourage all freshman, transfers, or anyone new to technology to apply. All new members go through onboarding and are paired with a mentor to work on the project tasks together.',
  },
  {
    question: 'Can I apply for more than one role?',
    answer:
      'No. However, if you believe you have a good reason to apply to more than one, we can accept on a per-request basis.',
  },
  {
    question:
      "I'm not sure that I want to apply right now. Can I apply in the spring?",
    answer: 'No.',
  },
  {
    question: 'I am a ___ major. Can I still apply?',
    answer:
      'While many of our members are Computer Science or Design-related majors, we have no preferences for major, year, background, experience level. We review every application we get.',
  },
]

const roles = [
  {
    name: 'Developer',
  },
  {
    name: 'Designer',
  },
  {
    name: 'Tech Lead',
  },
  {
    name: 'Product Lead',
  },
]

const Index = () => {
  return (
    <>
      <Header titlePre="Students" />
      <div className={sharedStyles.layout}>
        <div className={studentsStyles.grid}>
          <div>
            <h1>Join us.</h1>
            <p>We're a group of students on a mission to use tech for good.</p>
            <p>
              Code the Change works with leaders at Nonprofits working
              tirelessly to drive social change in their specific domain.
            </p>
            <p>
              They are the experts in the understanding of the social issue and
              our organization leads the efforts in creating technology to help
              solve those issues.
            </p>
            <div className={studentsStyles.buttons}>
              <Link href="/nonprofits/">
                <a className={studentsStyles.primarybutton}>Apply Now →</a>
              </Link>
            </div>
          </div>
          <img
            className={studentsStyles.photo}
            src="/members-sitting.jpg"
            alt="4 members smiling"
          />
        </div>
        <h2>Roles</h2>
        <Role />
        <div className={studentsStyles.selector}>
          {roles.map(({ name }) => {
            return (
              <div>
                <h4 className={studentsStyles.choice}>{name}</h4>
              </div>
            )
          })}
        </div>
        <div className={studentsStyles.photogrid}>
          <img
            className={studentsStyles.photo}
            src="/candid.jpg"
            alt="Gladeo team working on project together"
          />
          <img
            className={studentsStyles.photo}
            src="/phys-photos.jpg"
            alt="Team Photo lifting one member up"
          />
          <img
            className={studentsStyles.photo}
            src="/sil-retreat.jpg"
            alt="Team members silouettes"
          />
          <img
            className={studentsStyles.photo}
            src="/snow-retreat.jpg"
            alt="Prank around snow area in retreat"
          />
          <img
            className={studentsStyles.photo}
            src="/team-room.jpg"
            alt="Members in team relaxing in room"
          />
        </div>
        <h2>Questions</h2>
        <div className={studentsStyles.questions}>
          {faq.map(({ question, answer }) => {
            return (
              <div>
                <b>{question}</b>
                <p>{answer}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Index
