import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RowTable from './RowTable'

export default function TableSubmission(){
    const [assignIndividu, setAssignIndi] = useState([])
    const [assignGroup, setAssignGroup] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await axios({
                method: "get",
                url: "http://api-developer-bitif.hmifunej.id/api/get-task"
            })
            // setAssignIndi(response.data.tasks.fil)
            setAssignIndi(response.data.tasks.filter((item) => item.task.split('/')[1].trim().toLowerCase() === 'individu' ))
            setAssignGroup(response.data.tasks.filter((item) => item.task.split('/')[1].trim().toLowerCase() === 'group' ))
        }
        
        getData()
        // console.log(assignment)
    }, [])
    return (
        <div className='sm:w-[90%] md:max-w-6xl mx-auto py-10'>
            <div className='my-5'>
                <h1 className='text-3xl font-semibold'>Individu</h1>
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
                    assignIndividu.length === 0 ? (
                        <tr className='border-b'>
                            <td colSpan={3} className='p-3 border-x text-center'>
                                Tidak ada data
                            </td>
                        </tr>
                    ) : (
                        assignIndividu.map((item, index) => (
                            <RowTable key={index} item={item} />
                        ))
                    )
                }

                </tbody>
            </table>
            <div className='mt-20'>
                <h1 className='text-3xl font-semibold'>Kelompok</h1>
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
                    assignGroup.length === 0 ? (
                        <tr className='border-b'>
                            <td colSpan={3} className='p-3 border-x text-center'>
                                Tidak ada data
                            </td>
                        </tr>
                    ) : (
                        assignGroup.map((item, index) => (
                            <RowTable key={index} item={item} />
                        ))
                    )
                }

                </tbody>
            </table>
        </div>
    )
}