import './Services.css';
import services1 from './images/services1.png';
import services2 from './images/services2.png';
import services3 from './images/services3.png';
import services4 from './images/services4.png';
export default function Services() {
    const servicesObj = [
        {
            imgSrc: services1,
            title: "Collect the needed information and see the result easily",
            subtitle: "Help your members find  matters to them Collect informations and creates graphics for them to understand their values. To have a smooth experience all members need a bit of guidence."
        },
        {
            imgSrc: services2,
            title: "Use the analyzer AI to track your reports",
            subtitle: "A strong community could be lead by a strong guidence only. The guide in this tour may be automized already. Our analyzier Ai will track the parameters and will come real life reports"
        },
        {
            imgSrc: services3,
            title: "Punish in on touch",
            subtitle: "Everything is under you control you can schedule your announcement plan your feeds and create posts with one click Being the right thing in the right time."
        },
        {
            imgSrc: services4,
            title: "Connection is the key",
            subtitle: "When a member replied to another, they get the connection flow. This way we improve general efficeny of the team"
        }
    ]
    const GetStartedButton = () => {
        return(
            <div className='getStartedBtnContainer'>
                <button className='get-started-btn'>Get Started For Free</button>
            </div>
        )
    }
    const ServicesCard = ({obj}) => {
        return (
            <div className='servicesCardContainer'>
                <div className='servicesCardImage'>
                    <img alt='img' src={obj.imgSrc} className='services-card-img'/>
                </div>
                <div className='servicesCardText'>
                    <div className='servicesCardTitle'>{obj.title}</div>
                    <div className='servicesCardSubTitle'>{obj.subtitle}</div>
                    <div className='GetStartedBtn'> < GetStartedButton/> </div>
                </div>
            </div>
        )
    }
  return (
    <div className='servicesPageContianer'>
        <div className='servicesTitle'>More than a newspaper</div>
        <div className='servicesSubTitle'>Unlock the automated quality experience for everyone in the team.</div>
        <div className='servicesContainer'>
            {
                servicesObj.map((currArr, index) => {
                    return(
                    <ServicesCard 
                    obj = {currArr}/>
                    )
                })
            }
        </div>
    </div>
  )
}
