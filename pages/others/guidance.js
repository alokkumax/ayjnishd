import React from 'react'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import Singlepdf from '../../components/pdf/SinglePdf'

export default function guidance() {
  const arr=["Report on Events","Duration of Therapy","Guidance & Support","Pre & Post CI ","CI Processor Manual"]
  const arr_links=["report","duration","guidance","pre-post","ciprocessor"]
    return (
      
      <div>
          <Navbar active="Others"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="Others" heading2="Guidance &amp; Support" arr={arr} alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                
                <div className="pdf text-center">
                <h3 className=''>Guidance &amp; Support</h3> 
                <Singlepdf link="1qRXf8bMdntmcyExwAlYVkw3AKyNROZkx"/>
              </div>
              </div>
          </div> 
      </div>
    )
}

// https://drive.google.com/file/d/1qRXf8bMdntmcyExwAlYVkw3AKyNROZkx/view?usp=sharing