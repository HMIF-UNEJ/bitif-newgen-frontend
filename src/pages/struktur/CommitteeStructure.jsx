import React from 'react';
import Jumbotron from "./part/Jumbotron";
import PartStruktur from "./part/Struktur";

function Struktur(){

    return (
        <>
            <div id='custom-all-panels' className='overflow-x-hidden'>
                <section className="first bg-green-500 h-[50vh]">
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