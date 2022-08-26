import React from 'react'

export default function AppDetails() {
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
                                <td className='col-lg-4 col-6'>Age</td>
                                <td className='col-lg-8 col-6'>3</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Gender</td>
                                <td className='col-lg-8 col-6'>Female</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>State</td>
                                <td className='col-lg-8 col-6'>Assam</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Type</td>
                                <td className='col-lg-8 col-6'>Mixed</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Degree</td>
                                <td className='col-lg-8 col-6'>Mild</td>
                            </tr>
                        </tbody>
                    </table> 
                </center>   
        </div>
    </div>
  )
}

