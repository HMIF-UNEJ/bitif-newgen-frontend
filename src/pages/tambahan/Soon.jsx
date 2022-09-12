import React from 'react';
import ProfilLogo from '../../assets/logo/profilLogo.png';
import { useState, useEffect } from 'react';
import '../../App.css';

function SoonPage() {
    const [expiryTime, setExpiryTime] = useState("8 nov 2022 00:00:00");
    const [countdownTime, setCountdownTime]= useState(
        {
            countdownDays:'',
            countdownHours:'',
            countdownlMinutes:'',
            countdownSeconds:''
        }
    );
    const countdownTimer=()=>{

        const timeInterval= setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime(); 
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
        
            const runningCountdownTime={
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }
        
            setCountdownTime(runningCountdownTime);
        
            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }
        
            }, 1000);
    }
        
    useEffect(() => {
        countdownTimer();
    }); 

    return (
        <div>
            <section className="h-screen px-2 py-32 md:px-0 grid grid-cols-1 gap-4 content-center custom-bg-animate">
                <div className="container items-center p-8 mx-auto xl:px-1">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl text-center">
                                    <span className="block xl:inline dark:text-white">Ready To Launch In :</span>
                                </h1>
                                <div className="grid grid-flow-col gap-5 text-center pl-20 auto-cols-max">
                                    {expiryTime !== false ? 
                                        <>
                                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-white text-black">
                                                <span className="countdown font-mono text-5xl">
                                                    {countdownTime.countdownDays}
                                                </span>
                                                days
                                            </div> 
                                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-white text-black">
                                                <span className="countdown font-mono text-5xl">
                                                    0{countdownTime.countdownHours}
                                                </span>
                                                hours
                                            </div> 
                                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-white text-black">
                                                <span className="countdown font-mono text-5xl">
                                                    {countdownTime.countdownMinutes}
                                                </span>
                                                min
                                            </div> 
                                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-white text-black">
                                                <span className="countdown font-mono text-5xl">
                                                    {countdownTime.countdownSeconds}
                                                </span>
                                                sec
                                            </div>
                                        </>
                                        : <p>Deal has been Expired</p>

                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden rounded-md p-5 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                                <img src={ProfilLogo} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default SoonPage;