
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
           value
       </div>
    </section>
  )
}

export default AboutUs