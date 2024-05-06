import './Homepage.css';
import Logo from 'file:///d%3A/internship/crypt-land/crypt-land/src/images/logo.png'
import statistic from 'file:///D:/internship/crypt-land/crypt-land/src/images/statistics.png'
import cambrian from 'file:///D:/internship/crypt-land/crypt-land/src/images/cambrian.png';
import aumni from 'file:///D:/internship/crypt-land/crypt-land/src/images/aumni.png'
import software from 'file:///D:/internship/crypt-land/crypt-land/src/images/software.png'
import seclock from 'file:///D:/internship/crypt-land/crypt-land/src/images/seclock.png';
import crompton from 'file:///D:/internship/crypt-land/crypt-land/src/images/crompton.png';
import commvault from 'file:///D:/internship/crypt-land/crypt-land/src/images/commvault.png';
import expense1 from 'file:///D:/internship/crypt-land/crypt-land/src/images/expense1.png';
import expense2 from 'file:///D:/internship/crypt-land/crypt-land/src/images/expense2.png';
import expense3 from 'file:///D:/internship/crypt-land/crypt-land/src/images/expense3.png';
import accounting from 'file:///D:/internship/crypt-land/crypt-land/src/images/accounting.png';
import founders1 from 'file:///D:/internship/crypt-land/crypt-land/src/images/founder1.png';
import founders2 from 'file:///D:/internship/crypt-land/crypt-land/src/images/founder2.png';
import founders3 from 'file:///D:/internship/crypt-land/crypt-land/src/images/founder3.png';
import upgradeImg from 'file:///D:/internship/crypt-land/crypt-land/src/images/upgrade_guy.png'
import review1 from 'file:///D:/internship/crypt-land/crypt-land/src/images/review1.png';
import review2 from 'file:///D:/internship/crypt-land/crypt-land/src/images/review3.png';
import review3 from 'file:///D:/internship/crypt-land/crypt-land/src/images/review5.png';
import review4 from 'file:///D:/internship/crypt-land/crypt-land/src/images/review2.png';
import review5 from 'file:///D:/internship/crypt-land/crypt-land/src/images/review4.png';
import review6 from 'file:///D:/internship/crypt-land/crypt-land/src/images/review6.png';
import youtube from 'file:///D:/internship/crypt-land/crypt-land/src/images/youtube.png';
import facebook from 'file:///D:/internship/crypt-land/crypt-land/src/images/facebook.png';
import linkdin from 'file:///D:/internship/crypt-land/crypt-land/src/images/linkdin.png';
import twitter from 'file:///D:/internship/crypt-land/crypt-land/src/images/twitter.png';
const obj =
[
    {
        title: 'Basic',
        price: '$0',
        features :
        [
            'Get a professional website designed according to your needs.',
            'Get a fully designed Website',
            'Webflow Development',
            'Limited Support',
        ],
        btn : 'Select Plan',
        index: 1
    },
    {
        title: 'Pro',
        price: '$499',
        features :
        [
            'Get a professional website designed according to your needs.',
            'Get a fully designed Website',
            'Webflow Development',
            'Limited Support',
            'Get a fully designed Website',
            'Webflow Development',
            '24/7 Support system',
            'Webflow Development',
            'Limited Support',

        ],
        btn: 'Select plan',
        index: 2
    },
    {
        title: 'Enterprise',
        price: '$999',
        features :
        [
            'Get a professional website designed according to your needs.',
            'Get a fully designed Website',
            'Webflow Development',
            '24/7 Support system',
            'Get a fully designed Website',
            'Limited Support',
            'Webflow Development',
            'Get a fully designed Website',
            '24/7 Support system',
            'Get a fully designed Website',
            'Limited Support',
        ],
        btn: 'Contact Us',
        index: 3,
    }
]
const footerObj = [
    {
        title: 'Platform',
        details: ['Why Cloudfare', 'Expense management', 'Automatic bookkeeping', 'Integration']
    },
    {
        title: 'Company',
        details: ['About us', 'Platform', 'Solution', 'Customer', 'Pricing']
    },
    {
        title: 'Resources',
        details: ['Blog', 'Help center', 'Webinar', 'FAQ`s', 'Status']
    },
    {
        title: 'Solutions',
        details: ['Self employed', 'Email business', 'Sms Startups']
    }
];

