import { NavLink } from 'react-router-dom'
import { heroText } from '../data'
import Valluvar from '../images/Valluvar_ClearBg.png'
import './Hero.css'

const Hero = () => {
  return (
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
  )
}
export default Hero
