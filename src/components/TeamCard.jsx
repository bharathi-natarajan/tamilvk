const TeamCard = ({ card }) => {
  return (
    <section className="team">
      <div className="card-container">
        {card.map((card, index) => {
          return (
            <article key={index} className="card">
              <div className="img-container">
                <img src={card.img} alt={card.name} />
              </div>
              <div className="card-title">
                <h4>{card.name}</h4>
                <p>{card.title1}</p>
                <p>{card.title2}</p>
              </div>
            </article>
          )
        })}

        {/* {teamMenuItems.map((team) => {
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
        })} */}
      </div>
    </section>
  )
}
export default TeamCard
