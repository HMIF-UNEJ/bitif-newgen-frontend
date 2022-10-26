import React from 'react'
import Jumbotron from './part/Jumbotron'
import bgGrean from "../../assets/image/bgGreen.svg"
import FormSubmission from './part/FormSubmission'

export default function DetailSubmission(){
    return (
        <div id='custom-all-panels' className='overflow-x-hidden'>
        <section className="first bg-green-500 h-[50vh]" style={{ backgroundImage: `url(${bgGrean})` }}>
            <Jumbotron title={"Form tugas"}/>
        </section>
        <section className="">
            <FormSubmission />
        </section>
    </div>
    )
}