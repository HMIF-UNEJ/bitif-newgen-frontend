import React from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

import bgBlue from '../../assets/image/bgBlue.svg';
import bgRed from '../../assets/image/bgRed.svg';
import bgCyan from '../../assets/image/bgCyan.svg';
import bgGreen from '../../assets/image/bgGreen.svg';

import logoHMIF from '../../assets/logo/hmifLogo.png';
import ProfilLogo from '../../assets/logo/profilLogo.png';

import definitionOrnament from '../../assets/image/definition.svg';
import goalsOrnament from '../../assets/image/goals.svg';

// import { Container } from './styles';

function HomePage() {
    const [nim, setNim] = useState();
    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setNim(value);
      };

    // onChange((e) => {
    //     const re = /^[0-9\b]+$/;
    //     if (e.target.value === '' || re.test(e.target.value)) {
    //        this.setState({value: e.target.value})
    //     }
    // });

    useEffect(() => {
        let sections = gsap.utils.toArray("section"),
        currentSection = sections[0];

        gsap.defaults({overwrite: 'auto', duration: 0.3});
        gsap.set("#custom-all-panel", {minHeight: (sections.length * window.innerHeight)});

        sections.forEach((section, i) => {
            ScrollTrigger.create({
                start: () => (i - 0.5) * window.innerHeight,
                end: () => (i + 0.5) * window.innerHeight,
                onToggle: self => self.isActive && setSection(section)
            });
        });

        function setSection(newSection) {
            if (newSection !== currentSection) {
                gsap.to(currentSection, {scale: 0.6, autoAlpha: 0})
                gsap.to(newSection, {scale: 1, autoAlpha: 1});
                currentSection = newSection;
            }
        }
      });

    return (
        <div id='custom-all-panel' className='overflow-x-hidden'>
            <section className="first panel overflow-y-hidden bg-red-500" style={{ backgroundImage: `url(${bgRed})` }}>
                <div className="h-full md:px-0 grid grid-cols-1 gap-4 content-center">
                    <div className="container items-center p-8 mx-auto xl:px-1">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:w-1/2 md:px-3">
                                <div className="w-full">
                                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-3xl lg:text-4xl text-center mt-32 md:mt-0">
                                        <a href="https://hmifunej.id/" target="_blank">
                                            <span className='custom-bg-wg-animate py-2 italic shadow-xl pl-3 pr-5 rounded hover:shadow-2xl mr-2'>
                                                <img src={logoHMIF} alt="logo-hmif" className='w-10 mr-2 inline'/>
                                                HMIFUNEJ
                                            </span>
                                        </a>
                                        <span className="block xl:inline dark:text-white mt-5 md:mt-0"> Proudly Present :</span>
                                    </h1>
                                    <h2 className='text-center font-bold mt-12 text-3xl text-white sm:text-4xl md:text-2xl lg:text-3xl'>
                                        bit-IF 2K22
                                    </h2>
                                    <p className='text-center text-white mt-2 text-2xl text-white sm:text-3xl md:text-xl lg:text-2xl'>Better Integrated Transformation Informatics 2K22</p>
                                    <hr className='my-10' />
                                    <div className="text-center">
                                        <button className="btn gap-2 glass shadow-lg">
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#FFF" d="M9.5 15.584V8.416a.5.5 0 01.77-.42l5.576 3.583a.5.5 0 010 .842l-5.576 3.584a.5.5 0 01-.77-.42z"/>
                                                <path fill="#FFF" d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"/>
                                            </svg>
                                            Tonton
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="w-full h-auto overflow-hidden rounded-md p-28 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                                    <img src={ProfilLogo} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="panel overflow-y-hidden bg-blue-500" style={{ backgroundImage: `url(${bgBlue})` }}>
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
            </section>
            <section className="panel overflow-y-hidden bg-green-500" style={{ backgroundImage: `url(${bgGreen})` }}>
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
            </section>
            <section className="panel overflow-y-hidden bg-cyan-500" style={{ backgroundImage: `url(${bgCyan})` }}>
                <div className="h-full md:px-0 grid grid-cols-1 gap-4 content-center">
                    <div className="container items-center p-8 mx-auto xl:px-1">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:px-3">
                                <div className="w-full">
                                    <div className="glass py-10 text-center shadow-lg rounded-lg">
                                        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-3xl lg:text-4xl text-center">
                                            <span className="block xl:inline dark:text-white mt-5 md:mt-0"> Cek Poin Kamu Yuk :</span>
                                        </h2>
                                        <input type="text" value={nim} onChange={handleChange} placeholder="NIM..." className="input input-bordered input-info w-full max-w-md mt-5" />
                                        <div className="text-center mt-5">
                                            <button className="btn gap-2 glass shadow-lg">
                                                <svg className="w-6" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#FFF"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
                                                Cek Poin
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;