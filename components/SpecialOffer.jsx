import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SpecialOffer = () => {
  return (
    <div className='special__offer--section mb-4'>
        <Container>
            <Row>
                <Col className='text-center py-5'>
                    <h1 className='text-white special__offer--heading'>SPECIAL HOT OFFER FOR 3DAYS SAVE UP TO 60%</h1>
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi
                        magnam excepturi molestiae quibusdam quo natus. Nulla, commodi ad,
                        minima, dolorem perferendis officiis sequi neque beatae aut placeat
                        ab ipsam et error maxime nisi ea deleniti nihil? Itaque tempore
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SpecialOffer