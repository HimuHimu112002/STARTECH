import {Card, Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <Container>
      <h1 className="text-center my-5 border-bottom border-dark border-opacity-25">HOT OFFER BRAND NEW PC</h1>
      <Row className="my-4">
        <Col md="3">
          <ProductCard title="BRAND NEW PC" des="Some quick example text to build on the card title and make up
          the bulk of the card's content." dis="NEW SAVE UP TO 40%"/>
        </Col>

        <Col md="3">
          <ProductCard title="BRAND NEW PC" des="Some quick example text to build on the card title and make up
          the bulk of the card's content." dis="NEW SAVE UP TO 40%"/>
        </Col>

        <Col md="3">
          <ProductCard title="BRAND NEW PC" des="Some quick example text to build on the card title and make up
          the bulk of the card's content." dis="NEW SAVE UP TO 40%"/>
        </Col>

        <Col md="3">
          <ProductCard title="BRAND NEW PC" des="Some quick example text to build on the card title and make up
          the bulk of the card's content." dis="NEW SAVE UP TO 40%"/>
        </Col>

        <Col md="3">
          <ProductCard title="BRAND NEW PC" des="Some quick example text to build on the card title and make up
          the bulk of the card's content." dis="NEW SAVE UP TO 40%"/>
        </Col>

        <Col md="3">
          <ProductCard title="BRAND NEW PC" des="Some quick example text to build on the card title and make up
          the bulk of the card's content." dis="NEW SAVE UP TO 40%"/>
        </Col>

        <Col md="3">
          <ProductCard title="BRAND NEW PC" des="Some quick example text to build on the card title and make up
          the bulk of the card's content." dis="NEW SAVE UP TO 40%"/>
        </Col>

        <Col md="3">
          <ProductCard title="BRAND NEW PC" des="Some quick example text to build on the card title and make up
          the bulk of the card's content." dis="NEW SAVE UP TO 40%"/>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Product;
