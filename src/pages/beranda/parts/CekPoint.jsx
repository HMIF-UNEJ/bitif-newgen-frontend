import React from 'react';


// import { Container } from './styles';

function PartCekPoint({ nim, onChange, onClick }) {


  return (
    <div className="h-full md:px-0 grid grid-cols-1 gap-4 content-center">
        <div className="container items-center p-8 mx-auto xl:px-1">
            <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:px-3">
                    <div className="w-full">
                        <div className="glass py-10 text-center shadow-lg rounded-lg">
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-3xl lg:text-4xl text-center">
                                <span className="block xl:inline dark:text-white mt-5 md:mt-0"> Cek Poin Kamu Yuk :</span>
                            </h2>
                            <input type="text" value={nim} onChange={onChange} placeholder="NIM..." className="input input-bordered input-info w-full max-w-md mt-5" />
                            <div className="text-center mt-5">
                            
                                <button className="btn gap-2 glass shadow-lg" onClick={onClick}>
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
  );
}

export default PartCekPoint;