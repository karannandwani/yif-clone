import React from 'react';
import back from '../images/Hero.jpg'
import kidpic from '../images/kidsround.png'
import '../CSS/Hero.css'

export const Hero = () => {


  return (
    <div className="Back" >
      <div className='row'>
        {/* { <img src={back} className='BI' /> } */}
        <div className='kids col-12 col-md-6 order-sm-2' data-aos="fade-left" data-aos-delay="200">
          <img src={kidpic}></img>
        </div>

        <div className="T col-12 col-md-6 order-sm-1" data-aos="fade-up" data-aos-delay="200">
          <h1 >Youth India Foundation</h1>
          <h4>A community for everyone to look beyond their own interests. Join us in our journey of a better and brighter tomorrow.</h4>
          <a >
            <button class="btn1"><b>Get Started</b></button>
          </a>
        </div>
      </div>

    </div>
  )
};
