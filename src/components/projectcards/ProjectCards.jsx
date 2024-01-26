import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { BsArrowRightCircle,BsArrowDownCircle } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { IoBedOutline,IoShareSocialSharp } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import {maincontent,hyderabad,coimbatore,bengaluru} from '../../data/data.jsx'
import {Card, Row,Col, } from 'react-bootstrap'
import './ProjectCards.scss'
const ProjectCards = () => {
  return (
    <div className='p-5 change'>
      <p className='text-center fs-1'>PROJECTS ACROSS SOUTH INDIA</p>
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 justify-content-center custom-tab   "
      
    >
      
      <Tab eventKey="home" title="CHENNAI">
      <p className='text-center mt-3'>Apartments | Villa | Plots</p>
         
       <Row className='center-row  '>
      {maincontent.map((item)=>{
       return(
         <Col xl={4 } key={item.id}  className='column'>
          <div className='boxes'>
            <Card className=' card mb-5  '>
              <Card.Img  className='photo' src={item.imgsrc}/>
              <Card.Title className='tittle'>{item.title}</Card.Title>
              <Card.Text>
              <div className='loc' > 
                  <span className='venue'><SlLocationPin/></span>
                  <span  className='location '>{item.place}</span>
                  
              </div>
              </Card.Text>
              <Card.Text >
              <div > 
                  <span className='room'><IoBedOutline/></span>
                  <span  className='space'>{item.bhk}</span>
                  
              </div>
                </Card.Text> 
                <Card.Text>
              <div className='end' > 
                  <span  className='amount'><HiOutlineCurrencyRupee/></span>
                  <span className='rupees'>{item.price}</span>
              </div>
              <div className='end'>
                <button className='view'>View More <BsArrowRightCircle/></button>
                <button className='down'>Bronchure <BsArrowDownCircle/></button>
              </div>
                </Card.Text> 
                <button className='share'>
                  <span className='sharp'><IoShareSocialSharp/></span>
                </button>           
            </Card>   
          </div>  
         </Col>
       )
      } 
      )}
     </Row>
      </Tab>
      <Tab eventKey="profile" title="COIMBATORE"  >
      <p className='text-center mt-3'>Apartments | Villa </p>
      <Row className='row '>
      {coimbatore.map((item)=>{
       return(
         <Col xl={4 } key={item.id} >
          <div className='boxes'>
            <Card className='mb-5'>
              <Card.Img  className='photo' src={item.imgsrc}/>
              <Card.Title className='tittle'>{item.title}</Card.Title>
              <Card.Text>
              <div className='ml-2' > 
                  <span className='venue'><SlLocationPin/></span>
                  <span  className='location'>{item.place}</span>
                  
              </div>
              </Card.Text>
              <Card.Text >
              <div > 
                  <span className='room'><IoBedOutline/></span>
                  <span  className='space'>{item.bhk}</span>
                  
              </div>
                </Card.Text> 
                <Card.Text>
              <div className='end' > 
                  <span  className='amount'><HiOutlineCurrencyRupee/></span>
                  <span className='rupees'>{item.price}</span>
              </div>

              <div className='end'>
                <button className='view'>View More <BsArrowRightCircle/></button>
                <button className='down'>Bronchure <BsArrowDownCircle/></button>
              </div>
                </Card.Text> 
                <button className='share'>
                  <span className='sharp'><IoShareSocialSharp/></span>
                </button>            
            </Card>   
          </div>  
         </Col>
       )
      } 
      )}
     </Row>
      </Tab>
      <Tab eventKey="longer-tab" title="BENGALURU" >
      <p className='text-center mt-3'>Apartments</p>
      <Row className='row '>
      {bengaluru.map((item)=>{
       return(
         <Col xl={4 } key={item.id} >
          <div className='boxes'>
            <Card className='mb-5'>
              <Card.Img  className='photo' src={item.imgsrc}/>
              <Card.Title className='tittle'>{item.title}</Card.Title>
              <Card.Text>
              <div className='ml-2' > 
                  <span className='venue'><SlLocationPin/></span>
                  <span  className='location'>{item.place}</span>
                  
              </div>
              </Card.Text>
              <Card.Text >
              <div > 
                  <span className='room'><IoBedOutline/></span>
                  <span  className='space'>{item.bhk}</span>
                  
              </div>
                </Card.Text> 
                <Card.Text>
              <div className='end' > 
                  <span  className='amount'><HiOutlineCurrencyRupee/></span>
                  <span className='rupees'>{item.price}</span>
              </div>
              <div className='end'>
                <button className='view'>View More <BsArrowRightCircle/></button>
                <button className='down'>Bronchure <BsArrowDownCircle/></button>
              </div>
                </Card.Text>
                <button className='share'>
                  <span className='sharp'><IoShareSocialSharp/></span>
                </button>             
            </Card>   
          </div>  
         </Col>
       )
      } 
      )}
     </Row>
      </Tab>
      <Tab eventKey="contact" title="HYDERABAD"   >
      <p className='text-center mt-3'>Villa</p>
      <Row className='row '>
      {hyderabad.map((item)=>{
       return(
         <Col xl={4 } key={item.id} >
          <div className='boxes'>
            <Card className='mb-5'>
              <Card.Img  className='photo' src={item.imgsrc}/>
              <Card.Title className='tittle'>{item.title}</Card.Title>
              <Card.Text>
              <div className='ml-2' > 
                  <span className='venue'><SlLocationPin/></span>
                  <span  className='location'>{item.place}</span>
                  
              </div>
              </Card.Text>
              <Card.Text >
              <div > 
                  <span className='room'><IoBedOutline/></span>
                  <span  className='space'>{item.bhk}</span>
                  
              </div>
                </Card.Text> 
                <Card.Text>
              <div className='end' > 
                  <span  className='amount'><HiOutlineCurrencyRupee/></span>
                  <span className='rupees'>{item.price}</span>
              </div>
              <div className='end'>
                <button className='view'>View More <BsArrowRightCircle/></button>
                <button className='down'>Bronchure <BsArrowDownCircle/></button>
              </div>
                </Card.Text> 
                <button className='share'>
                  <span className='sharp'><IoShareSocialSharp/></span>
                </button>            
            </Card>   
          </div>  
         </Col>
       )
      } 
      )}
     </Row>
      </Tab>
     
    </Tabs>
      
    </div>
  )
}

export default ProjectCards