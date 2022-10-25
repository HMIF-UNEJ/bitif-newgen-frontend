import React from "react"
import Jumbotron from "./part/Jumbotron"
import PartDocument from "./part/PartDocument"
import bgBlue from '../../assets/image/bgBlue.svg';

function Document(){
    return (
        <div id='custom-all-panels' className='overflow-x-hidden'>
            <section className="bg-blue-500 h-[50vh]" style={{ backgroundImage: `url(${bgBlue})` }}>
                <Jumbotron/>
            </section>
            <section>
                <PartDocument/>
            </section>
        </div>
    )
}

export default Document