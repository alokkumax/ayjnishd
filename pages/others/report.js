import React from 'react'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import Allpdfs from '../../components/pdf/Allpdfs'
export default function report() {
  const arr=["Report on Events","Duration of Therapy","Guidance & Support","Pre & Post CI ","CI Processor Manual"]
  const arr_links=["report","duration","guidance","pre-post","ciprocessor"]
    return (
      
      <div>
          <Navbar active="Others"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="Others" heading2="Report on Events" arr={arr} alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                <div className="pdf text-center">
                <h3 className=''>Report on Events</h3> 
                <Allpdfs link="1VRpInNCf-KECFJFoBASPa60YUQKYXovC"/>
                </div>
              </div>
          </div> 
      </div>
    )
}
// https://drive.google.com/drive/folders/1VRpInNCf-KECFJFoBASPa60YUQKYXovC?usp=sharing