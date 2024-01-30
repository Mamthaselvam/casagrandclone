import React from 'react'
import './topbar.scss'
import logoImg from '../../assets/logoImg.png'
import { Navbar } from 'react-bootstrap'
const Topbar = () => {
  return (
    <Navbar className='main'>
        <div>
          <img src={logoImg}/>
        </div>
        <div className='navs'>
           <p>Home</p>
           <p>About Us</p>
           <p>Testimonials</p>
           <p>Partner with us</p>
        </div>
       <button className='click'>
        Enquire
       </button>
    </Navbar>
  )
}

export default Topbar