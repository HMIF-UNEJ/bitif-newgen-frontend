import React from "react"
import PartCekPoint from "../beranda/parts/CekPoint"
// import Biodata from "./part/Biodata"
// import TablePoint from "./part/TablePoint"
import bgBlue from '../../assets/image/bgBlue.svg';
export default function DetailPoint(){
    return (
        <div id='custom-all-panels' className='h-[100vh] overflow-x-hidden'>
            <section className="bg-blue-500 h-full" style={{ backgroundImage: `url(${bgBlue})` }}>
                <PartCekPoint />
            </section>
            {/* <section>
                <Biodata />
            </section>
            <section>
                <TablePoint />
            </section> */}
        </div>
    )
}