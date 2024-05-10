import './FreeTrial.css'
import React from 'react'
import search from './images/search-icon.png';
export default function FreeTrail() {
  return (
    <div className='freeTrailPageContainer'>
        <div className='freeTrailTitle'>Let`s Start Something Great</div>
        <div className='freeTrailSubTitle'>Sign up with your email adress to be informed about discounts and new recruits from all campaigns!</div>
        <div className='freeTrailInput'>
            <div className='freeTrailInputLeftContainer'>
            <div className='searchImage'>
                <img src= {search} alt='img'></img>
            </div>
            <div className='emailInput'>
                <input placeholder='Enter your email' className='email-input'></input>
            </div>
            </div>
            <div className='freeTrailInputRightContainer'>
            <div className='freeTrailBtn'>
                <button className='free-trail-btn'>Free trail</button>
            </div>
            </div>
        </div>
    </div>
  )
}
