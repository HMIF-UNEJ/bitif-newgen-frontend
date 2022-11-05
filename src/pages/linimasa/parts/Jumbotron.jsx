import React from "react"
import ScrollDown from "../../../assets/image/scroll-down.png"
export default function Jumbotron(){
    return (
        <div className={"h-full w-full relative"}>
            <div className={"flex flex-col justify-center items-center h-full text-white"}>
                <h1 className={"text-5xl"}>Time Line</h1>
                <p className={"mt-5"}>Yuk intip jadwal ospek jurusan informatika...</p>

                <img src={ScrollDown} className="w-12 h-12 object-cover cursor-pointer absolute bottom-10 left-[50%] translate-x-[-50%]"  alt="" />
            </div>
        </div>
    )
}