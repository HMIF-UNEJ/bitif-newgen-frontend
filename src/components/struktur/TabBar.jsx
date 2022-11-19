import React from "react"

export default function TabBar({ tab, handleTab }){
    return (
        <div className="md:max-w-min sm:w-3/3 px-3 py-2 border border-green-500 mx-auto rounded-xl flex md:justify-center gap-x-2 overflow-x-auto">
            <div id={0} className={`${tab === 0 ? "bg-green-500" : "bg-white"} px-8 py-2 rounded-lg cursor-pointer`} onClick={handleTab}>
                <span className={`font-semibold ${tab === 0 ? "text-white" : "text-green-500"} text-sm`}>ALL</span>
            </div>

            <div id={1} className={`${tab === 1 ? "bg-green-500" : "bg-white"} px-8 py-2 rounded-lg cursor-pointer`} onClick={handleTab}>
                <span className={`font-semibold ${tab === 1 ? "text-white" : "text-green-500"} text-sm`}>BPH</span>
            </div>

            <div id={2} className={`${tab === 2 ? "bg-green-500" : "bg-white"} px-8 py-2 rounded-lg cursor-pointer`} onClick={handleTab}>
                <span className={`font-semibold ${tab === 2 ? "text-white" : "text-green-500"} text-sm`}>Sekretariat</span>
            </div>

            <div id={3} className={`${tab === 3 ? "bg-green-500" : "bg-white"} px-8 py-2 rounded-lg cursor-pointer`} onClick={handleTab}>
                <span className={`font-semibold ${tab === 3 ? "text-white" : "text-green-500"} text-sm`}>HUMAS</span>
            </div>

            <div id={4} className={`${tab === 4 ? "bg-green-500" : "bg-white"} px-8 py-2 rounded-lg cursor-pointer`} onClick={handleTab}>
                <span className={`font-semibold ${tab === 4 ? "text-white" : "text-green-500"} text-sm`}>ACARA</span>
            </div>

            <div id={5} className={`${tab === 5 ? "bg-green-500" : "bg-white"} px-8 py-2 rounded-lg cursor-pointer`} onClick={handleTab}>
                <span className={`font-semibold ${tab === 5 ? "text-white" : "text-green-500"} text-sm`}>KOMDIS</span>
            </div>

            <div id={6} className={`${tab === 6 ? "bg-green-500" : "bg-white"} px-8 py-2 rounded-lg cursor-pointer`} onClick={handleTab}>
                <span className={`font-semibold ${tab === 6 ? "text-white" : "text-green-500"} text-sm`}>PDD</span>
            </div>

            <div id={7} className={`${tab === 7 ? "bg-green-500" : "bg-white"} px-8 py-2 rounded-lg cursor-pointer`} onClick={handleTab}>
                <span className={`font-semibold ${tab === 7 ? "text-white" : "text-green-500"} text-sm`}>PERKAP</span>
            </div>

        </div>
    )
}