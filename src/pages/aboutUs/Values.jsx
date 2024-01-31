import React from 'react'
import './value.scss'
import {Container,Row,Col} from 'react-bootstrap';

const Values = () => {
  return (
    <div>
        {/* values part */}
       <div>
           <h1>Our Core Values</h1>
           <Container className='mt-5'>
           <Row xs={1} md={2}>
              <Col className='mt-5 '>
              <h2>Our Mission</h2>
              <p>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. </p>
              </Col>
              <Col  className='mt-5 '><h2>Our Vision</h2>
              <p>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. </p></Col>
              <Col className='mt-5'><h2>Our Values</h2>
              <p>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. </p></Col>
              <Col className='mt-5'><h2>Our Resources</h2>
              <p>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. </p></Col>
            </Row>
           </Container>
       </div>
       {/* picture part */}
       <div>
        picture
       </div>
    </div>
  )
}

export default Values