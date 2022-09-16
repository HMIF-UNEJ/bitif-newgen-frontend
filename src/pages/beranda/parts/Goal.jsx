import React from 'react';
import goalsOrnament from '../../../assets/image/goals.svg';

function PartGoal() {
    return (
      <div className="h-full md:px-0 grid grid-cols-1 gap-4 content-center">
        <div className="container items-center p-8 mx-auto xl:px-1">
            <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-4xl lg:text-5xl text-center">
                        <br />
                        <span className="block xl:inline dark:text-white mt-5 md:mt-0"> Apa Sih Tujuannya bit-IF ?</span>
                    </h2>
                </div>
                <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full">
                        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-3xl lg:text-4xl">
                            <span className="block xl:inline dark:text-white mt-5 md:mt-0"> Tujuan (Goals) :</span>
                        </h2>
                        <p className='text-justify text-white mt-5 '>
                            1. Sebagai tindak lanjut dari kegiatan Pengenalan Kehidupan Kampus (PKK). <br />
                            2. Mengenalkan iklim akademis dan berbagai elemen lainnya dari Program Studi Informatika Fakultas Ilmu Komputer Universitas Jember. <br />
                            3. Menciptakan dan mempererat tali silaturahmi antar Mahasiswa Informatika Fakultas Ilmu Komputer Universitas Jember. <br />
                            4. Sebagai media BEM, BPM, HMJ dan UKM untuk mempromosikan diri sebagai organisasi mahasiswa yang menaungi bidang-bidang tertentu sesuai dengan kompetensinya. <br />
                            5. Sebagai media pengenalan mahasiswa kepada berbagai kegiatan-kegiatan yang diselenggarakan di tingkat prodi, fakultas maupun universitas yang bertujuan untuk mewujudkan mahasiswa yang berprestasi, cerdas dan berintegritas.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full h-50 overflow-hidden rounded-md p-14 md:p-28 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                        <img src={goalsOrnament} alt="logo" className='rounded p-10 glass' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PartGoal;