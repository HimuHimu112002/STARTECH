import React from 'react'
import { Card} from 'react-bootstrap'

const ProductCard = (props) => {
  return (
    <>
      <Card className="product mt-5" style={{ width: "auto" }}>
        <Card.Img className="img-fluid" variant="top" src="image/pc.jpg" />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.des}
            </Card.Text>
        </Card.Body>
        <div className="product_feature">{props.dis}</div>
      </Card>
    </>
  )
}

export default ProductCard