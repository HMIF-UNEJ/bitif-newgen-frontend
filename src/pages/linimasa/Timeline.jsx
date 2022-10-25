import React from "react"
import Jumbotron from "./parts/Jumbotron";
import PartTimeline from "./parts/Timeline";


export default function Timeline(){
    return (
        <>
            <div id='custom-all-panels' className='overflow-x-hidden'>
                <section className="first bg-red-500 h-[50vh]">
                    <Jumbotron />
                </section>
                <section className="bg-gradient-to-tl from-sky-600 to-sky-400 overflow-y-hidden">
                    <PartTimeline />
                </section>
            </div>
        </>
    )
}