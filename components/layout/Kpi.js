import Image from "next/image";
import React from "react";
import Kpi1 from "../../images/Kpi1.png";
import Kpi2 from "../../images/Kpi2.png";
import Kpi3 from "../../images/Kpi3.png";
import Kpi4 from "../../images/Kpi4.png";

export default function Kpi({ data }) {
  console.log(data);
  return (
    <div className="container row d-row-center col-12 m-auto">
      <div className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi1} alt="" height={80} width={80}></Image>
        <div className="d-col-center">
          <h4 className="text-start">{data.registered}</h4>
          <p className="text-start">Registered for CI</p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi2} height={80} alt="" width={80}></Image>
        <div className="d-col-center">
          <h4 className="text-start">{data.professionals}</h4>
          <p className="text-start">Professionals Registered</p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi3} height={80} alt="" width={80}></Image>
        <div className="d-col-center">
          <h4 className="text-start">{data.surgeries}</h4>
          <p className="text-start">Surgeries Done</p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi4} height={80} alt="" width={80}></Image>
        <div className="d-col-center">
          <h4 className="text-start">{data.hospitals}</h4>
          <p className="text-start">Hospitals Empanelled</p>
        </div>
      </div>
    </div>
  );
}
