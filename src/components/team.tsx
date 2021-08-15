import teamStyles from '../styles/team.module.css'
import mems from './data/teammembers.json'
import ExtLink from './ext-link'

function shuffleMembersOnPageLoad(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const Team = () => {
  const members = mems.map(({ photo, link, name, role }) => {
    return (
      <div className={teamStyles.item}>
        <ExtLink href={link}>
          <img className={teamStyles.pfp} src={photo} />
          <p className={teamStyles.name}>{name}</p>
          <p className={teamStyles.role}>{role}</p>
        </ExtLink>
      </div>
    )
  })
  return (
    <div>
      <div className={teamStyles.grid}>{members.splice(0, 12)}</div>
    </div>
  )
}

export default Team
