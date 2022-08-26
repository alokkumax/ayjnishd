import React from 'react'
import Navbar from "../../components/layout/Navbar"
import Page2 from "../../components/CI-Forms/Page2"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import Allpdfs from '../../components/pdf/Allpdfs'
import Footer from '../../components/layout/Footer'
export default function adipscheme() {
  return (
    
    <div>
        <Navbar active="About"/>
        <div className="d-flex">
            <div className="w-100">
            <h3 className='text-center'>ADIP Scheme</h3> 
              <Allpdfs link="1vXVO8Yrs_aL5QUDFQiQrnGrwqbWDsQbW"/>
            </div>
        </div> 
        <Footer/>
    </div>
  )
}
// https://drive.google.com/drive/folders/1vXVO8Yrs_aL5QUDFQiQrnGrwqbWDsQbW?usp=sharing