import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="mainContainer">
            <div className="greet">
                <p><span>Hello, Developer.</span></p>
                <p>How Can I help You Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest a beautiful place to visit in summer</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize the concept of urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team building approaches</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="mainBottom">
                <div className="searchBox">
                    <input type="text" placeholder='Enter a prompt'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottomInfo">Information may be inaccurate</p>
            </div>
        </div>
    </div>
  )
}

export default Main