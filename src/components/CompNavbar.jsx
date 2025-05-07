import { useState } from 'react'
import { navLinks } from '../data'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import './CompNavbar.css'

function CompNavbar() {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => setExpanded((prev) => !prev)
  const closeMenu = () => setExpanded(false)

  return (
    <Navbar expand="xl" className="bg-body-tertiary py-2" expanded={expanded}>
      <Container style={{ margin: '1rem 2rem' }} fluid>
        {/* Left: Logo and Title */}
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            className="logo-img"
            roundedCircle
          />
          <span className="title-text">
            <h4>தமிழ் வளர்ச்சிக் கழகம்</h4>
          </span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />

        {/* Nav Links and Social Icons */}
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-grow-1 justify-content-between align-items-center w-100">
            {/* Center Menu */}
            <Nav className="mx-auto d-flex gap-4">
              {navLinks.map(({ id, href, text }) => (
                <NavLink
                  to={href}
                  key={id}
                  className={({ isActive }) =>
                    `nav-link-custom ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu} // 👈 Close on click
                >
                  <h5 className="nav-txt">{text}</h5>
                </NavLink>
              ))}
            </Nav>

            {/* Right Social Icons */}
            <div className="d-none d-lg-flex align-items-center gap-3">
              <a
                href="https://facebook.com/tamilvalarchi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/tamil_valarchi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon youtube"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CompNavbar
