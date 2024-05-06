import './Registration.css'
const Registration = () => {
    return (
        <div className="registerSectionContainer">
            <div className="registerLeftContainer">
                <div className="registerIntroText">Hey,Everyone &#128075;</div>
                <div className="registerTitle">Newsify is the emailnews letter that works completely automated</div>
                <div className="registerSubTitle"> Track connections in real time. See who your community being lead by and find the most active</div>
                <div className="registerEmail">
                    <div className="email-inp">Your email address</div>
                </div>
                <div className="registerRegisterBtn">
                    <button className="register-btn">Register</button>
                </div>
            </div>
            <div className="registerRightContainer">
                <div className='userStatImage'>
                    <img alt='img' src='./images/user stat.png'/>
                </div>
            </div>
        </div>
    )
}
export default Registration;