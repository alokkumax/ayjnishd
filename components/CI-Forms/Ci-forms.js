import React, { useState } from 'react'
import Link from 'next/link'
// import dynamic from "next/dynamic"; const BasicModal = dynamic(() => import("../../Modal/BasicModal"), { ssr: false, });
export default function index() {
    const [checked,setChecked]=useState("false")
    function updateCheck(){
        if(checked==="false"){
            setChecked("true")
            document.getElementById("btn-ckeck").disabled = false;
        }
        else{
            setChecked("false")
            document.getElementById("btn-ckeck").disabled = true;
        }
    }
  return (
    <div>
        <div className="m-5">
            <div className="context">
                <h3 className="main-color">Criteria for Cochlear Implant surgery under ADIP scheme</h3>
                <h5>(A child is eligible for only unilateral implantation under the scheme)</h5>
                <br />
                <p>Please read “CI Cadidacy” for the eligibility criteria for Cochlear Implant surgery as per ADIP scheme guidelines. Application with incomplete information and with out copy of required documents as attachments will not be considered.

                You are requested to confirm the check box given below before filling up the application form so that the eligibility is confirmed .</p>
                <br />
            </div>
            
            <div className="">
                <table>
                <thead>
                    {/* <tr className='row'>
                        <th className='col-1'>Sl. No</th>
                        <th className='col-md-10 col-9'>Contact</th>
                        <th className='col-1'>Country</th>
                    </tr> */}
                </thead>
                <tbody>
                    
                    <tr className='row'>
                        <td className='col-2'>1</td>
                        <td className='col-md-10 col-9'><label className="form-check-label1" htmlFor="exampleCheck1">An Indian Citizenship</label></td>                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-2'>2</td>
                        <td className='col-md-10 col-9'><label className="form-check-label2" htmlFor="exampleCheck2">Age of the child with any of these:
                        <ul>
                            <li>Child with congenital deafness (since birth) upto 5 years as on 31st December in the current year
                            </li>
                            <li>Upto 12 years for child with post lingual deafness i.e. after development of speech &amp; language
                            </li>
                            <li>Birth certificate of the child
                            </li>
                        </ul>
                        </label></td>
                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-2'>3</td>
                        <td className='col-md-10 col-9'><label className="form-check-label3" htmlFor="exampleCheck3">Degree of hearing lossSevere to Profound sensorineural hearing loss in both ears
                        </label></td>
                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-2'>4</td>
                        <td className='col-md-10 col-9'><label className="form-check-label4" htmlFor="exampleCheck4">Child should not have any associated developmental delay or Mental Retardation or cognitive deficit etc.
                        </label></td>
                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-2'>5</td>
                        <td className='col-md-10 col-9'><label className="form-check-label5" htmlFor="exampleCheck5">Hearing Disability certificate
                        </label></td>
                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-2'>6</td>
                        <td className='col-md-10 col-9'><label className="form-check-label6" htmlFor="exampleCheck6">Child should have used suitable hearing aid for atleast 3 months with no significant improvement in speech and language development
                        </label></td>
                        
                    </tr>    
                    <tr className='row'>
                        <td className='col-2'>7</td>
                        <td className='col-md-10 col-9'><label className="form-check-label7" htmlFor="exampleCheck7">Family Income
                        <ul>
                            <li>100% subsidy for income less than 15,000/- per month
                            </li>
                            <li>50% subsidy for income Rs.15,000 to Rs.20,000 per month
                            </li>
                            <li>Income Certificate of family
                            </li>
                        </ul>
                        </label></td>
                        
                    </tr>   
                    <tr className='row'>
                        <td className='col-2'>8</td>
                        <td className='col-md-10 col-9'><label className="form-check-label8" htmlFor="exampleCheck8">Done Hearing evaluation &amp; have the reports
                        </label></td>
                    </tr>          
                    <tr className='row'>
                        <td className='col-2'>9</td>
                        <td className='col-md-10 col-9'><label className="form-check-label9" htmlFor="exampleCheck9">Done Speech evaluation &amp; have the reports
                        </label></td>
                    </tr>          
                    <tr className='row'>
                        <td className='col-2'>10</td>
                        <td className='col-md-10 col-9'><label className="form-check-label10" htmlFor="exampleCheck10">Done Psychological evaluation & have the reports
                        </label></td>
                    </tr>          
                    <tr className='row'>
                        <td className='col-2'>11</td>
                        <td className='col-md-10 col-9'><label className="form-check-label11" htmlFor="exampleCheck11">Done Medical Evaluation & have the reports
                        </label></td>
                    </tr>          
                    <tr className='row'>
                        <td className='col-2'>12</td>
                        <td className='col-md-10 col-9'><label className="form-check-label12" htmlFor="exampleCheck12">Agreeing to the criteria/condition that Pre implant candidacy evaluation such as Audiological , Radiological( CT Scan/MRI) and vaccination charges are to be borne by the family as not covered under the scheme
                        </label></td>
                    </tr>          
                    <tr className='row'>
                        <td className='col-2'>13</td>
                        <td className='col-md-10 col-9'><label className="form-check-label13" htmlFor="exampleCheck13">Agreeing to the criteria that - Caste certificate has to be submitted if SC/ST or will be considered under General quota
                        </label></td>
                    </tr>  
                </tbody>         
                </table>
                
            </div>
                
            <div className="btns d-column-center m-5">
                <div className="check d-row-center">
                    <input type="checkbox" class="form-check-input1" id="exampleCheck1" value={checked} onClick={updateCheck}/>
                    <p className='m-1'>I have read all the CI Candidacy and i confirm I am eligible in all the criteria.</p>
                </div>
                
                <Link href="/ci-forms/page2">
                    <a href="">
                        <button id="btn-ckeck" disabled type="button" className="btn-sih btn text-center m-3 ">Proceed to Page2</button>
                    </a>
                </Link>
            </div>
            
            <br />
        </div>
    </div>
  )
}
