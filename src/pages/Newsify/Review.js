import React from 'react'
import './Review.css';
import leftArrow from './images/left-arrow.png'
import rightArrow from './images/right-arrow.png'
import reviewImg from './images/review.png';
import fieveStar from './images/5-star.png';
import doubleQuote from './images/double-quote.png'
export default function Review() {
  return (
    <div className='reviewPageContainer'>
        <div className='reviewTopContainer'>
            <div className='reviewTitle'>The <span style={{color: 'blue'}}>Cutomer is Hero</span> of Our Business</div>
            <div className='reviewArrow'>
                <img alt='img' src={leftArrow} />
                <img alt='img' src={rightArrow} />
            </div>
        </div>
        <div className='reviewSubTitle'>Newsify is your Email newsletter Webflow template we can build anything your dream.</div>
        <div className='reviewCardContainer'>
          <div className='reviewCardTitle'>I cant describe how great we feel using Newsify. It completely changed our workflow and the face we waste on truying to connect each other.Top Newsify!”</div>
          <div className='reviewPersonContainer'>
            <div className='reviewPersonImage'>
                <img className='review-person-img' alt='img' src={reviewImg}></img>
              </div>
              <div>
                <div className='reviewPersonName'>Esther Jackson</div>
                <div className='reviewStarImage'>
              </div>
                <img alt='img' src={fieveStar} className='start-img'/>
              </div>
            </div>
            <div className='doubleQuoteImage'>
              <img className='double-quote-img' src={doubleQuote} alt='img'></img>
            </div>
          </div>
        </div>
    
  )
}
