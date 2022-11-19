import React from 'react'


export default function InputFile({ name, onChange, placeholder }){
    return (
        <>
            <input 
                type={"file"}
                name={name} 
                onChange={onChange} 
                placeholder={placeholder} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-3"
                />
        </>
    )
}