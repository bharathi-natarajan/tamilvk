import { useState } from 'react'
import './Team.css'
import { teamMenuItems } from '../data'
import TeamCard from './TeamCard'
import { teamText } from '../data'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Team = () => {
  const [card, setCard] = useState(teamMenuItems[0].members)

  const handleClick = (id) => {
    const newItem = teamMenuItems.find((item) => item.id === id)
    setCard(newItem.members)
  }

  return (
    <section className="team">
      <div className="team-title">
        <h1>{teamText.title}</h1>
        <p>{teamText.content}</p>
      </div>
      <div className="menu-bar">
        <ul>
          {teamMenuItems.map(({ id, item }) => {
            return (
              <li key={id} onClick={() => handleClick(id)}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
      <TeamCard card={card} />
    </section>
  )
}
export default Team
