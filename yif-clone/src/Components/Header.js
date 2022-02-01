import React, { useState } from 'react';
import logo from '../images/logo.png'
import '../CSS/Header.css'

export const Header = () => {
    const [Navscroll, setNavscroll] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavscroll(true);
            console.log(window.scrollY)
        }
        else {
            setNavscroll(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <nav className={Navscroll ? 'Nav fixed-top active' : 'Nav fixed-top'}>
                <img src={logo} className='nav-img' ></img>
                <div className='outer-navbrand col-6'>
                    <a className='navbar-brand ' href='https://www.youthindiafoundation.com/about/'>About Us</a>
                    <a className='navbar-brand' href='https://www.youthindiafoundation.com/work/'>Our Work</a>
                    <a className='navbar-brand' href='https://www.youthindiafoundation.com/team/'>Our Team</a>
                    <a className='navbar-brand' href='https://www.events.youthindiafoundation.com/'>Our Events</a>
                </div>
                <div className='col-2'></div>
                <div className='right-btn col-3'>
                    <button className='the-btn'>Join Us</button>
                    <button className='the-btn'>Member Login</button>
                </div>

            </nav>
        </div>
    )
};
