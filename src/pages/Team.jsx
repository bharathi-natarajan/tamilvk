import { useState } from 'react'
import { teamMenuItems } from '../data'
import TeamCard from './TeamCard'
import './Team.css'

const Team = () => {
  const [team, setTeam] = useState(teamMenuItems[0].members)
  const [activeId, setActiveId] = useState(teamMenuItems[0].id)
  const [teamTitle, setTeamTitle] = useState(teamMenuItems[0].item)

  const handleClick = (id) => {
    const selected = teamMenuItems.find((item) => item.id === id)
    setTeam(selected.members)
    setActiveId(id)
    setTeamTitle(selected.item)
  }

  return (
    <section className="team-section">
      <div className="team-title">
        <h3>நிருவாகக் குழு</h3>
      </div>
      <div className="team-menu">
        {teamMenuItems.map(({ id, item }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={id === activeId ? 'active' : ''}
          >
            {item}
          </button>
        ))}
      </div>
      <TeamCard team={team} teamTitle={teamTitle} />
    </section>
  )
}

export default Team

// import { useState } from 'react'
// import { teamMenuItems } from '../data'
// import TeamCard from './TeamCard'
// import './Team.css'

// const Team = () => {
//   const [team, setTeam] = useState(teamMenuItems[0].members)
//   const [teamTitle, setTeamTitle] = useState(teamMenuItems[0].item)

//   const handleClick = (id) => {
//     const newItem = teamMenuItems.find((item) => item.id === id)
//     setTeam(newItem.members)
//     setTeamTitle(newItem.item)
//   }

//   return (
//     <section className="team-section">
//       <div className="team-title">
//         <h3>நிர்வாகக் குழு</h3>
//       </div>
//       <div className="team-titles">
//         {teamMenuItems.map(({ id, item }) => {
//           return (
//             <div key={id} className="single-title">
//               <button onClick={() => handleClick(id)}>{item}</button>
//             </div>
//           )
//         })}
//       </div>
//       <TeamCard team={team} teamTitle={teamTitle} />
//     </section>
//   )
// }
// export default Team
