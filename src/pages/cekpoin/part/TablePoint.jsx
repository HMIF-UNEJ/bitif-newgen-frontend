import React from "react";

const TablePoint = ({ data, nilaiDefault }) => {

    const total = (data, nilaiDefault) => {
        let nilai = 0
        // data.map( (item) => );
        for (let index = 0; index < data.length; index++) {
            
            nilai += Number(data[index].point_value);
            
        }
        
        return Number(nilaiDefault) + nilai
    }

    return (
        <div className="px-10 justify-center w-full">
            <h1 className="text-2xl font-semibold text-slate-700">
                Point Yang telah didapatkan
            </h1>
            <table className="w-full mt-5">
                <tr className="bg-green-200">
                    <td className="border px-4 py-2">Nilai Awal</td>
                    <td className="border px-4 py-2">{ nilaiDefault }</td>
                </tr>
                {
                    data.map((item, index) => (
                        <tr className={item.point_value < 0 ? "bg-red-200" : ""} key={index}>
                            <td className="border px-4 py-2">{ item.category_name }</td>
                            <td className="border px-4 py-2">{ item.point_value }</td>
                        </tr>
                    ))
                }
                
                <tfoot>
                    <tr >
                        <td class="border px-4 py-2 font-bold">Total</td>
                        <td class="border px-4 py-2 font-bold">{ total(data, nilaiDefault) }</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TablePoint;