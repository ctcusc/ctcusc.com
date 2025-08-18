import { useState } from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import { motion, AnimateSharedLayout } from 'framer-motion'
import 'react-multi-carousel/lib/styles.css'
import rolesStyles from '../styles/roles.module.css'
import sharedStyles from '../styles/shared.module.css'
import ccShowcase from '../../public/projects/cc-showcase.png'
import gsfShowcase from '../../public/projects/gsf-showcase.png'
import icvShowcase from '../../public/projects/icv-showcase.png'

const single = {
  single: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
  },
}

// Object that stores information for projects from LAST YEAR
const pastProjects = [
  {
    name: 'Climate Cents',
    desc:
      "Code the Change built an interactive map of Blue Sky LA's climate projects to make local action visible, searchable, and engaging.",
    stack: 'Built with NextJS, CloudFlare, and Mapbox',
    img: ccShowcase,
  },
  {
    name: 'Inner City Visions',
    desc:
      'Code the Change built a mobile crisis-management tool to prevent and interrupt the exploitation of families and high-risk or sex-trafficked children.',
    stack: 'Built with React Native, Expo, and Supabase',
    img: icvShowcase,
  },
  {
    name: 'Garden School Foundation',
    desc:
      'Code the Change built a centralized volunteer management platform that streamlines signups, confirmation, and communication.',
    stack: 'Built with React, Express, and PostgreSQL',
    img: gsfShowcase,
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
          {pastProjects.map(({ name, img, desc, stack }) => {
            return (
              <div key={name} className={rolesStyles.panel}>
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
                  <p className={rolesStyles.subdesc}>{stack}</p>
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
