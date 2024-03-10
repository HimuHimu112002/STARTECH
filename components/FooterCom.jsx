import { Row,Container, Col } from "react-bootstrap"

const FooterCom = () => {
  return (
    <div className="py-5 bg-black text-white">
        <Container>
            <Row>
                <Col md="12" sm="6" lg="3">
                    <div>
                        <h2>DREAM SHOP</h2>
                        <p>A108 Adam Street
                        NY 535022, USA</p>
                        
                    </div> 
                </Col>

                <Col className="footer__list--items" md="12" sm="6" lg="3">
                    <h3>Useful Links</h3>
                    <ul>
                       <li>Home</li>
                       <li>Services</li>
                       <li>Terms of service</li>
                       <li>About</li>
                       <li>Privacy</li>
                    </ul>
                </Col>

                <Col className="footer__list--items" md="12" sm="6" lg="3">
                    <h3>Our Services</h3>
                    <ul>
                        <li>Electronics</li>
                        <li>Desktop</li>
                        <li>laptop</li>
                        <li>Mobile Phone</li>
                        <li>Graphic</li>
                    </ul>
                </Col>

                <Col md="12" sm="6" lg="3">
                    <h3>Contact Us</h3>
                    <p>Tamen quem nulla quae legam multos aute </p>
                    <h4>Phone: +1 5589 55488 55</h4>
                    <h4>Email: info@example.com</h4>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterCom