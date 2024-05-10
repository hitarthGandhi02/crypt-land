import './Feature.css';
import feature from './images/feature.png';
import arrow from './images/arrow-img.png';
import arrowBlue from './images/blue-arrow.png';
const Feature = () => {
    const featureCardObj =[ 
    {
        title: 'Direct Connections',
        subtitle: 'No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others',
        color: 'white'
    },
    {
        title: 'Don`t let the team stagenate',
        subtitle: 'Don`t let the team get board by unnecessary messages. Let your team stay connected in the way they should- only important things. Rest could stay in other apps, we take the important part.',
        color: 'blue'
    },
    {   title: 'Complete Automated',
        subtitle: 'Your members need to stay active? You can craete polls, feedback papers and a lot more stuff our widgets to keep them connected and everything with one click',
        color: 'white'
    }
]
    const FeatureCard = ({obj}) => {
        return (
            <div className='featureCardContainer' style={{background: obj.color === 'white' ? '#F7F7F7': '#1668E8', color: obj.color === 'white' ? 'black': 'white'}}>
                <div className='arrowImage'>
                    <img className='arrow-img' src={obj.color === 'white' ? arrow: arrowBlue} alt='img'/>
                </div>
                <div className='featureCardTitle'>{obj.title}</div>
                <div className='featureCardSubTitle'>{obj.subtitle}</div>
            </div>
        )
    }
    return (
        <div className="featureContainer">
            <div className="featureTitle">Let Your Newsletter Do the talk</div>
            <div className="featureSubTitle">Let`s clam it , today we don`t the time to talk or time to scroll over groups or other plateforms . So it is better for your automated newsletter to do the tlk. What cloud be done better? Stay connected to your community.</div>
            <div className="featureImage">
                <img className="feature-img" src={feature} alt="img"></img>
            </div>
            <div className='featureList'>
                {
                    featureCardObj.map((currArr, index) => {
                        return(
                            <FeatureCard
                            obj = {currArr}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Feature;