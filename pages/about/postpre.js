import React from 'react'
import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import Singlepdf from '../../components/pdf/SinglePdf'
export default function ci_candidacy() {
    return (
      
      <div>
          <Navbar active="About"/>
          <div className="d-flex">
              <div className="w-100">
            
                <div className="pdf text-center">
                <h3 className=''>Pre &amp; Post CI Services</h3> 
                <Singlepdf link="1oSAhkFBHHEgJMk_Of8OLynot9FKbut3l"/>
                </div>
              </div>
          </div> 
          <Footer/>
      </div>
    )
}
// https://drive.google.com/file/d/1oSAhkFBHHEgJMk_Of8OLynot9FKbut3l/view?usp=sharing