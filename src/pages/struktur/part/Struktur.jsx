import React, {useEffect, useState} from "react";
import TabBar from "../../../components/struktur/TabBar";
import CardPanitia from "../../../components/struktur/CardPanitia";
import CardSkeleton from "../../../components/struktur/CardSkeleton";
import axios from "axios";


export default function PartStruktur(){
    const [tab, settab] = useState(0)
    const [loading, setLoading] = useState(true)
    const [structure, setStructure] = useState([])
    const [filter, setFilter] = useState('all');
    // const [role, setRole] = useState('all')
    // const role = ["Sekretaris", "Bendahara"]

    const handleTab = (e) => {
        setLoading(true)
        const timing = setTimeout(() => {
            setLoading(false)
        }, 1000);
        let id = Number(e.currentTarget.id)
        settab(() => {
            return parseInt(id)
        })
        let tabs = ""
        if (id === 0){
            tabs = "all"
        }else if(id === 1){
            tabs = "BPH"
        }else if(id === 2){
            tabs = "KSK"
        }else if (id === 3){
            tabs = "HUMAS"
        }else if(id === 4){
            tabs = "ACARA"
        }else if(id === 5){
            tabs = "KOMDIS"
        }else if (id === 6){
            tabs = "PDD"
        }else if (id === 7){
            tabs = "PERKAP"
        }else{
            tabs = "all"
        }
        setFilter(tabs)
        
        return () => clearTimeout(timing)
    }

    useEffect(() => {
        const fetchData = async () => {
            const struktur = await axios({
                method: "GET",
                url: "https://api-developer-bitif.hmifunej.id/api/get-structure"
            });
            setLoading(false)
            setStructure(struktur.data.structures)
        }
        fetchData()
    }, [])

    return (
        <div className={"relative py-20 px-5"}>
            <TabBar tab={tab} handleTab={handleTab} />
            { !loading ? (
                    <div className={"max-w-6xl  mx-auto grid grid-cols-3 mt-5 gap-y-10 gap-x-2 content-center"}>
                    {
                        structure.filter((item) => item.division === filter || filter === 'all').map((item, index) => (
                            <CardPanitia key={index} name={item.name} devisi={item.division} jabatan={item.role} img={"https://api-developer-bitif.hmifunej.id/assets/upload/structure/" + item.image } />
                        ))
                    }
                        {/* <CardPanitia name={"Arisandi Jeujanan"} devisi={"Badan pengurus harian"} jabatan={"ketua panitia"} img={"https://picsum.photos/200"} />
                        <CardPanitia name={"Arisandi Jeujanan"} devisi={"Badan pengurus harian"} jabatan={"ketua panitia"} img={"https://picsum.photos/200"} />
                        <CardPanitia name={"Arisandi Jeujanan"} devisi={"Badan pengurus harian"} jabatan={"ketua panitia"} img={"https://picsum.photos/200"} />
                        <CardPanitia name={"Arisandi Jeujanan"} devisi={"Badan pengurus harian"} jabatan={"ketua panitia"} img={"https://picsum.photos/200"} /> */}
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