import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Wordbank.css'

const Wordbank = () => {
  return (
    <Container fluid>
      <Row className="row">
        <Col md={5}>
          <div className="news">Current events go here</div>
        </Col>
        <Col md={4}>
          <div className="epedia">Encylopedia goes here</div>
        </Col>
        <Col md={3}>
          <div className="word-bank">Word bank goes here</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Wordbank
