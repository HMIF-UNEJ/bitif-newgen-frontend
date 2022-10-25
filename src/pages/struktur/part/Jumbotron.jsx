import React from "react"

export default function Jumbotron(){
    return (
        <div className={"h-full w-full relative"}>
            <div className={"flex flex-col justify-center items-center h-full text-white"}>
                <h1 className={"font-bold text-5xl"}>Panitia <span className={"text-red-500"}>BIT IF</span> Periode 2022</h1>
                <div className={"flex gap-x-2 mt-5"}>
                    <span className={"inline-block h-1 w-48 bg-white rounded-full"}></span>
                    <span className={"inline-block h-1 w-5 bg-white rounded-full"}></span>
                    <span className={"inline-block h-1 w-2 bg-white rounded-full"}></span>
                </div>
                <p className={"mt-5 max-w-[1000px] text-center"}>
                    Kepanitian <strong>BIT IF</strong> adalah anggota dan pengurus himpunan informatika, yang diberikan tanggung jawab untuk mengenalkan jurusan informatika kepada mahasiswa baru.
                </p>
            </div>
        </div>
    )
}