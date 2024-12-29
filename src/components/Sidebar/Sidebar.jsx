import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {

    const [extended,setExtended] = useState(false)
  return (
    <div className={`sidebar`}>
        <div className="top">
            <img onClick={()=> setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
            <div className="newChat">
                <img src={assets.plus_icon} alt="" />
                {extended? <p>New Chat</p>:null}
            </div>
            {extended? <div className="recent">
                <p className="recentTitle">Recent</p>
                <div className="recentEntry">
                    <img src={assets.message_icon} alt="" />
                     <p className='name'>What is React...</p>
                </div>
            </div>:null}
        </div>

        <div className="bottom">
            <div className="bottomItem recentEntry">
                <img src={assets.question_icon} alt="" />
                {extended? <p className='name'>Help</p>: null}
            </div>
            <div className="bottomItem recentEntry">
                <img src={assets.history_icon} alt="" />
                {extended? <p className='name'>History</p>: null}
            </div>
            <div className="bottomItem recentEntry">
                <img src={assets.setting_icon} alt="" />
                {extended? <p className='name'>Settings</p>: null}
            </div>
        </div>

    </div>
  )
}

export default Sidebar