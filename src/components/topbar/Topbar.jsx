//import { NotificationsNone } from '@mui/icons-material'
import { Language, NotificationsNone, Settings } from '@mui/icons-material'
import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className='topbarWrapper'>
        <div className="topLeft">
          <span className="logo">Gallos's Admin</span>
          
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://cdn.britannica.com/48/216648-050-4A42C937/American-actor-Chris-Pratt-2020.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
