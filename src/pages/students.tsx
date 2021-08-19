import Link from 'next/link'
import Image from 'next/image'
import ExtLink from '../components/ext-link'
import Header from '../components/header'
import Accordion from '../components/accordion'
import Footer from '../components/footer'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import studentsStyles from '../styles/students.module.css'
import sharedStyles from '../styles/shared.module.css'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import members from '../../public/members-sitting.jpg'
import painting from '../../public/painting.jpg'
import candid from '../../public/candid.jpg'
import snow from '../../public/snow-retreat.jpg'
import relax from '../../public/team-room.jpg'
import lifting from '../../public/phys-photos.jpg'
import developer from '../../public/dev-char.png'
import designer from '../../public/designer-char.png'
import techlead from '../../public/tl-char.png'
import pm from '../../public/pm-char.png'
import rpc from '../lib/notion/rpc'

const single = {
  single: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
  },
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const faq = [
  {
    question: 'How is this club set up?',
    answer:
      'We usually work with three nonprofits with a team each assigned to a specific project. Each team will have one Product Manager and Tech Lead, with a team of developers and designers accordingly sized.',
  },
  {
    question: 'What can I expect in terms of time commitment?',
    answer:
      "You'll attend weekly General Meetings and weekly team meetings, with tickets (tasks) for the project. We'll be working with the nonprofit from August to April.",
  },
  {
    question: 'How much experience do I need?',
    answer:
      'We look at potential—we encourage all freshman, transfers, anyone to apply. All new members go through onboarding and are paired with a mentor to work on the project tasks together.',
  },
  {
    question: 'Can I apply for more than one role?',
    answer:
      'If you believe you have a good reason to apply to more than one, we can accept on a per-request basis.',
  },
  {
    question:
      "I'm not sure that I want to apply right now. Can I apply in the spring?",
    answer: 'No, sadly we will be midway through our projects by then.',
  },
  {
    question: 'I am a ■■■ major. Can I still apply?',
    answer:
      'While many of our members are Computer Science or Design-related majors, we have no preferences for major, year, background, experience level. We review every application we get.',
  },
]

const roles = [
  {
    name: 'Developer',
    desc:
      'Developers at Code the Change build the product, collaborating with the team to ship great code efficiently.',
    skills: 'Full-stack, backend, frontend, mobile, data science',
    img: developer,
  },
  {
    name: 'Designer',
    desc:
      'Designers at Code the Change define the visual identity and how it’s expressed at each touchpoint of the customer.',
    skills:
      'User Research, Interaction Design, Visual Design, Design for Accessibility',
    img: designer,
  },
  {
    name: 'Tech Lead',
    desc:
      'Tech Leads at Code the Change design and architect the product to be built by the team to solve the pressing needs of the nonprofit.',
    skills: 'System design, Architecture, Engineering Management',
    img: techlead,
  },
  {
    name: 'Product Manager',
    desc:
      'Product Managers at Code the Change help ship great products and communicate between the nonprofits to the team.',
    skills: 'Product Strategy, Project Management, Nonprofit interaction',
    img: pm,
  },
]

const SegmentedControl = ({ goToSlide }) => {
  const [activeItem, setActiveitem] = useState(0)
  return (
    <AnimateSharedLayout>
      <ol className={studentsStyles.list}>
        {roles.map(({ name }, index) => {
          const isActive = index === activeItem
          return (
            <motion.li
              className={studentsStyles.item}
              whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
              key={name}
            >
              <button
                onClick={() => {
                  goToSlide(index)
                  setActiveitem(index)
                }}
                type="button"
                className={studentsStyles.button}
              >
                {isActive && (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className={studentsStyles.active}
                  />
                )}
                <span className={studentsStyles.label}>{name}</span>
              </button>
            </motion.li>
          )
        })}
      </ol>
    </AnimateSharedLayout>
  )
}

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
      <div className={sharedStyles.fullbleedroles}>
        <Carousel
          swipeable={false}
          draggable={false}
          arrows={false}
          responsive={single}
          renderButtonGroupOutside={true}
          customButtonGroup={<SegmentedControl goToSlide />}
          keyBoardControl={true}
          transitionDuration={0}
          focusOnSelect={true}
          className={studentsStyles.carousel}
        >
          {roles.map(({ name, img, desc, skills }) => {
            return (
              <div className={studentsStyles.panel}>
                <Image
                  className={studentsStyles.photo}
                  src={img}
                  alt={name}
                  priority
                  quality="5"
                  placeholder="blur"
                />
                <div>
                  <h4 className={studentsStyles.title}>{name}</h4>
                  <p className={studentsStyles.desc}>{desc}</p>
                  <p className={studentsStyles.subdesc}>{skills}</p>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
      <div className={studentsStyles.selector}></div>
      <div className={studentsStyles.photogrid}>
        <div className={studentsStyles.photo}>
          <Image
            src={candid}
            alt="Gladeo team working on project together"
            quality="50"
            priority
            placeholder="blur"
          />
        </div>
        <Image
          className={studentsStyles.photo}
          src={lifting}
          alt="Team Photo lifting one member up"
          quality="50"
          priority
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={painting}
          alt="Team members painting at Virtual Retreat"
          quality="50"
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
        <Image
          className={studentsStyles.photo}
          src={relax}
          alt="Members in team relaxing in room"
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
      <h6 className={studentsStyles.faq}>
        Code the Change is dedicated to recruiting members as diverse as the
        communities it serves. It is a necessity to have different perspectives
        when building for Nonprofits tackling so many different problems.
      </h6>
      <Footer />
    </div>
  )
}

export default Index
