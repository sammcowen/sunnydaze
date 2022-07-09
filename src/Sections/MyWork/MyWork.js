import React from 'react';
import './Mywork.css';

import Only1 from '../../Img/onlyfriends.jpg';
import Crypto1 from '../../Img/crypto.jpg';
import Note from '../../Img/notepad.jpg';
import Party1 from '../../Img/image.png';
import Weather from '../../Img/weather.jpg';
import Sched from '../../Img/scheduler.jpg';
import Github2 from '../../Img/github2.png';


const MyWork = () => {
  return (
    <section id='MyWorkSection'>
      <h2>My Work</h2>
      <div className='row row-cols-3 row-cols-md-3 g-4 works'>
        <div className='col'>
          <div className="card card-deck" style={{ width: '18rem' }}>
            <img src={Party1} className="card-img-top" alt="..." />
            <a href="https://stormy-thicket-02132.herokuapp.com/" target="_blank" rel="noreferrer"><h5 className="card-title">PartyHearty</h5></a>
            <h6 className="card-subtitle mb-2 ">MongoDB / Express / React / Node.js</h6>
            <p className="card-text">An application that allows users to plan social events with ease!</p>
            <a href="https://github.com/sammcowen/party_hearty" class="card-link"><img src={Github2} alt='github link' /></a>
          </div>
        </div>



        <div className='col'>
          <div className="card card-deck" style={{ width: '18rem' }}>
            <img src={Only1} className="card-img-top" alt="..." />
            <a href="https://only-friendz.herokuapp.com" target="_blank" rel="noreferrer"><h5 className="card-title">OnlyFriends</h5></a>
            <h6 className="card-subtitle mb-2 ">Handlebars / Express /Node / SQL </h6>
            <p className="card-text">Social Media site where users to create, read, update, and delete posts and images! </p>
            <a href="https://github.com/MCORTEZM1/Only_Friends" class="card-link"><img src={Github2} alt='github link' /></a>
          </div>
        </div>

        <div className='col'>
          <div className="card card-deck" style={{ width: '18rem' }}>
            <img src={Crypto1} className="card-img-top" alt="..." />
            <a href="https://themanwiththeplan-eng.github.io/cryptGo/" target="_blank" rel="noreferrer"><h5 className="card-title">CryptGo</h5></a>
            <h6 className="card-subtitle mb-2 ">HTML / JS / CSS / API</h6>
            <p className="card-text">A user friendly app that allows users to check the current value of crypto.

            </p>
            <a href="https://github.com/themanwiththeplan-eng/cryptGo" class="card-link"><img src={Github2} alt='github link' /></a>
          </div>
        </div>
        <div className='col'>
          <div className="card card-deck" style={{ width: '18rem' }}>
            <img src={Note} className="card-img-top" alt="..." />
            <a href="https://serene-temple-34885.herokuapp.com/" target="_blank" rel="noreferrer"><h5 className="card-title">NotePad</h5></a>
            <h6 className="card-subtitle mb-2 ">HTML/ CSS /Express.js/ Javascript</h6>
            <p className="card-text">NotePad is a user friendly app that allows users to read, write, edit and delete notes in a jiffy!</p>
            <a href="https://github.com/sammcowen/Notepad" class="card-link"><img src={Github2} alt='github link' /></a>
          </div>
        </div>
        <div className='col'>
          <div className="card card-deck" style={{ width: '18rem' }}>
            <img src={Weather} className="card-img-top" alt="..." />
            <a href="https://sammcowen.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><h5 className="card-title">Weather Dashboard</h5></a>
            <h6 className="card-subtitle mb-2 ">HTML/ CSS/ Jquery / API</h6>
            <p className="card-text">This app allows users to retrieve current weather stats of any US city in a polished and responsive web design</p>
            <a href="https://github.com/sammcowen/weather-dashboard" class="card-link"><img src={Github2} alt='github link' /></a>
          </div>
        </div>
        <div className='col'>
          <div className="card card-deck" style={{ width: '18rem' }}>
            <img src={Sched} className="card-img-top" alt="..." />
            <a href="https://sammcowen.github.io/work-day-scheduler/" target="_blank" rel="noreferrer"><h5 className="card-title">Workday Scheduler</h5></a>
            <h6 className="card-subtitle mb-2 ">HTML5/ CSS  /Javascript / Moment.js</h6>
            <p className="card-text"> An app that allows users to manage their workday schedules with a color coded interactive design & polished UI.</p>
            <a href="https://github.com/sammcowen/work-day-scheduler" class="card-link"><img src={Github2} alt='github link' /></a>
          </div>
        </div>

      </div>



    </section >

  )
}

export default MyWork

