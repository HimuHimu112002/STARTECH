import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { VscAccount } from "react-icons/vsc";
const TopMenu = () => {
  return (
    <div className="top__menu--Bg">
      <Container>
        <Row>
          <Col md="2">
            <img className="img-fluid mainLogo" src="image/mainLogo.png" />
          </Col>

          <Col className="m-auto" md="3">
            <Form className="d-flex input_fild">
              <Form.Control
                type="search"
                placeholder="Search Your product"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Col>
          
          <Col md="5">
            <div className="top__menu--rightContent text-white">
              <div>
                <h6 className="top__value">Offer</h6>
                <p className="top__value">Latest Offer</p>
              </div>
              <div>
                <h6 className="top__value">17 Deals</h6>
                <p className="top__value">Latest Deals</p>
              </div>
              <div className="top__rightOffer d-flex">
                <VscAccount className="top__icon mt-3" />
                <div className="mx-2">
                  <h6 className="top__value">Account</h6>
                  <p className="top__value">Register & Login</p>
                </div>
              </div>
              <Button className="top__btn" variant="primary">Desktop</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopMenu;
