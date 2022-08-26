import React from 'react'

export default function Appstatus() {
  return (
    <div>
        <div className="app-status-table m-5">
            <center>
                <h3>Your Application Status</h3>
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
                                <td className='col-lg-4 col-6'>Name</td>
                                <td className='col-lg-8 col-6'>Akash Avasthi</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Registration ID</td>
                                <td className='col-lg-8 col-6'>12547</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Status</td>
                                <td className='col-lg-8 col-6'>Accepted</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Appointment Date</td>
                                <td className='col-lg-8 col-6'>5th September</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Venue City</td>
                                <td className='col-lg-8 col-6'>Coimbatore</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Venue State</td>
                                <td className='col-lg-8 col-6'>Tamil Nadu</td>
                            </tr>
                        </tbody>
                    </table> 
                </center>   
        </div>
    </div>
  )
}

