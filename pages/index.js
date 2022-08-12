import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"
import Kpi from "../components/layout/Kpi";
import CiApplication from "../components/layout/CIApplication";

//KPI from restAPI
const api = 'https://ayjnishd-backend.herokuapp.com/kpi';
export async function getServerSideProps(){
   const res = await fetch(api);
    const data = await res.json();
    return{
        props:{
            data
        }
    }
}
export default function Home({data}) {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Kpi data={data}/>
      <CiApplication/>
    </div>
  )
} 
