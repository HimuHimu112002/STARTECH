import React from 'react'
import { Card, Col } from 'react-bootstrap'

const ProductBrand = () => {
  return (
    <>
      <Col md="3">
        <Card className="product" style={{ width: "auto" }}>
          <Card.Img className="img-fluid" variant="top" src="image/pc.jpg" />
          <Card.Body>
            <Card.Title>BRAND NEW PC</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="product_feature">NEW SAVE UP TO 40%</div>
        </Card>
      </Col>
    </>
  )
}

export default ProductBrand