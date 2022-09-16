import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PartJumbotron from './parts/Jumbotron';
import PartDefiniton from './parts/Definition';
import PartGoal from './parts/Goal';
import PartCekPoint from './parts/CekPoint';

import bgBlue from '../../assets/image/bgBlue.svg';
import bgRed from '../../assets/image/bgRed.svg';
import bgCyan from '../../assets/image/bgCyan.svg';
import bgGreen from '../../assets/image/bgGreen.svg';

function HomePage() {
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
                <PartJumbotron />
            </section>
            <section className="panel overflow-y-hidden bg-blue-500" style={{ backgroundImage: `url(${bgBlue})` }}>
                <PartDefiniton />
            </section>
            <section className="panel overflow-y-hidden bg-green-500" style={{ backgroundImage: `url(${bgGreen})` }}>
                <PartGoal />
            </section>
            <section className="panel overflow-y-hidden bg-cyan-500" style={{ backgroundImage: `url(${bgCyan})` }}>
                <PartCekPoint />
            </section>
        </div>
    );
}

export default HomePage;