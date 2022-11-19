// import { useEffect } from 'react';
// import { Link } from 'react-router-dom'

const RowTable = ({ item }) => {
  



  return (
    <tr className='border-b'>
        <td className='p-3 border-x'>{ item.task }</td>
        <td className='p-3 border-x'>{ item.deadline }</td>
        {/* <td className='p-3 border-x'>{ time }</td> */}
        {/* <td className='p-3 border-x flex justify-center'>
            <Link to={`/submission/${item.id}`}>
                <span className='bg-blue-500 px-5 py-1 text-white rounded-md'>
                    Click
                </span>
            </Link>
        </td> */}
    </tr>
  )
}

export default RowTable;