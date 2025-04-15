import { NavLink } from 'react-router-dom'
import { heroText, historyText, teamText, teamMenuItems } from '../data'
import Valluvar from '../images/Valluvar_ClearBg.png'
import Founder from '../images/Avinashilingam.png'
// import Chidambaram from '../images/Chidambaram.png'
import '../pages/Landing.css'

const Landing = () => {
  return (
    <>
      {/* Hero section */}
      <section className="hero-container">
        <div className="hero-text">
          <h1>{heroText.title}</h1>
          <p>{heroText.content}</p>
          <NavLink to="/about">
            <button className="landing-btn">மேலும் அறிய...</button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img src={Valluvar} alt="Valluvar Image" />
        </div>
      </section>

      {/* History section */}
      <section className="history">
        <div className="container">
          <div className="title">
            <h1>{historyText.title}</h1>
          </div>
          <div className="content">
            <div className="founder">
              <img src={Founder} alt="" />
            </div>
            <div className="text">
              <p>{historyText.content}</p>
              <NavLink to="/அமைப்பு">
                <button className="landing-btn" style={{ margin: 0 }}>
                  மேலும் அறிய...
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}

      <section className="team">
        <div className="team-title">
          <h1>{teamText.title}</h1>
          <p>{teamText.content}</p>
        </div>
        <div className="menu-bar">
          <ul>
            {teamMenuItems.map(({ id, item }) => {
              return (
                <li key={id} onClick={() => console.log(item)}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>

        {/* Team card section */}

        <div className="card-container">
          {teamMenuItems.map((team) => {
            return (
              team.members &&
              team.members.map((member, index) => (
                <article className="card" key={`${team.id}-${index}`}>
                  <div className="img-container">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="card-title">
                    <h4>{member.name}</h4>
                    <p>{member.title1}</p>
                    <p>{member.title2}</p>
                  </div>
                </article>
              ))
            )
          })}
        </div>
      </section>
    </>
  )
}
export default Landing
