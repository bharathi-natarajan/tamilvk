import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data'
import logo from '../images/Logo only.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo-link">
          <div className="logo">
            <img src={logo} alt="TVK Logo" />
            <h2 className="logo-text">தமிழ் வளர்ச்சிக் கழகம்</h2>
          </div>
        </NavLink>

        <div
          className={`nav-links ${menuOpen ? 'show-menu' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <ul>
            {navLinks.map(({ id, href, text }) => (
              <li key={id}>
                <NavLink to={href}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
