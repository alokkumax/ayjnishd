import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"
import Kpi from "../components/layout/Kpi";
import CiApplication from "../components/layout/CIApplication";
import Faq from "../components/layout/Faq";
import PdfViewer from "../components/layout/PdfViewer";
import Info from "../components/layout/Info";
import News from "../components/layout/News";
import SideBar from "../components/layout/SideBar";
import Footer from "../components/layout/Footer";
import App from '../components/algorithm'
import Maps from "../components/layout/Maps";
import Text_to_Speech from "../components/layout/Text-to-Speech"
import FAB from "../components/layout/FAB";
// KPI from restAPI
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log(BACKEND_URL);
const api = `${BACKEND_URL}/kpi`;
export async function getServerSideProps() {
  const res = await fetch(api);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Home({data}) {
  return (
    <div>
      {/* <App/> */}
      <Navbar active="Home"/>
      <Hero/>
      <Kpi data={data}/>
      <Info/>
      {/* <FAB/> */}
      {/* <Text_to_Speech/> */}
      <Maps/>
      {/* <News/> */}
      <CiApplication/>
      <Faq/>
      <Footer/>
    </div>
  )
} 
