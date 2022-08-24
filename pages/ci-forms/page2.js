import React from 'react'
import Navbar from "../../components/layout/Navbar"
import Page2 from "../../components/CI-Forms/Page2"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
export default function index() {
  return (
    <div>
        <Navbar active="About"/>
        <div className="d-flex">
            {/* <div className="sidebar"><SideBar/></div> */}
            <div className="w-100">
              <Sidebar_Btn/>
              <Page2/>
            </div>
        </div> 
    </div>
  )
}
