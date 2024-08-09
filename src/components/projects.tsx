import { useState } from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import { motion, AnimateSharedLayout } from 'framer-motion'
import pastprojectStyles from '../styles/pastprojects.module.css'
import sharedStyles from '../styles/shared.module.css'
import racShowcase from '../../public/projects/rac-showcase.png'
import vbaShowcase from '../../public/projects/vba-showcase.png'
import wagShowcase from '../../public/projects/wag-showcase.png'

const single = {
  single: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
  },
}

// Object that stores information for projects from LAST YEAR
const pastProjects = [
  {
    name: 'RaiseAChild',
    desc:
      'Code the Change built a data visualization dashboard for RaiseAChild so that organization members could better view key metrics.',
    stack: 'Built with NextJS, FastAPI, and PostgreSQL',
    img: racShowcase,
  },
  {
    name: 'Voices Beyond Assault',
    desc:
      'Code the Change built a custom forum for Voices Beyond Assault where survivors of sexual assault could anonymously communicate, share stories, and uplift each other.',
    stack: 'Built with React, Express, and PostgreSQL',
    img: vbaShowcase,
  },
  {
    name: 'We Are G.A.M.E',
    desc:
      'Code the Change built an internal dashboard alongside an informational database for prospective college athletes to find mentors and potential colleges.',
    stack: 'Built with React, Express, and PostgreSQL',
    img: wagShowcase,
  },
]

const SegmentedControl = ({ goToSlide }) => {
  const [activeItem, setActiveitem] = useState(0)
  return (
    <AnimateSharedLayout>
      <ol className={pastprojectStyles.list}>
        {pastProjects.map(({ name }, index) => {
          const isActive = index === activeItem
          return (
            <motion.li
              className={pastprojectStyles.item}
              whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
              key={name}
            >
              <button
                onClick={() => {
                  goToSlide(index)
                  setActiveitem(index)
                }}
                type="button"
                className={pastprojectStyles.button}
              >
                {isActive && (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className={pastprojectStyles.active}
                  />
                )}
                <span className={pastprojectStyles.label}>{name}</span>
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
          className={pastprojectStyles.carousel}
        >
          {pastProjects.map(({ name, img, desc, stack }) => {
            return (
              <div key={name} className={pastprojectStyles.panel}>
                <Image
                  className={pastprojectStyles.photo}
                  src={img}
                  alt={name}
                  priority
                  quality="5"
                  placeholder="blur"
                />
                <div>
                  <h4 className={pastprojectStyles.title}>{name}</h4>
                  <p className={pastprojectStyles.desc}>{desc}</p>
                  <p className={pastprojectStyles.subdesc}>{stack}</p>
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
