import React from 'react'
import AboutUs from '../../components/about/AboutUs'
import CochlearImplant from '../../components/about/CochlearImplant'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'

export default function institute() {
  const arr=["About the Scheme","ADIP Scheme","CI Candidacy","Institute","Copyright Act"]
  const arr_links=["aboutthescheme","adipscheme","cicandidacy","institute","copyrightact"]
    return (
      
      <div>
          <Navbar active="About"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="About" heading2="Institute" arr={arr} alink="/about" alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                <AboutUs/>
              </div>
              
          </div> 
      </div>
    )
}
