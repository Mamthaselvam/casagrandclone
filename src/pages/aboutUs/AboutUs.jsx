
import {Container,Row,Col} from 'react-bootstrap';

import bgimg from '../../assets/about bg.jpg' 
import './aboutUs.scss'

const AboutUs = () => {
  return (
    <section id='about'>
   <img className='aboutBg' src={bgimg} />
       <div className='heading'>
         <h1>ABOUT US </h1>
       
       </div>
       
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
    </section>
  )
}

export default AboutUs