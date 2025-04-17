import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data'
import logo from '../images/Logo only.png'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
  }, [menuOpen])

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo-link">
          <div className="logo">
            <img src={logo} alt="TVK Logo" />
            <h2 className="logo-text">தமிழ் வளர்ச்சிக் கழகம்</h2>
          </div>
        </NavLink>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            {navLinks.map(({ id, href, text }) => (
              <li key={id}>
                <NavLink
                  to={href}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
