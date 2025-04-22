import './TeamCard.css'

const TeamCard = ({ team, teamTitle }) => {
  console.log(teamTitle)

  return (
    <section className="team-container">
      <h3>{teamTitle}</h3>
      <section className="full-team">
        {team.map((member, index) => {
          return (
            <div className="card-container" key={index}>
              <div className="card-wrapper">
                <ul className="card-list">
                  <li className="card-item">
                    <img
                      className="card-image"
                      src={member.img}
                      alt={member.name}
                    />
                    <h4 className="card-title">{member.name}</h4>
                    <p className="badge">{member.title1}</p>
                    <p>{member.title2}</p>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </section>
    </section>
  )
}
export default TeamCard
