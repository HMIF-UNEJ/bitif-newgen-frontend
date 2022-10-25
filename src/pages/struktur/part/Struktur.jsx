import React, {useEffect, useState} from "react";
import TabBar from "../../../components/struktur/TabBar";
import CardPanitia from "../../../components/struktur/CardPanitia";
import CardSkeleton from "../../../components/struktur/CardSkeleton";



export default function PartStruktur(){
    const [tab, settab] = useState(0)
    const [loading, setLoading] = useState(true)
    const handleTab = (e) => {
        setLoading(true)
        const timing = setTimeout(() => {
            setLoading(false)
        }, 1000);
        let id = e.currentTarget.id
        settab(() => {
            return parseInt(id)
        })
        return () => clearTimeout(timing)
    }

    useEffect(() => {
        const timing = setTimeout(() => {
            setLoading(false)
        }, 1000);
        return () => clearTimeout(timing)
    })

    return (
        <div className={"relative py-20 px-5"}>
            <TabBar tab={tab} handleTab={handleTab} />
            { !loading ? (
                    <div className={"max-w-6xl  mx-auto grid grid-cols-3 mt-5 gap-y-10 gap-x-2 content-center"}>
                        <CardPanitia name={"Arisandi Jeujanan"} devisi={"Badan pengurus harian"} jabatan={"ketua panitia"} img={"https://picsum.photos/200"} />
                        <CardPanitia name={"Arisandi Jeujanan"} devisi={"Badan pengurus harian"} jabatan={"ketua panitia"} img={"https://picsum.photos/200"} />
                        <CardPanitia name={"Arisandi Jeujanan"} devisi={"Badan pengurus harian"} jabatan={"ketua panitia"} img={"https://picsum.photos/200"} />
                        <CardPanitia name={"Arisandi Jeujanan"} devisi={"Badan pengurus harian"} jabatan={"ketua panitia"} img={"https://picsum.photos/200"} />
                        <CardPanitia name={"Arisandi Jeujanan"} devisi={"Badan pengurus harian"} jabatan={"ketua panitia"} img={"https://picsum.photos/200"} />
                    </div>
                ) : (
                <div className={"max-w-6xl  mx-auto grid grid-cols-3 mt-5 gap-y-10 gap-x-2 content-center"}>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                </div>
                )
            }
        </div>
    )
}