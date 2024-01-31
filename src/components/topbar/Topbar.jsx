import React from 'react'
import './topbar.scss'
import logoImg from '../../assets/logoImg.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Topbar = () => {
  return (
    <Navbar  >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logoImg}/>
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" navs me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action3">Testimonials</Nav.Link>
            <Nav.Link href="#" >Partner with Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button  className='enquire'>ENQUIRE</Button>
      </Container>
    </Navbar>
  )
}

export default Topbar