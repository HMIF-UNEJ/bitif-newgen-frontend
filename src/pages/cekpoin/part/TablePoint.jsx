import React from "react";

const TablePoint = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 justify-center">
            <h1 className="text-2xl font-semibold text-slate-700">
                Point Yang telah didapatkan
            </h1>
            <table className="w-full mt-5">
                <tr>
                    <td class="border px-4 py-2">Sopan Santun</td>
                    <td class="border px-4 py-2">30</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Public Speaking</td>
                    <td class="border px-4 py-2">90</td>
                </tr>
                <tr>
                    <td class="border px-4 py-2">Leadirship</td>
                    <td class="border px-4 py-2">80</td>
                </tr>
                <tr className="bg-red-200">
                    <td class="border px-4 py-2">Pelanggaran</td>
                    <td class="border px-4 py-2">80</td>
                </tr>
                <tfoot>
                    <tr >
                        <td class="border px-4 py-2 font-bold">Total</td>
                        <td class="border px-4 py-2 font-bold">80</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TablePoint;