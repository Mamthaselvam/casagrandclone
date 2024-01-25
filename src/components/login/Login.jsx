import React from 'react'
import './login.scss'
import {Col,Row,Container,Dropdown} from 'react-bootstrap/';
const Login = () => {
  return (
    <div className=' m-5'>
      <h1 className='text-center'>A PLACE THAT YOU CALL HOME</h1>
      <Container className='dropdowns' >
      <Row>
        <Col className='pl-5'>
        <Dropdown >
      <Dropdown.Toggle variant='white' id="dropdown-basic" className='border-black'  >
        Location
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Chennai</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Bengaluru</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> Coimbatore</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> Hyderabad</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
        <Col>
        <Dropdown>
      <Dropdown.Toggle variant='white'  id="dropdown-basic" className='px-10 border-black'>
        Project Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Apartments</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Plots</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> Villas</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
        <Col>
        <Dropdown>
      <Dropdown.Toggle variant='white' id="dropdown-basic" className='border-black'>
      Project Status
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col><Dropdown>
      <Dropdown.Toggle variant='white' id="dropdown-basic" className='border-black'>
        Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1 BHK</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2 BHK</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3 BHK</Dropdown.Item>
        <Dropdown.Item href="#/action-4"> 4 BHK</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></Col>
        <Col>
        25Lacs - 8Cr</Col>
        <Col>
        <p>41 Projects found <span>Search</span></p>
        </Col>
      </Row>
       <div className='places'>
        <p>Most Searched Areas :<span>Omr | Tambaram | Mogappair | Pallikaranai</span> </p>
        <p>Closer to IT corridors in Sholinganallur :<span>FirstCity | Cloud9 | FlagShip </span> </p>
        <p>Ready to move in :<span>Cresendo | Supremus | Smart Town | Esquire</span> </p>
       </div>
    </Container>
    </div>
  )
}

export default Login