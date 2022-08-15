import Image from "next/image";
import React from "react";
import Kpi1 from "../../images/Kpi1.png";
import Kpi2 from "../../images/Kpi2.png";
import Kpi3 from "../../images/Kpi3.png";
import Kpi4 from "../../images/Kpi4.png";


export default function Kpi({ data }) {
  return (
    <div className="container row d-row-center col-12 m-auto">
        <div id="kpi1" className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
            <Image src={Kpi1} alt="" height={80} width={80}></Image>
            <div className='d-col-center kpi1-text'>
                <h4 className=''>{data.registered}</h4>
                <p className=''>Registered for CI</p>
            </div>
        </div>
        <div id="kpi2" className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi2} height={80}  alt="" width={80}></Image>
            <div className='d-col-center kpi2-text'>
                <h4 className=''>{data.professionals}</h4>
                <p className=''>Professionals Registered</p>
            </div>
        </div>
        <div id="kpi3" className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi3} height={80} alt="" width={80}></Image>
            <div className='d-col-center kpi3-text'>
                <h4 className=''>{data.surgeries}</h4>
                <p className=''>Surgeries Done</p>
            </div>
        </div>
        <div id="kpi4" className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi4} height={80} alt="" width={80}></Image>
            <div className='d-col-center kpi4-text'>
                <h4 className=''>{data.hospitals}</h4>
                <p className=''>Hospitals Empanelled</p>
            </div>
        </div>
    </div>
  );
}
