import styles from '../styles/team.module.css'
import mems from './data/teammembers.json'

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
  const data = shuffleMembersOnPageLoad(mems)
  const members = data.map((data) => {
    return (
      <div className={styles.item}>
        <img className={styles.pfp} src={data.photo} />
        <h3>{data.name}</h3>
        <p>{data.role}</p>
        <a href={data.link}>About</a>
      </div>
    )
  })

  return (
    <div>
      <div className={styles.grid}> {members} </div>
    </div>
  )
}

export default Team
