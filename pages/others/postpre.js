import React from 'react'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import Singlepdf from '../../components/pdf/SinglePdf'
export default function pre_post() {
  const arr=["Report on Events","Duration of Therapy","Guidance & Support","Pre & Post CI ","CI Processor Manual"]
  const arr_links=["report","duration","guidance","pre-post","ciprocessor"]
    return (
      
      <div>
          <Navbar active="Others"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="Others" heading2="Pre &amp; Post CI " arr={arr} alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                <div className="pdf text-center">
                <h3 className=''>Pre &amp; Post CI Services</h3> 
                  <Singlepdf link="1oSAhkFBHHEgJMk_Of8OLynot9FKbut3l"/>
                </div>
              </div>
          </div> 
      </div>
    )
}