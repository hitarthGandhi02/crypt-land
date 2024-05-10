import './Footer.css'
import React from 'react'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import facebook from './images/facebook.png';
import linkdin from './images/linkdin-logo.png';
import youtube from './images/youtube.png'
export default function Footer() {
  return (
    <div className='newsifyFooterContainer'>
        <div className='newsifyFooterUpperContainer'>
            <div className='footerNewsletterContainer'>
                <div className='footerNewsletterTitle'>Newsify</div>
                <div className='footerNewsletterSubTitle'>Newsify is your Email newsletter Webflow template we can build anything your dream.</div>
                <div className='footerNewsletterButton'>
                    <button className='try-for-free-btn'>Try for free</button>
                </div>
            </div>
            <div className='footerCompanyContainer'>
                <div className='footerCompanyTitle'>Company</div>
                <div className='footerCompanyAboutUs'>About Us</div>
                <div className='footerCompanyHome'>Home</div>
                <div className='footerCompanyPricing'>Pricing</div>
                <div className='footerCompanyDemo'>Demo</div>
                <div className='footerCompanyContactUs'>Contact us</div>
            </div>
            <div className='footerSupportContainer'>
                <div className='footerSupportTitle'>Support us</div>
                <div className='footerSupportBlog'>Blog</div>
                <div className='footerSupportHelpCenter'>Help center</div>
                <div className='footerSupportFaq'>FAQ's</div>
                <div className='footerSupportProduct'>Product Update</div>
            </div>
            <div className='footerResourcesContainer'>
                <div className='footerResourcesTitle'>Resources</div>
                <div className='footerResourcesCommunity'>Community</div>
                <div className='footerResourcesContact'>Contact</div>
                <div className='footerResourcesTerms'>Terms of service</div>
            </div>
            <div className='footerAddressContainer'>
                <div className='footerAddressTitle'>Address</div>
                <div className='footerAddressAddressText'>101 Marlow Street. #12-05 Clife Parkview. Singapore 059020. View on Maps</div>
                <div className='footerAddressInquiry'>Inquiries</div>
                <div className='footerAddressContact'>+65 6156 5519 hello@Newsify.com</div>
                <div className='footerAddressLogoContainer'>
                    <div className='footerLogoTwitter'>
                        <img alt='img' className='' src={twitter}/>
                    </div>
                    <div className='footerLogoFacebook'>
                        <img alt='img' className='' src={facebook}/>
                    </div>
                    <div className='footerLogoLinkdin'>
                        <img alt='img' className='' src={linkdin}/>
                    </div>
                    <div className='footerLogoYoutube'>
                        <img alt='img' className='' src={youtube}/>
                    </div>
                    <div className='footerLogoInstagram'>
                        <img alt='img' className='' src={instagram}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='newsifyFooterLowerContainer'>© 2023 Newsify. All rights reserved     |     Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure</div>
    </div>
  )
}
