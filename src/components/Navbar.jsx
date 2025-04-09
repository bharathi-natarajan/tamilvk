import { NavLink } from 'react-router-dom'
import { navLinks } from '../data'
import logo from '../images/Logo only.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo-link">
          <div className="logo">
            <img src={logo} alt="TVK Logo" />
            <h2 className="logo-text">தமிழ் வளர்ச்சிக் கழகம்</h2>
          </div>
        </NavLink>
        <div className="nav-links">
          <ul>
            {navLinks.map(({ id, href, text }) => {
              return (
                <li key={id}>
                  {/* <a href={href}>{text}</a> */}
                  <NavLink to={href}>{text}</NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
