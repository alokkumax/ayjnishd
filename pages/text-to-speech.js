import React from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import Text_to_Speech from "../components/layout/Text-to-Speech"
export default function text_to_speech() {
  return (
    <div>
      <Navbar active="Home"/>
        <Text_to_Speech/>
      
    </div>
  )
}
