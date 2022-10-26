import React from 'react';
import Jumbotron from './part/Jumbotron';
// import PartStruktur from "./part/Struktur";
import bgGreen from "../../assets/image/bgGreen.svg"
import TableSubmission from './part/TableSubmission';

function Submission(){

    return (
        <>
            <div id='custom-all-panels' className='overflow-x-hidden'>
                <section className="first bg-green-500 h-[50vh]" style={{ backgroundImage: `url(${bgGreen})` }}>
                    <Jumbotron title={"List Semua tugas dari ospek jurusan"}/>
                </section>
                <section className="">
                    <TableSubmission />
                </section>
            </div>
        </>
    )
}

export default Submission;