function FooterCard({ obj }) {
    return (
        <div className='footerCardContainer'>
            <div className='footerCardTitle'>{obj.title}</div>
            <div className='footerCardDetails'>
                {obj.details.map((val) => (
                    <div>{val}</div>
                ))}
            </div>
        </div>
    );
}

function PricingCard( {obj} ) {
    return(
    <div className='pricingCardContainer'>
        
        <div className='pricingCardText'>
            <div className=  'pricingCardTitle'  style={{color: obj.index === 1 ? 'black' : '#A3DC2F'}}>{obj.title}</div>
            <div className='pricingCardPrice'>{obj.price}</div>
            <div className='priceCardFeatures'>
                {
                    obj.features.map((val) => {
                        return (
                            <div> {val}</div>
                        )
                    })
                }
            </div>
        </div>
        <div className='pricingCardBtn'>
            <button className={obj.index === 3? 'Contact': 'Select'}>{obj.btn}</button>
        </div>
    </div>
    )
}

function Navbar () {
    return(
        <div className='container'>
        <div className='blueBackground'>
<div className='navBarContainer'>
            <div className='navBarLeft'>
                <div className='aboutUs text'>About Us</div>
                <div className='latform text'>Platform</div>
                <div className='solution text'>Solution</div>
                <div className='customer text'>Customer</div>
            </div>
            <div className='navBarCenter'>
                <div className='logoImage'>
                    <img src= {Logo} alt='logo'className='logoImg'></img></div>
            </div>
            <div className='navBarRight'>
                <div className='price text'>Price</div>
                <div className='contact text'>Contact</div>
                <div className='login text'>Login</div>
                <div className='signUp text'>Sign Up</div>
            </div>
        </div>
        <div className='demoPageContainer'>
            <div className='demoPageTitle'>The Finance Solutions For Your Business</div>
            <div className='demoPageSubTitle'>Empower your finance team. the onestop platform for all financial management of small and medium-sized business</div>
            <div className='demoPageInput'>
                <input type='text' placeholder='Enter your email address'></input>
                <button className='bookADemoBtn'>Book a demo</button>
            </div>
        </div>
        </div>
        <div className='statistics'>
            <img src={statistic} alt='img'></img>
        </div>
        <div className='workWithUsContainer'>
            <div className='workWithUsTitle'>Working with world class partners. We`re partner first!</div>
            <div className='brandLogoContainer'>
                <img src= {cambrian} alt='img' className='logo cambrianLogo'></img>
                <img src= {commvault} alt='img' className='logo commvaultLogo'></img>
                <img src= {crompton} alt='img' className='logo cromptonLogo'></img>
                <img src= {seclock} alt='img' className='logo seclockLogo'></img>
                <img src= {software} alt='img' className='logo softwareLogo'></img>
                <img src= {aumni} alt='img' className='logo aumniLogo'></img>
            </div>
        </div>
        <div className='boostPageContainer'>
            <div className='expensePageContainer'>
            <div className='boostPageTitle'>Boosting Business. Today <br></br> and Tomorrow.</div>
            <div className='boostPageExpense'>
                <div className='expenseImage'>
                    <div className='expenseImageColOne'>
                        <img className='img-flex' src = {expense1}alt='img'></img>
                        <img className='img-flex' src = {expense2}alt='img'></img>
                    </div>
                    <div className='expenseImageColTwo'>
                        <img className='img-flex' src = {expense3}alt='img'></img>
                    </div>
                </div>
                <div className='expenseText'>
                    <div className='expenseTextTitle'>Optimise expense Management as a team</div>
                    <div className='expenseTextSubTitle'>Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you.</div>
                    <div className='expenseTextButton'>
                        <button className='exploreMore'>Explore more</button>
                    </div>
                </div>
            </div>
            </div>
            <div className='accountingPageContainer'>
                <div className='accountingPageText'>
                    <div className='accountingPageTitle'>Real-time accounting at your fingertips.</div>
                    <div className='accountingPageSubTitle'>Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. There`s now a new way of accounting.</div>
                    <div className='accountingPageBtn'>
                        <button className='exploreMore'>Explore more</button>
                    </div>
                </div>
                <div className='accountingPageImage'>
                    <img src={accounting} className='accountingImg' alt='img'></img>
                </div>
            </div>
        </div>
        <div className='foundersPageContainer'>
            <div className='foundersPageText'>
            <div className='foundersPageTitle'>Modern Companies are<br></br> built on Capital.</div>
            <div className='foundersPageSubTitle'>we provide software for the financial and operational needs of today`s founders so they can get back to doing what they do best-building</div>
            </div>
            <div className='foundersPageImgContainer'>
                <div className='foundersContainer1'>
                    <img src={founders1} alt='img' className='founderImg'></img>
                    <div className='founderName'>Benjamin McDonald</div>
                    <div className='founderPosition'>Founder, CEO</div> </div>
                <div className='foundersContainer2'>
                    <img src={founders2} alt='img' className='founderImg'></img>
                    <div className='founderName'>Jett Yagan</div>
                    <div className='founderPosition'>Founder, CEO</div>
                </div>
                <div className='foundersContianer3'>
                    <img src={founders3} alt='img' className='founderImg'></img>
                    <div className='founderName'>Layla Cramp</div>
                    <div className='founderPosition'>Founder, CEO</div>
                </div>
                </div>

        </div>
        <div className='pricingPageContainer'>
            <div className='pricingPageTextContainer'>
                <div className='pricingPageTitle'>Find the right plan</div>
                <div className='pricingPageSubTitle'>"Invest in your company's future with our comprehensive financial solution. Contact us for pricing details
and see how we can help you streamline your finances and reach your business goals.</div>
                </div>
                <div className='pricingPageCardContainer'>
                {
                    obj.map((currObj, index) => {
                        return (
                         <PricingCard 
                         obj = {currObj}
                         key={index}
                         />
                        
                        )   
                    })
                }
                </div>
            
        </div>
        <div className='reviewPageContainer'>
            <div className='reviewPageText'>
                <div className='reviewPageTitle'>What our customers say</div>
                <div className='reviewPageSubTitle'>"Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us.</div>
            </div>
            <div className='reviewPageImgContainer'>
                <img src = {review1} alt='img' className='review1' />
                <img src = {review2} alt='img' className='review2' />
                <img src = {review3} alt='img' className='review3' />
                <img src = {review4} alt='img' className='review4' />
                <img src = {review5} alt='img' className='review5' />
                <img src = {review6} alt='img' className='review6' />
            </div>
        </div>
        <div className='whiteBg'>
        <div className='reqDemoContainer'>
            <div className='reqDemoText'>
                <div className='reqDemoTitle'>Let`s Upgrade your finances experience<br></br> by using Cryptland</div>
                <button className='reqDemoBtn'>Request Demo</button>
                <button className='watchVideoBtn'>Watch Video</button>
            </div>
            <div className='reqDemoImg'>
                <img src={upgradeImg} alt='img'></img>
            </div>
        </div>
        </div>
            
        <div className='blackBg'>
            <div className='footerPageContainer'>
                <div className='footerUpperContainer'>
                    <div className='footerUpperLeftContainer'>
                        <div className='footerLogo'>
                            <img src={Logo} alt='img' className='Logo'/>
                        </div>
                            <div className='footerUpperLeftTitle'>Empower your finance team. The onestop plateform for all financial management of small and medium- sized business.</div>
                            <div className='footerUpperLeftSocials'>
                                <img className='social' src={twitter} alt='img'/>
                                <img className='social' src={facebook} alt='img'/>
                                <img className='social' src={linkdin} alt='img'/>
                                <img className='social' src={youtube} alt='img'/>
                            </div>
                        
                    </div>
                    <div className='footerUpperRightContainer'>
                        {
                            footerObj.map((currObj, index) => {
                                return (
                                    <FooterCard 
                                    obj={currObj}
                                    key={index}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='footerLowerContainer'>
                    <div className='footerLowerText'>© 2022 Sendinblue. All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure</div>
                </div>
            </div>
        </div>

        </div>
    )
}
function DemoPage() {
}
function Homepage () {
    return (
        <div>
        < Navbar />
        
        </div>
    )
}
export default Homepage;