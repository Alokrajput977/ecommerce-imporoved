import React from 'react'
import "./appdownlord.css"
import { assets } from '../../assets/assets'
const appdownlord = () => {
  return (
    <div className='app-downlord' id='app-downlord'>
    <p>For Better Experience Downlord <br /> Tomato app</p>
    <div className="app-downlord-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
    </div>
  )
}

export default appdownlord
