import Image from 'next/image'
import React from 'react'
import Kpi1 from '../../images/Kpi1.png'
import Kpi2 from '../../images/Kpi2.png'
import Kpi3 from '../../images/Kpi3.png'
import Kpi4 from '../../images/Kpi4.png'

export default function () {
  return (
    // <div className='container '>
    //     <div className='col-3'>
    //         <Image src={Kpi1} height={80} width={80}></Image>
    //         <div className='d-col-center px-2'>
    //             <h4 className='text-start'>1254</h4>
    //             <p className='text-start'>Registered for CI</p>
    //         </div>
    //     </div>
    //     <div className='col-3'>
    //         <Image src={Kpi2} height={80} width={80}></Image>
    //         <div className='d-col-center px-2 '>
    //         <h4 className='text-start'>40</h4>
    //         <p className='text-start'>Professionals Registered</p>
    //         </div>
    //     </div>
    //     <div className='col-3'>
    //         <Image src={Kpi3} height={80} width={80}></Image>
    //         <div className='d-col-center px-2'>
    //         <h4 className='text-start'>4287</h4>
    //         <p className='text-start'>Surgeries Done</p>
    //         </div>
    //     </div>
    //     <div className='col-3'>
    //         <Image src={Kpi4} height={80} width={80}></Image>
    //         <div className='d-col-center px-2'>
    //         <h4 className='text-start'>8245</h4>
    //         <p className='text-start'>Hospitals Empanelled</p>
    //         </div>
    //     </div>
    // </div>
    <div className="container row d-row-center col-12 m-auto">
        <div className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
            <Image src={Kpi1} height={80} width={80}></Image>
            <div className='d-col-center'>
                <h4 className='text-start'>1254</h4>
                <p className='text-start'>Registered for CI</p>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi2} height={80} width={80}></Image>
            <div className='d-col-center'>
                <h4 className='text-start'>40</h4>
                <p className='text-start'>Professionals Registered</p>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi3} height={80} width={80}></Image>
            <div className='d-col-center'>
                <h4 className='text-start'>8475</h4>
                <p className='text-start'>Surgeries Done</p>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
        <Image src={Kpi4} height={80} width={80}></Image>
            <div className='d-col-center'>
                <h4 className='text-start'>5478</h4>
                <p className='text-start'>Hospitals Empanelled</p>
            </div>
        </div>
    </div>
  )
}