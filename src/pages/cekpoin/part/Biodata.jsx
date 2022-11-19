

const Biodata = ({ data }) => {
    
    return ( 
        // <div className="max-w-6xl mx-auto py-10 flex justify-center">
            <div className="px-10 justify-center">
                <h1 className="font-bold text-3xl">Biodata</h1>
                <div className="mt-5">
                    <table>
                        <tr>
                            <td>Name</td>
                            <td className="px-3">:</td>
                            <td>{data.participant_name}</td>
                        </tr>
                        <tr>
                            <td>Group</td>
                            <td className="px-3">:</td>
                            <td>{data.group_name}</td>
                        </tr>
                        <tr>
                            <td>Nim</td>
                            <td className="px-3">:</td>
                            <td>{data.nim}</td>
                        </tr>
                        <tr>
                            <td>Angkatan</td>
                            <td className="px-3">:</td>
                            <td>2022</td>
                        </tr>
                        <tr>
                            <td>Jurusan</td>
                            <td className="px-3">:</td>
                            <td>Informatika</td>
                        </tr>
                        <tr>
                            <td>Fakultas</td>
                            <td className="px-3">:</td>
                            <td>Ilmu Komputer</td>
                        </tr>
                    </table>
                </div>
            </div>
        // </div>
     );
}
 
export default Biodata;