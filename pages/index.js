import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"
import Kpi from "../components/layout/Kpi";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Kpi/>
    </div>
  )
} 
