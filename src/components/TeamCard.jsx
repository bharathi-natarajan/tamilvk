import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './TeamCard.css'

const TeamCard = ({ card }) => {
  return (
    <section className="team-card-scroll">
      <div className="scroll-wrapper">
        <div className="nav-arrow swiper-button-prev"></div>
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation, Autoplay]} // ⬅️ Add Autoplay here
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {card.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="img-container">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="card-title">
                  <h4>{member.name}</h4>
                  <p>{member.title1}</p>
                  <p>{member.title2}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="nav-arrow swiper-button-next"></div>
      </div>
    </section>
  )
}

export default TeamCard
