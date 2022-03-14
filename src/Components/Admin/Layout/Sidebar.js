import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './AdminLayouts.styled'

export default function Sidebar() {
  return (
    <Wrapper>
    <div className="left side-menu">

        {/* <!-- LOGO --> */}
        <div className="topbar-left" style={{background: '#101B79'}}>
            <div className="p-3">
                <a href="/admin" className="logo">
                    <img src="/images/logo_white.svg" height="120" alt="logo" />
                </a>
            </div>
        </div>
        
        <div className="sidebar-inner slimscrollleft" style={{background: '#101B79'}}>
            <div id="sidebar-menu" >
                <ul>
                    <li>
                        <Link to="/admin" className="waves-effect"> 
                            <img src="/images/sidebar_icon.svg" width={"15px"} className="mr-2" alt="sidebar_icon" />
                            <span style={{fontWeight: '500', color: '#ffff'}} className="sidebar_link"> DASHBOARD </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/agencies" className="waves-effect">
                            <img src="/images/sidebar_icon.svg" width={"15px"} className="mr-2" alt="sidebar_icon" />
                            <span style={{fontWeight: '500', color: '#ffff'}} className="sidebar_link"> AGENCIES </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/individuals" className="waves-effect">
                            <img src="/images/sidebar_icon.svg" width={"15px"} className="mr-2" alt="sidebar_icon" />
                            <span style={{fontWeight: '500', color: '#ffff'}} className="sidebar_link"> INDIVIDUALS </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/shelters" className="waves-effect">
                            <img src="/images/sidebar_icon.svg" width={"15px"} className="mr-2" alt="sidebar_icon" />
                            <span style={{fontWeight: 'bold', color: '#ffff'}} className="sidebar_link"> SHELTERS </span>
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
    </Wrapper>
  )
}
