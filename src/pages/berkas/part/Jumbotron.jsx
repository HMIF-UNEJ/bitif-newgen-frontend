import React from "react"

export default function Jumbotron(){
    return (
        <div className={"h-full w-full relative"}>
            <div className={"flex flex-col justify-center items-center h-full text-white"}>
                <h1 className={"font-bold text-5xl"}>Document dan materi yang diperlukan</h1>
                <div className={"flex gap-x-2 mt-5"}>
                    <span className={"inline-block h-1 w-48 bg-white rounded-full"}></span>
                    <span className={"inline-block h-1 w-5 bg-white rounded-full"}></span>
                    <span className={"inline-block h-1 w-2 bg-white rounded-full"}></span>
                </div>
                <p className={"mt-5 max-w-[1000px] text-center"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam obcaecati minus, veniam ullam quibusdam alias rerum dolorum tenetur dolore,
                </p>
            </div>
        </div>
    )
}