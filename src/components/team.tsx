import { useState } from 'react'
import teamStyles from '../styles/team.module.css'
import mems from './data/teammembers.json'
import ExtLink from './ext-link'
import ToggleGroup from './toggle'

function shuffleMembersOnPageLoad(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const values = ['Executive Board', 'General Members', 'Alumni']

type TeamProps = {
  type: string
}

const Team: React.FC<TeamProps> = ({ type }) => {
  const members = mems
    .filter((member) => member.type === type)
    .map(({ photo, link, name, role }) => {
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
  return <div className={teamStyles.grid}>{members}</div>
}

export default Team
