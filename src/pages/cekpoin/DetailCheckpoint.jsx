import React from "react"
import PartCekPoint from "../beranda/parts/CekPoint"
import Biodata from "./part/Biodata"
import TablePoint from "./part/TablePoint"
export default function DetailPoint(){
    return (
        <div id='custom-all-panels' className='overflow-x-hidden'>
            <section className="bg-blue-500">
                <PartCekPoint />
            </section>
            <section>
                <Biodata />
            </section>
            <section>
                <TablePoint />
            </section>
        </div>
    )
}