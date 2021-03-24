import styles from '../styles/team.module.css'
import data from './data/teammembers.json'

const Team = () => {
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
