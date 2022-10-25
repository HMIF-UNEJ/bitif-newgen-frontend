import React from 'react';
import Berkas from "../../assets/logo/berkas.png"

export default function CardBerkas({ link, title }){
    return (
        <div className='border bg-white rounded-md p-5'>
            <div className='w-full h-36 overflow-hidden rounded-md'>
                <img src={Berkas} className="w-full h-full object-cover" alt="berkas" />
            </div>
            <div className='mt-3'>
                <h1 className='text-xl font-semibold'>E-Book</h1>
                <p className='text-sm text-slate-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                </p>
                <button className='bg-blue-500 py-2 rounded text-white w-full mt-3'>Download</button>
            </div>
        </div>
    )
}
