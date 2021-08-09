import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Role from '../../components/role'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import studentsStyles from '../../styles/students.module.css'
import sharedStyles from '../../styles/shared.module.css'
import members from '../../../public/members-sitting.jpg'
import painting from '../../../public/painting.png'
import candid from '../../../public/candid.jpg'
import snow from '../../../public/snow-retreat.jpg'
import relax from '../../../public/team-room.jpg'
import lifting from '../../../public/phys-photos.jpg'

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

const CustomDot = ({ onClick, active }) => {
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <li
      className={
        active ? studentsStyles.sliderActive : studentsStyles.sliderInactive
      }
      onClick={() => onClick()}
    >
      <div className={studentsStyles.slider} />
    </li>
  )
}

const names = ['a', 'b', 'c', 'd']

const SegmentedControlButton = ({ index, onClick, active }) => {
  return (
    <button
      onClick={(e) => {
        onClick()
        e.preventDefault()
      }}
    >
      {roles[index].name}
    </button>
  )
}

const CustomButton = ({ onClick, active }) => {
  return <h1>Designer</h1>
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
    info: [
      {
        category: 'Role',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
      {
        category: 'Interview Tips',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
      {
        category: 'Requirements',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
    ],
  },
  {
    name: 'Designer',
    info: [
      {
        category: 'Role',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
      {
        category: 'Interview Tips',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
      {
        category: 'Requirements',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
    ],
  },
  {
    name: 'Tech Lead',
    info: [
      {
        category: 'Role',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
      {
        category: 'Interview Tips',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
      {
        category: 'Requirements',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
    ],
  },
  {
    name: 'Product Lead',
    info: [
      {
        category: 'Role',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
      {
        category: 'Interview Tips',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
      {
        category: 'Requirements',
        desc:
          "Design at CTC is the bridge that helps ensure our solutions are well-designed to help our intended users. You'll focus on coming up with solutions to complex problems within user experience.",
      },
    ],
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
            <Link href="/nonprofits/">
              <a className={studentsStyles.primarybutton}>Apply Now →</a>
            </Link>
          </div>
        </div>
        <Image
          className={studentsStyles.photo}
          src={members}
          alt="4 members smiling"
          placeholder="blur"
        />
      </div>
      <h2>Roles</h2>
      <div className={studentsStyles.roles}>
        <Carousel
          swipeable={false}
          draggable={false}
          arrows={false}
          showDots={true}
          customDot={
            <SegmentedControlButton className={studentsStyles.controlbutton} />
          }
          responsive={single}
          ssr
          infinite
          keyBoardControl={true}
          transitionDuration={0}
          containerClass="container"
          className={studentsStyles.carousel}
        >
          {roles.map(({ name, info }) => {
            return (
              <div className={studentsStyles.panel}>
                <div>
                  <h4 className={studentsStyles.choice}>{name}</h4>
                  <img src="mark.png"></img>
                </div>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  arrows={false}
                  showDots={true}
                  responsive={single}
                  ssr={true}
                  customDot={<CustomDot />}
                  keyBoardControl={true}
                  transitionDuration={0}
                  containerClass="container"
                  dotListClass="custom-dot-line-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {info.map(({ category, desc }) => {
                    return (
                      <div>
                        <h4 className={studentsStyles.choice}>{category}</h4>
                        <p>{desc}</p>
                      </div>
                    )
                  })}
                </Carousel>
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
            placeholder="blur"
          />
        </div>
        <Image
          className={studentsStyles.photo}
          src={lifting}
          alt="Team Photo lifting one member up"
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={painting}
          alt="Team members painting at Virtual Retreat"
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={snow}
          alt="Prank around snow area in retreat"
          placeholder="blur"
        />
        <Image
          className={studentsStyles.photo}
          src={relax}
          alt="Members in team relaxing in room"
          placeholder="blur"
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
      <Footer />
    </div>
  )
}

export default Index
