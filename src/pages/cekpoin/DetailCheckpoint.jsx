import React, { useState } from "react"
import PartCekPoint from "../beranda/parts/CekPoint"
import Biodata from "./part/Biodata"
import TablePoint from "./part/TablePoint"
import bgBlue from '../../assets/image/bgBlue.svg';
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
// import { useState } from "react";
export default function DetailPoint(){
    // const [data, setData] = useState(null);
    const [nim, setNim] = useState('');
    const [data, setData] = useState(null);
    const bottomRef = useRef(null);
    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setNim(value);
        // console.log(nim)
    };

    const handleClick = async () => {
        const res = await axios({
           method: "POST",
           url: "https://api-developer-bitif.hmifunej.id/api/get-find-nim",
           data: { nim }
        });
        // console.log(res.status)
        setData(res.data)
        
    }


    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
        console.log("ok")
    }, [data])
    
    return (
        <div id='custom-all-panels' className='h-[100vh] overflow-x-hidden'>
            <section className="bg-blue-500 h-full" style={{ backgroundImage: `url(${bgBlue})` }}>
                <PartCekPoint nim={nim} onChange={handleChange} onClick={handleClick} />
            </section>

            {
                data !== null ? (
                    <>
                        <section className="max-w-6xl mx-auto py-10 flex">
                            <Biodata data={data.dataParticipant[0]} />
                        </section>
                        <section className="max-w-6xl mx-auto py-10 flex">
                            <TablePoint data={data.listData} nilaiDefault={data.getDefaultPoint.default_score} />
                        </section>
                    </>
                ) : (
                    <div></div>
                )
            }
                
                
  
        </div>
    )
}