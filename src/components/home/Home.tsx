import React from 'react';
import IntroCard from '../intro-card/IntroCard';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';

export const Home: React.FC = () => {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      {/* Section 1 */}
      <section className="snap-start min-h-screen flex md:items-center justify-center">
        <IntroCard/>
      </section>

      {/* Section 2 */}
      <section className="snap-start min-h-screen flex md:items-top justify-center">
        <Experience/>
      </section>

      {/* Section 3 */}
      <section className="snap-start min-h-screen flex md:items-center justify-center">
        <Skills/>
      </section>
    </div>
  );
};
