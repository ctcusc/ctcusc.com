import { useState } from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import { motion, AnimateSharedLayout } from 'framer-motion'
import rolesStyles from '../styles/roles.module.css'
import sharedStyles from '../styles/shared.module.css'
import developer from '../../public/dev-char.png'
import designer from '../../public/designer-char.png'
import techlead from '../../public/tl-char.png'

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

const pastProjects = [
  {
    name: 'RaiseAChild',
    desc:
      'Developers at Code the Change build the product, collaborating with the team to ship great code efficiently.',
    skills: 'Full-stack, backend, frontend, mobile, data science',
    img: developer,
  },
  {
    name: 'Voices Beyond Assault',
    desc:
      'Designers at Code the Change define the visual identity and how it’s expressed at each touchpoint of the customer.',
    skills:
      'User Research, Interaction Design, Visual Design, Design for Accessibility',
    img: designer,
  },
  {
    name: 'We Are G.A.M.E',
    desc:
      'Tech Leads at Code the Change design and architect the product to be built by the team to solve the pressing needs of the nonprofit.',
    skills: 'System design, Architecture, Engineering Management',
    img: techlead,
  },
]

const SegmentedControl = ({ goToSlide }) => {
  const [activeItem, setActiveitem] = useState(0)
  return (
    <AnimateSharedLayout>
      <ol className={rolesStyles.list}>
        {pastProjects.map(({ name }, index) => {
          const isActive = index === activeItem
          return (
            <motion.li
              className={rolesStyles.item}
              whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
              key={name}
            >
              <button
                onClick={() => {
                  goToSlide(index)
                  setActiveitem(index)
                }}
                type="button"
                className={rolesStyles.button}
              >
                {isActive && (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className={rolesStyles.active}
                  />
                )}
                <span className={rolesStyles.label}>{name}</span>
              </button>
            </motion.li>
          )
        })}
      </ol>
    </AnimateSharedLayout>
  )
}

const PastProjects = () => {
  return (
    <>
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
          className={rolesStyles.carousel}
        >
          {pastProjects.map(({ name, img, desc, skills }) => {
            return (
              <div className={rolesStyles.panel}>
                <Image
                  className={rolesStyles.photo}
                  src={img}
                  alt={name}
                  priority
                  quality="5"
                  placeholder="blur"
                />
                <div>
                  <h4 className={rolesStyles.title}>{name}</h4>
                  <p className={rolesStyles.desc}>{desc}</p>
                  <p className={rolesStyles.subdesc}>{skills}</p>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default PastProjects
