import React from 'react'
import {Container,Row,Col, Accordion} from 'react-bootstrap';
import './faq.scss'



const Faq = () => {
  return (
    <div className='slide'>
      <h1 className='questions'>Frequently Asked Questions</h1>
      <Container className='contain'>
      <Row xs={1} md={2}>
        <Col>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='acc-body'>Why is it considered necessary to register Agreement for Sale?</Accordion.Header>
        <Accordion.Body className='acc-para'>
        The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='acc-body'>Do I need to pay stamp duty if the property is transferred or is a gift?</Accordion.Header>
        <Accordion.Body className='acc-para'>
       
Yes, stamp duty is generally applicable when transferring or gifting a property. The amount varies based on the property's value and location. It is a legal requirement to pay stamp duty on such transactions, and failure to do so may result in legal consequences. Always check local regulations for specific details.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='acc-body'>What are the documents a seller needs to have when contacting you?</Accordion.Header>
        <Accordion.Body className='acc-para'>
        When contacting us as a seller, ensure you have essential documents ready, such as property title deeds, government-issued identification, sale agreement, and any relevant permits. These documents facilitate a smooth transaction process.
       </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='acc-body'>What are the documents a buyer would need from me?</Accordion.Header>
        <Accordion.Body className='acc-para'>
        As a seller, prospective buyers typically require documents such as the property title deeds, survey reports, any relevant permits, and the sale agreement. Providing these documents helps instill confidence and facilitates a transparent and efficient property transaction.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Faq