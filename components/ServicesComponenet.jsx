import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiLaptop } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
const ServicesComponenet = () => {
  return (
    <Container>
      <Row className="mt-2">

        <Col md="3">
          <div className="services__main--section">
            <div className="services__main--content shadow-sm rounded">
              <div className="servicer__icon">
                <CiLaptop />
              </div>
              <div className="mx-2 mt-2">
                <h3>BEST PRODUCT</h3>
                <p>YOUR BEST QUALITY PRODUCT</p>
              </div>
            </div>
          </div>
        </Col>

        <Col md="3">
          <div className="services__main--section">
            <div className="services__main--content shadow-sm rounded">
              <div className="servicer__icon">
                <MdMessage />
              </div>
              <div className="mx-2 mt-2">
                <h4>QUALITY PRODUCT</h4>
                <p>YOUR BEST QUALITY PRODUCT</p>
              </div>
            </div>
          </div>
        </Col>

        <Col md="3">
          <div className="services__main--section">
            <div className="services__main--content shadow-sm rounded">
              <div className="servicer__icon">
                <FaCartArrowDown />
              </div>
              <div className="mx-2 mt-2">
                <h4>FAST DELEVERY</h4>
                <p>YOUR BEST QUALITY DELEVERY</p>
              </div>
            </div>
          </div>
        </Col>

        <Col md="3">
          <div className="services__main--section">
            <div className="services__main--content shadow-sm rounded">
              <div className="servicer__icon">
                <CiLaptop />
              </div>
              <div className="mx-2 mt-2">
                <h4>24/7 SUPPORT</h4>
                <p>YOUR BEST QUALITY SUPPORT</p>
              </div>
            </div>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default ServicesComponenet;
