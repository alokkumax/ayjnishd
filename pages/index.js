import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  )
} 
