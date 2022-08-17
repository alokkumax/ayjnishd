import React from 'react'
import Navbar from "../../components/layout/Navbar"
import CiForms from "../../components/CI-Forms/Ci-forms"
export default function index() {
  return (
    <div>
        <Navbar/>
        <div className="row">
            <div className="col-2">sidebar</div>
            <div className="col-10"><CiForms/></div>
        </div> 
    </div>
  )
}
