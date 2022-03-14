import React from 'react'
import { Wrapper } from './AdminLayouts.styled'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Base(props) {
  return (
    <Wrapper>
    <div className="body">
        {/* <div id="preloader"><div id="status"><div className="spinner"></div></div></div> */}
        <div id="wrapper" style={{padding: '0px'}}>

            <Sidebar />

            <div className="content-page" style={{ background: '#ffff'}}>
                {/* <!-- Start content --> */}
                <div className="content">
                    <div className="topbar">
                        <nav className="navbar-custom">      
                            <Topbar />

                            <ul className="list-inline menu-left mb-0">
                                <li className="list-inline-item">
                                    <button type="button" className="button-menu-mobile open-left waves-effect">
                                        <i className="ion-navicon"></i>
                                    </button>
                                </li>
                                <li className="hide-phone list-inline-item app-search">
                                    {/* {% block pageHeader %}{% endblock %} */}                                    
                                    <h4 className="mt-3 mb-3  ml-4">ADMINISTRATOR</h4>
                                </li>
                            </ul>

                            <div className="clearfix"></div>
                        </nav>
                    </div>

                    <div className="page-content-wrapper">
                        { props.children }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Wrapper>
  )
}
