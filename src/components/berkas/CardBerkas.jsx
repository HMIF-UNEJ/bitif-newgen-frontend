import React from 'react';
import Berkas from "../../assets/logo/berkas.png"

export default function CardBerkas({ title, img = null, document }){
    return (
        <div className='border bg-white rounded-md p-5 w-full'>
            <div className='w-full h-36 overflow-hidden rounded-md'>
                <img src={img == null || img === 'assets/upload/document/thumbnail/default.png' ? Berkas : 'https://api-developer-bitif.hmifunej.id/'+img } className="w-full h-full object-cover" alt="berkas" />
            </div>
            <div className='mt-3 w-full'>
                <h1 className='text-xl font-semibold'>{ title }</h1>
                
     
                <a href={'https://api-developer-bitif.hmifunej.id/'+document} className='block text-center bg-blue-500 py-2 rounded text-white w-full mt-8'>Download</a>
            </div>
        </div>
    )
}
