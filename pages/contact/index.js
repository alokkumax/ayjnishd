import React from 'react'
import Navbar  from "../../components/layout/Navbar"

export default function index() {
  return (
    <div>
        <Navbar/>
        <div className="row">
            <div className="col-2">Sidebar</div>
            <div className="col-10">
                Contact Us
            </div>
        </div>
    </div>
  )
}
