import React from "react"


export default function CardPanitia({ devisi, name, jabatan, img }){
    return (
        <div className={"p-3 rounded-md border shadow-xl"}>
            <div className={"relative flex justify-center w-full h-52 overflow-hidden"}>
                {/*label*/}
                <img src={ img } className={"absolute top-5 w-full h-48 object-cover rounded-md"} alt="pengurus"/>
                <div className="absolute top-2 py-1 text-xs w-2/3 bg-green-500 text-center rounded-md text-white">
                    { devisi }
                </div>
            </div>
            <div className={"text-center"}>
                <h2 className={"font-semibold text-slate-700 mt-3 text-center text-xl"}>{ name }</h2>
                <h4 className={"text-slate-500"}>{ jabatan }</h4>
            </div>
        </div>
    )
}