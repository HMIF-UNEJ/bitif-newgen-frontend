import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardBerkas from "../../../components/berkas/CardBerkas";
import CardSkeleton from "../../../components/struktur/CardSkeleton";


export default function PartDocument(){
    const [loading, setLoading] = useState(false)
    const [document, setDocument] = useState([])

    useEffect(() => {
        const getFetchDocument = () => {
            setLoading(true)
            axios({
                method: "GET",
                url: "https://api-developer-bitif.hmifunej.id/api/get-document"
            }).then((response) => {
                setDocument(response.data.documents);
            }).catch((err) => {
                setDocument([]);
            })
            setLoading(false)
        }
        getFetchDocument()
    }, [])

    return (
        <div className="max-w-6xl mx-auto py-10">
            <div className="header">
                <h1 className="text-2xl font-semibold">Document yang diperlukan</h1>
                <p className="text-slate-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            { !loading ? (
                <div className="grid grid-cols-4 gap-x-2 gap-y-5 mt-10">
                    {
                        document.length === 0 ?
                        <h1 className="text-2xl">Data Belum ada</h1>
                        : (
                             document.map(item => (
                                <CardBerkas title={item.title} img={item.thumbnail} document={item.document} />
                             ))
                        )
                    }
                    
            
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