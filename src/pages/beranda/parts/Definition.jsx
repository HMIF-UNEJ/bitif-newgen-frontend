import React from 'react';
import definitionOrnament from '../../../assets/image/definition.svg';

// import { Container } from './styles';

function PartDefiniton() {
    return (
        <div className="h-full md:px-0 grid grid-cols-1 gap-4 content-center">
            <div className="container items-center p-8 mx-auto xl:px-1">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-4xl lg:text-5xl text-center">
                            <br />
                            <span className="block xl:inline dark:text-white mt-5 md:mt-0"> Apa Itu bit-IF ?</span>
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-50 overflow-hidden rounded-md p-14 md:p-28 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                            <img src={definitionOrnament} alt="logo" className='rounded p-10 glass' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:px-3">
                        <div className="w-full">
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-3xl lg:text-4xl">
                                <span className="block xl:inline dark:text-white mt-5 md:mt-0"> Definisi (Definition) :</span>
                            </h2>
                            <p className='text-justify text-white mt-5 text-xl text-white sm:text-2xl md:text-md lg:text-xl'>BIT-IF atau Better Integrated and Transformation of Informatics merupakan serangkaian kegiatan yang diselenggarakan pasca Pengenalan Kehidupan Kampus (PKK) sebagai usaha untuk lebih mengenalkan iklim akademis dan berbagai elemen lainnya dari masing-masing fakultas kepada mahasiswa baru.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartDefiniton;