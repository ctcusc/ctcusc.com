import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import pastprojectStyles from '../styles/pastprojects.module.css'
import sharedStyles from '../styles/shared.module.css'
import teamCarouselStyles from '../styles/teamCarousel.module.css'
import Carousel from 'react-multi-carousel'
import Team from './team'

const single = {
  single: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
  },
}

const labels = [
  {
    label: 'Executive Board',
    value: 'e-board',
  },
  {
    label: 'General Members',
    value: 'general',
  },
  {
    label: 'Alumni',
    value: 'alumni',
  },
]

const SegmentedControl = ({ goToSlide }) => {
  const [activeItem, setActiveitem] = useState(0)
  return (
    <AnimateSharedLayout>
      <ol className={pastprojectStyles.list}>
        {labels.map(({ label }, index) => {
          const isActive = index === activeItem
          return (
            <motion.li
              className={pastprojectStyles.item}
              whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
              key={label}
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
                <span className={pastprojectStyles.label}>{label}</span>
              </button>
            </motion.li>
          )
        })}
      </ol>
    </AnimateSharedLayout>
  )
}

const NewTeam = () => {
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
          className={teamCarouselStyles.carousel}
          itemClass={teamCarouselStyles.carouselItem}
        >
          {labels.map(({ label, value }) => {
            return (
              <div key={label} className={teamCarouselStyles.teamHolder}>
                Under maintenance. Check back later!
                {/* <Team type={value} /> */}
              </div>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default NewTeam
