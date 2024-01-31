import bgimg from '../../assets/about bg.jpg' 
import {Container,Row,Col,Accordion} from 'react-bootstrap';
import client from '../../images/client.jpg'
import './aboutUs.scss'
const AboutUs = () => {
  return (
    <section  >
        
    <div id='about'>
    <img className='aboutBg' src={bgimg} />
   <div className='heading'>
     <h1>ABOUT US </h1>
   </div>
   </div>
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
    </div>
    <section id='team' className='top '>
        <div >
        <h1> Meet Our Team</h1>
        <Container>
            <Row>
                <Col sm={4}>
                <img src={client} className='clientimg mx-2'/>
                </Col>
                <Col sm={4}>
                <img src={client} className='clientimg mx-2'/>
                </Col>
                <Col sm={4}>
                <img src={client} className='clientimg mx-2'/>
                </Col>
            </Row>
        </Container>
        </div>


    </section>

    {/* slider */}
    <div className='slide'>
      <h1 className='questions'>Frequently Asked Questions</h1>
      <Container className='contain'>
      <Row xs={1} md={2}>
        <Col>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='acc-body'>Why is it considered necessary to register Agreement for Sale?</Accordion.Header>
        <Accordion.Body className='acc-body'>
        The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='acc-body'>Why is it considered necessary to register Agreement for Sale?</Accordion.Header>
        <Accordion.Body className='acc-body'>
        The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='acc-body'>Why is it considered necessary to register Agreement for Sale?</Accordion.Header>
        <Accordion.Body className='acc-body'>
        The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='acc-body'>Why is it considered necessary to register Agreement for Sale?</Accordion.Header>
        <Accordion.Body className='acc-body'>
        The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
      </Row>
    </Container>
    </div>
   
</section>
  )
}

export default AboutUs