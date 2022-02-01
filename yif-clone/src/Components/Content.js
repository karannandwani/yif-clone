import React from 'react';
import '../CSS/Content.css'
import tn from '../images/1.svg'
import a from '../images/2.svg'
import b from '../images/3.svg'
import c from '../images/4.svg'
import d from '../images/5.svg'
import e from '../images/6.svg'
import f from '../images/7.svg'

export const Content = () => {
    return (
        <div>
            <div className='row'>
                <h1>OUR REACH IN INDIA</h1>
                <h4>Check all the states we're planned into</h4>
            </div>
            <div className='state-box row'>
                {/* <div className='col-2 col-md-0'></div> */}
                <div className='col-md-3 state-card' data-aos="fade-up" aos-delay="200">
                    <img src={tn}></img>
                </div>
                {/* <div className='col-2 col-md-0'></div> */}
                <div className='col-md-3 state-card' data-aos="fade-up" aos-delay="200">
                    <img src={a}></img>
                </div>
                {/* <div className='col-2 col-md-0'></div> */}
            </div>
            <div className='state-box row'>
                <div className='col-md-3 state-card' data-aos="fade-up" aos-delay="200">
                    <img src={b}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-md-3 state-card' data-aos="fade-up" aos-delay="200">
                    <img src={c}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-md-3 state-card' data-aos="fade-up" aos-delay="200">
                    <img src={d}></img>
                </div>
            </div>
            <div className='state-box row'>
            <div className='col-2'></div>
                <div className='col-md-3 state-card' data-aos="fade-up" aos-delay="200">
                    <img src={e}></img>
                </div>
                <div className='col-2'></div>
                <div className='col-md-3 state-card' data-aos="fade-up" aos-delay="200">
                    <img src={f}></img>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    )
};
