import Image from 'next/image'
import Roles from '../components/roles'
import ExtLink from '../components/ext-link'
import Header from '../components/header'
import Accordion from '../components/accordion'
import Footer from '../components/footer'
import 'react-multi-carousel/lib/styles.css'
import studentsStyles from '../styles/students.module.css'
import sharedStyles from '../styles/shared.module.css'
import { motion } from 'framer-motion'
import members from '../../public/members-sitting.jpg'
import painting from '../../public/painting.jpg'
import rocks from '../../public/rocks.png'
import snow from '../../public/snow-retreat.jpg'
import restaurant from '../../public/restaurant.jpg'
import lifting from '../../public/phys-photos.jpg'

const faq = [
  {
    question: 'How is this club set up?',
    answer:
      'We usually work with three nonprofits with a team each assigned to a specific project. Each team will have one Product Manager and Tech Lead, with a team of developers and designers accordingly sized.',
  },
  {
    question: 'What can I expect in terms of time commitment?',
    answer:
      "2-4 hours weekly. You'll attend weekly General Meetings and weekly team meetings, with tickets (tasks) for the project. We'll be working with the nonprofit from August to April.",
  },
  {
    question: 'How much experience do I need?',
    answer:
      'None! We look at potential—we encourage all freshman, transfers, anyone to apply. All new members go through onboarding and are paired with a mentor to work on the project tasks together.',
  },
  {
    question: 'Can I apply for more than one role?',
    answer:
      'No, but if you believe you have a good reason to apply to more than one, we can accept on a per-request basis.',
  },
  {
    question:
      "I'm not sure that I want to apply right now. Can I apply in the spring?",
    answer: 'No, sadly we will be midway through our projects by then.',
  },
  {
    question: "I'm not a CS major. Can I still apply?",
    answer:
      'Please! While many of our members are Computer Science or Design-related majors, we have no preferences for major, year, background, experience level. We review every application we get.',
  },
]

const Index = () => {
  return (
    <div className={sharedStyles.layout}>
      <Header titlePre="Students" />
      <div className={studentsStyles.grid}>
        <div>
          <h1>Join us.</h1>
          <p>We're a group of students on a mission to use tech for good.</p>
          <p>
            Code the Change works with leaders at Nonprofits working tirelessly
            to drive social change in their specific domain.
          </p>
          <p>
            They are the experts in the understanding of the social issue and
            our organization leads the efforts in creating technology to help
            solve those issues.
          </p>
          <div className={studentsStyles.buttons}>
            <ExtLink href="https://forms.gle/pbtxcShKGbjiQYpe7">
              <motion.div
                whileHover={{
                  x: 12,
                  transition: { duration: 0.125 },
                }}
                whileTap={{ scale: 0.95 }}
                className={studentsStyles.primarybutton}
              >
                Apply Now →
              </motion.div>
            </ExtLink>
          </div>
        </div>
        <Image
          className={studentsStyles.photo}
          src={members}
          priority
          quality="50"
          alt="4 members smiling"
          placeholder="blur"
        />
      </div>
      <Roles />
      <div className={studentsStyles.photogrid}>
        <div className={studentsStyles.photo}>
          <Image
            src={rocks}
            alt="Team at retreat"
            quality="100"
            priority
            placeholder="blur"
          />
        </div>
        <Image
          src={restaurant}
          alt="CTC Eating Dinner"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={lifting}
          alt="Team Photo lifting one member up"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={painting}
          alt="Team members painting at Virtual Retreat"
          quality="100"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={snow}
          alt="Prank around snow area in retreat"
          quality="50"
          priority
          placeholder="blur"
        />
      </div>
      <h2>Questions</h2>
      <div className={studentsStyles.faq}>
        {faq.map(({ question, answer }) => {
          return <Accordion question={question} answer={answer} />
        })}
      </div>
      <h2>Diversity and Inclusion</h2>
      <h4 className={studentsStyles.inclusion}>
        Code the Change is dedicated to recruiting members as diverse as the
        communities it serves. It is a necessity to have different perspectives
        when building for Nonprofits tackling so many different problems.
      </h4>
      <Footer />
    </div>
  )
}

export default Index
