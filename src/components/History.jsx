import { NavLink } from 'react-router-dom'
import { historyText } from '../data'
import Founder from '../images/Avinashilingam.png'
import './History.css'

const History = () => {
  return (
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
  )
}
export default History
