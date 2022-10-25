import React from "react";
import Skeleton from 'react-loading-skeleton'

export default function CardSkeleton(){
    return (
        <div className={"p-3 rounded-md border shadow-xl"}>
            <div className={"relative flex justify-center w-full h-48 overflow-hidden"}>
                {/*label*/}
                <Skeleton height={"100%"} width={500}/>
            </div>
            <div className={"text-center"}>
                <h2 className={"font-semibold text-slate-700 mt-3 text-center text-xl"}>
                    <Skeleton width={"100%"} height={30}/>
                </h2>
                <h4 className={"text-slate-500"}>
                    <Skeleton width={"100%"} height={20}/>
                </h4>
            </div>
        </div>
    )
}