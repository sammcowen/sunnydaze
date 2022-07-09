import React from 'react';
import LinkedIn from '../../Img/LinkedIn.png';
import Github from '../../Img/Github.png';
import Resume from '../../Img/resume.png';
import Email from '../../Img/email.png';
const ContactMe = () => {
  return (
    <section id='ContactMeSection'>
    <h2>Contact Me<br/>
    <span>Let's  Connect</span> !</h2>
    
    

    <div className='sectionHeader contactflex'>
    
                <a href="mailto:sammcowen@gmail.com" target= "_blank" rel="noopener noreferrer">
                  <img className ='resize' src={Email} alt='sammcowen@gmail.com'/>
                </a>
                <a href="https://github.com/sammcowen" target="_blank" rel='noreferrer'>
                  <img src={Github} alt="My Github"/>
                  </a>
                <a href="https://docs.google.com/document/d/11iTr-kVObOlJh18VSk42dfgS_OCw2Be5MYfm4HIKhec/edit?usp=sharing" target="_blank" rel='noreferrer'>
                  <img className="resize"src={Resume} alt="my resume pdf"/>
                </a>

                <a href="https://www.linkedin.com/in/sammcowen" target="_blank" rel='noreferrer'>
                  <img src={LinkedIn} alt='My LinkedIn'/></a>
                </div>
</section>

  )
}

export default ContactMe