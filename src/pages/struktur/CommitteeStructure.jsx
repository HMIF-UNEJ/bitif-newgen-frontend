import React from 'react';
import Jumbotron from "./part/Jumbotron";
import PartStruktur from "./part/Struktur";
import bgGreen from "../../assets/image/bgGreen.svg"
function Struktur(){
    

    return (
        <>
            <div id='custom-all-panels' className='overflow-x-hidden'>
                <section className="first bg-green-500 h-[50vh]" style={{ backgroundImage: `url(${bgGreen})` }}>
                    <Jumbotron/>
                </section>
                <section className="">
                    <PartStruktur/>
                </section>
            </div>
        </>
    )
}

export default Struktur;