import React from 'react'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import Singlepdf from '../../components/pdf/SinglePdf'
export default function ciprocessor() {
  const arr=["Report on Events","Duration of Therapy","Guidance & Support","Pre & Post CI ","CI Processor Manual"]
  const arr_links=["report","duration","guidance","pre-post","ciprocessor"]
    return (
      
      <div>
          <Navbar active="Others"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="Others" heading2="CI Processor Manual" arr={arr} alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                <Singlepdf link="1wpFkbWsQo0XUmB9tdG9bbn5qdB7WUBAs"/>
              </div>
          </div> 
      </div>
    )
}
// https://drive.google.com/file/d/1wpFkbWsQo0XUmB9tdG9bbn5qdB7WUBAs/view?usp=sharing