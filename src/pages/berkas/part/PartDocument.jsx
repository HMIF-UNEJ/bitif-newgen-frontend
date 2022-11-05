import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import CardBerkas from "../../../components/berkas/CardBerkas";
import CardSkeleton from "../../../components/struktur/CardSkeleton";


export default function PartDocument(){
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timing = setTimeout(() => {
            setLoading(false)
        }, 1000)
        return () => clearTimeout(timing)
    })
    return (
        <div className="max-w-6xl mx-auto py-10">
            <div className="header">
                <h1 className="text-2xl font-semibold">Document yang diperlukan</h1>
                <p className="text-slate-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            { !loading ? (
                <div className="grid grid-cols-4 gap-x-2 gap-y-5 mt-10">
                    <h1 className="text-2xl">Data Belum ada</h1>
                    {/* <CardBerkas link="" title={""} />
                    <CardBerkas link="" title={""} />
                    <CardBerkas link="" title={""} />
                    <CardBerkas link="" title={""} /> */}
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-x-2 gap-y-5 mt-10">
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                </div>
            ) }
        </div>
    )
}