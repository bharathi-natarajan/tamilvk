import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { heroText } from '../data'
import './CompHero.css'

function CompHero() {
  const slide1img = heroText[0].img
  const slide1txt = heroText[0].title
  const slide2img = heroText[1].img
  const slide2txt1 = heroText[1].title1
  const slide2txt2 = heroText[1].title2
  return (
    <Container fluid>
      <Carousel className="carousel">
        <Carousel.Item interval={3000} className="slide1">
          <div className="slide">
            <Image src={slide1img} className="slideimg" />
            <div className="caption1">
              <h3 className="slide1txt">{slide1txt}</h3>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000} className="slide2">
          <div className="slide">
            <Image src={slide2img} className="slideimg" />
          </div>
          <div className="caption2">
            <h3>{slide2txt1}</h3>
            <h3>{slide2txt2}</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default CompHero
