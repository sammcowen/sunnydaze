import React from 'react';
import Me from '../../Img/face_co.png';

const AboutMe = () => {
  return (
    <section id='AboutMeSection'>
      <div className='photo'>
 <img src={Me} alt="samm cowen"/>
      </div>
        <h2 >Hello.<br/>
       <span>I am</span> Samm </h2>
        <p class ='sectionHeader'> <span>Full Stack </span>  Web Developer . B.A. in <span> Communications.</span>I love making <span>magic</span> with my code to create  <span>web responsive</span> designs.<br/>
        Strong <span>Organization</span> Skills.<span> Detail</span> Oriented. Looking to add <span>value</span> to a company with my <span>leadership</span> skills, <span>communication expertise</span>, and <span>desire to learn.</span>
        </p>
    </section>
    
  )
}

export default AboutMe