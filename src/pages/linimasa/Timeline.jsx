import React from "react"
import Jumbotron from "./parts/Jumbotron";
import PartTimeline from "./parts/Timeline";
import bgRed from '../../assets/image/bgRed.svg'
import bgBlue from '../../assets/image/bgBlue.svg';

export default function Timeline(){
    return (
        <>
            <div id='custom-all-panels' className='overflow-x-hidden'>
                <section className="h-[100vh]"  style={{ backgroundImage: `url(${bgRed})` }}>
                    <Jumbotron />
                </section>
                <section className="bg-gradient-to-tl from-sky-600 to-sky-400 overflow-y-hidden" style={{ backgroundImage: `url(${bgBlue})` }}>
                    <PartTimeline />
                </section>
            </div>
        </>
    )
}