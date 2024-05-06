import './Navbar.css';
const Navbar = () => {
    return(
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <div className='navbarLeftText'>Newsify</div>
            </div>
        <div className='navbarRightContainer'>
            <div className='navbarLinks'>
                <div className='navbarHome'>Home</div>
                <div className='navbarAboutUs'>About us</div>
                <div className='navbarPricing'>Pricing</div>
                <div className='navbarDemo'>Demo</div>
            </div>
            <div className='navbarSearch'>
                <input className='search-input' placeholder='Search' ></input>
            </div>
            <div className='navbarRegisterBtn'>
                <button className='register-btn'>Register</button>
            </div>
        </div>
        </div>
    )
}
export default Navbar;