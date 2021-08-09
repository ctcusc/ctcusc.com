import styles from '../styles/team.module.css'
import mems from './data/teammembers.json'
import ExtLink from './ext-link'

function shuffleMembersOnPageLoad(array) {
  let i = array.length - 1
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const Team = () => {
  const members = mems.map(({ photo, link, name, role }) => {
    return (
      <div className={styles.item}>
        <ExtLink href={link}>
          <img className={styles.pfp} src={photo} />
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </ExtLink>
      </div>
    )
  })

  return (
    <div>
      <div className={styles.grid}>{members}</div>
    </div>
  )
}

export default Team
