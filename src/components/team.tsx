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
  const data = shuffleMembersOnPageLoad(mems).slice(0, 12)
  const members = data.map(({ photo, link, name, role }) => {
    return (
      <div className={styles.item}>
        <img className={styles.pfp} src={photo} />
        <ExtLink href={link}>
          <p className={styles.name}>{name}</p>
          <span className={styles.role}>{role}</span>
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
