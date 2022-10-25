import React from 'react';
import logoHMIF from '../../../assets/logo/hmifLogo.png';
import ProfilLogo from '../../../assets/logo/profilLogo.png';

function PartJumbotron() {
  return (
    <div className="h-full md:px-0 grid grid-cols-1 gap-4 content-center">
        <div className="container items-center p-8 mx-auto xl:px-1">
            <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-3xl lg:text-4xl text-center mt-32 md:mt-0">
                            <a href="https://hmifunej.id/" target="_blank" rel="noreferrer">
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
                        <p className='text-center text-white mt-2 text-2xl sm:text-3xl md:text-xl lg:text-2xl'>Better Integrated Transformation Informatics 2K22</p>
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
  );
}

export default PartJumbotron;