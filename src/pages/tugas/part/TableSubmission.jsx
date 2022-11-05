import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function TableSubmission(){
    const [assignment, setAssignment] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await axios({
                method: "get",
                url: "http://api-developer-bitif.hmifunej.id/api/get-assignment"
            })
            setAssignment(response.data.listData)
        }
        
        getData()
        // console.log(assignment)
    }, [])
    return (
        <div className='sm:w-[90%] md:max-w-6xl mx-auto py-10'>
            <div className='my-5'>
                <h1 className='text-3xl font-semibold'>Tugas Tugas</h1>
            </div>
            <table className='w-full rounded-md overflow-hidden'>
                <thead className='bg-gray-100 text-lg font-semibold'>
                    <tr className='border-b'>
                        <td className='p-3 border-x'>Tugas</td>
                        <td className='p-3 border-x'>Deadline</td>
                        <td className='p-3 border-x'>Pengumpulan</td>
                    </tr>
                </thead>
                <tbody>
                {
                    assignment.length === 0 ? (
                        <tr className='border-b'>
                            <td colSpan={3} className='p-3 border-x text-center'>
                                Tidak ada data
                            </td>
                        </tr>
                    ) : (
                        <tr className='border-b'>
                        <td className='p-3 border-x'>Sharing sharing dengan kating dan devisi</td>
                        <td className='p-3 border-x'>23:59 20/26/2022</td>
                        <td className='p-3 border-x flex justify-center'>
                            <Link to={"/submission/afwr324322r"}>
                                <span className='bg-blue-500 px-5 py-1 text-white rounded-md'>
                                    Click
                                </span>
                            </Link>
                        </td>
                    </tr>
                    )
                }

                </tbody>
            </table>
        </div>
    )
}