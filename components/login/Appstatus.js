import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Appstatus() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://ayjnishd-backend-sih.herokuapp.com/ci")
            .then((res) => {
                console.log(res.data[0])
                setData(res.data[0])
            })
    }, [])
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
                                <td className='col-lg-8 col-6'>{data.name}</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Registration ID</td>
                                <td className='col-lg-8 col-6'>{data.id}</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Status</td>
                                <td className='col-lg-8 col-6'>{data.status}</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Appointment Date</td>
                                <td className='col-lg-8 col-6'>{data.date_alloted}</td>
                            </tr>
                            <tr className='row'>
                                <td className='col-lg-4 col-6'>Venue</td>
                                <td className='col-lg-8 col-6'>{data.state}</td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        </div>
    )
}

