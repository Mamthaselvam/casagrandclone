import React from 'react'
import'./images.scss'
import bgimg from '../../assets/about bg.jpg' 

const Image = () => {
  return (
    <section id='about' >
        
        <img className='aboutBg' src={bgimg} />
       <div className='heading'>
         <h1>ABOUT US </h1>
       
       </div>
        
         
     
    </section>
  )
}

export default Image