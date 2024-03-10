import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Container>
      <Row>

        <Col className="my-4 banner__main--section" md="8">
          <img
            className="img-fluid banner__img"
            src="image/banner.png"
            alt="banner"
          />
        </Col>

        <Col md="4">
          <div className="banner__right--section shadow-sm rounded px-3 py-2 mt-4">
            <h3 className="">Products Category</h3>
            <ul className="banner__rightList">
              <li>Electronic</li>
              <li>Clo0thing</li>
              <li>Health & Beauty</li>
              <li>Watches, Bags, Jewellery</li>
              <li>Mother & Baby</li>
              <li>Groceries</li>
              <li>Home & Lifestyle</li>
              <li>Sports & Outdoors</li>
              <li>Desktop</li>
              <li>laptop</li>
            </ul>
            <Button className="banner__btn" variant="primary">
              View Comparison
            </Button>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Banner;
