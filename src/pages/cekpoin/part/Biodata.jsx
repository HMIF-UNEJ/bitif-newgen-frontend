
const Biodata = () => {
    return ( 
        <div className="max-w-6xl mx-auto py-10 flex gap-x-2 justify-center">
            <div className="md:w-[30%] sm:w-full ">
                <img className="w-[14rem] h-[20rem] mx-auto object-cover" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="profile" />
                
            </div>
            <div className="md:w-[70%] sm:w-full px-20">
                <h1 className="font-bold text-3xl">Biodata</h1>
                <div className="mt-5">
                    <table>
                        <tr>
                            <td>Name</td>
                            <td className="px-3">:</td>
                            <td>Heri Setyawan</td>
                        </tr>
                        <tr>
                            <td>Nim</td>
                            <td className="px-3">:</td>
                            <td>202410103028</td>
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

        </div>
     );
}
 
export default Biodata;