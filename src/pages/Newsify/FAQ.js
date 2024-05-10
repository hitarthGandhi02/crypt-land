import './FAQ.css'
import { useState } from 'react'
import React from 'react'
const accordianObj = [
    {
        title : "What is team Newsify",
        subtext : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        title : "How is team Newsfy",
        subtext : "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!",
    },
    {
        title : "What does the technology work?",
        subtext : "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!",
    },
    {
        title : "How often will i get team Newsify?",
        subtext : "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!",
    },
    {
        title : "How automated is this?",
        subtext : "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!",
    },
    {
        title : "Is it close to news letter regular?",
        subtext : "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!",
    },
    {
        title : "Can i get a live demo of Newsify in action",
        subtext : "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!",
    }
]
const Accordian = ({obj}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='accordianContainer'>
            <div className='accordianUpperContainer' onClick= {() => {setIsActive(!isActive)} }>
            <div className='accordianTitle' >
                {obj.title}
            </div>
            <div className= "accordianState">
                {
                (isActive?'x':'+')
                }
                </div>
            </div>
            <div className='accordianSubText'>
                {isActive && obj.subtext}</div>
        </div>
    )
}
export default function FAQ() {
  return (
    <div className='faqPageContainer'>
        <div className='faqPageTitle'>Freequently asked questions</div>
        <div className='faqPageSubTitle'>We`re happy to answer your questions</div>
        <div className='    '>
            {
                accordianObj.map((currObj, index) => {
                    return(
                    <Accordian
                    obj={currObj} 
                    key={index}/>
                    )
                })
            }
        </div>
    </div>
   )
}