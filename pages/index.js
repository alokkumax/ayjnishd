import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"
import Kpi from "../components/layout/Kpi";
import CiApplication from "../components/layout/CIApplication";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Kpi/>
      <CiApplication/>
    </div>
  )
} 
