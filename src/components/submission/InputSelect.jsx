import React from 'react'


export default function InputSelect({ name, onChange, data }){
    return (
        <>
            <select
                name={name} 
                onChange={onChange} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-3"
            >
                <option key={0} value={""}>-</option>

                {
                    data ? data.map((item, index) => <option key={index} value={item}>{item}</option>) : <></>
                }
            </select>
        </>
    )
}