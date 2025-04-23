import { NavLink } from 'react-router-dom'
import { navLinks } from '../data'
import './Contact.css'

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="contact-container">
        <div className="logo-block">
          <img src="/images/Logo.png" alt="தமிழ் வளர்ச்சிக் கழகம்" />
          <p>தமிழ் வளர்ச்சிக் கழகம்</p>
        </div>

        <div className="footer-links">
          <h4>கழகம்</h4>
          <ul>
            {navLinks.map(({ id, href, text }) => (
              <li key={id}>
                <NavLink to={href}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="quick-links">
          <h4>இணைப்பு</h4>
          <ul>
            <li>
              <NavLink to="/team">நிர்வாகக் குழு</NavLink>
            </li>
            <li>
              <NavLink to="/books">வெளியீடுகள்</NavLink>
            </li>
          </ul>
        </div>

        <div className="contact-info">
          <h4>தொடர்புக்கு</h4>
          <p>📞 +91 94446 51203</p>
          <p>📧 tamilvalarchikazhagam2024@gmail.com</p>
          <div className="address">
            <h5>முகவரி</h5>
            <p>தமிழ் வளர்ச்சிக் கழகம், மணிக்கூண்டு கட்டடம்,</p>
            <p>சென்னைப் பல்கலைக்கழக வளாகம்,</p>
            <p>சென்னை - 600 005</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 தமிழ் வளர்ச்சிக் கழகம். அனைத்து உரிமைகளும்
          பாதுகாக்கப்பட்டுள்ளன.
        </p>
      </div>
    </footer>
  )
}
export default Contact

// import { NavLink } from 'react-router-dom'
// import { navLinks } from '../data'

// const Contact = () => {
//   return (
//     <section className="contact-section">
//       <div className="contact-container">
//         <div>
//           <img src="/images/Logo.png" alt="" />
//         </div>
//         <div className="kazhagam">
//           <h4>கழகம்</h4>
//           <ul>
//             {navLinks.map(({ id, href, text }) => (
//               <li key={id}>
//                 <NavLink to={href}>{text}</NavLink>
//               </li>
//             ))}
//           </ul>
//           <div className="admin-team">
//             <h4>நிர்வாகக் குழு</h4>
//           </div>
//           <div className="publications">
//             <h4>வெளியீடுகள்</h4>
//           </div>
//         </div>
//         <div className="contact">
//           <h3>தொடர்புக்கு</h3>
//           <h4>+91 9444651203</h4>
//           <h4>tamilvalarchikazhagam2024@gmail.com</h4>
//           <div className="address">
//             <h4>முகவரி</h4>
//             <h5>தமிழ் வளர்ச்சிக் கழகம்</h5>
//             <h5>மணிக்கூண்டு கட்டடம்</h5>
//             <h5>சென்னைப் பல்கலைக்கழக வளாகம்</h5>
//             <h5>சென்னை - 600 005</h5>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// export default Contact
