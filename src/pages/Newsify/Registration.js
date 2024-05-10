import './Registration.css'
import userStats from './images/user stat.png';
import stripe from './images/stripe.png';
import  google from './images/google.png';
import samsung from './images/samsung.png';
import visa from './images/visa.png';
import spotify from './images/spotify.png';
import linkdin from './images/linkdin.png';
import zoom from './images/zoom.png';
export const Registration = () => {
    function removeSearch()  {
        console.log("working!");
    }
    return (
        <div className="registerSectionContainer">
            <div className="registerLeftContainer">
                <div className="registerIntroText">Hey,Everyone &#128075;</div>
                <div className="registerTitle">Newsify is the email <br></br> newsletter that works <br></br> completely automated</div>
                <div className="registerSubTitle"> Track connections in real time. See who your <br></br> community being lead by and find the most active</div>
                <div className='emailInput'>
                <div className="registerEmail">
                    <input className="email-inp" onClick={removeSearch} placeholder='Your email address'></input>
                </div>
                <div className="registerRegisterBtn">
                    <button className="register-btn">Register</button>
                </div>
                </div>
            </div>
            <div className="registerRightContainer">
                <div className='userStatImage'>
                    <img alt='img' src={userStats} className='search-img'/>
                </div>
            </div>
        </div>
    )
}
export const Brands = () => {
    return(
        <div className = "newsifyBrandContainer">
            <div className="newsifyBrandImagesConatiner">
                <div className="stripe">
                <img src = {stripe} alt = "img" />
                </div>
                <div className="google">
                <img src = {google} alt = "img" />
                </div>
                <div className="samsung">
                <img src = {samsung} alt = "img" />
                </div>
                <div className="visa">
                <img src = {visa} alt = "img" />
                </div>
                <div className="spotify">
                <img src = {spotify} alt = "img" />
                </div>
                <div className="linkdin">
                <img src = {linkdin} alt = "img" />
                </div>
                <div className="zoom">
                <img src = {zoom} alt = "img" />
                </div>

            </div>
        </div>
    )
} 
export default Registration;