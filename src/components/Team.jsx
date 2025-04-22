import { useState } from 'react'
import './Team.css'
import { teamMenuItems } from '../data'
import TeamCard from './TeamCard'
import { teamText } from '../data'

const Team = () => {
  const [activeId, setActiveId] = useState(teamMenuItems[0].id)
  const card = teamMenuItems.find((item) => item.id === activeId).members

  return (
    <section className="team-section-comp">
      <div className="team-content-comp">
        <div className="team-section-title">
          <h2>{teamText.title}</h2>
          <p>{teamText.content}</p>
        </div>

        <div className="team-menu">
          <ul>
            {teamMenuItems.map(({ id, item }) => (
              <li
                key={id}
                className={id === activeId ? 'active' : ''}
                onClick={() => setActiveId(id)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="team-cards">
          <TeamCard card={card} />
        </div>
      </div>
    </section>
  )
}

export default Team

// import { useState } from 'react'
// import './Team.css'
// import { teamMenuItems } from '../data'
// import TeamCard from './TeamCard'
// import { teamText } from '../data'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'

// const Team = () => {
//   const [card, setCard] = useState(teamMenuItems[0].members)

//   const handleClick = (id) => {
//     const newItem = teamMenuItems.find((item) => item.id === id)
//     setCard(newItem.members)
//   }

//   return (
//     <section className="team-section">
//       <div className="team-section-title">
//         <h1>{teamText.title}</h1>
//         <p>{teamText.content}</p>
//       </div>
//       <div className="menu-bar">
//         <ul>
//           {teamMenuItems.map(({ id, item }) => {
//             return (
//               <li key={id} onClick={() => handleClick(id)}>
//                 {item}
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//       <TeamCard card={card} />
//     </section>
//   )
// }
// export default Team
