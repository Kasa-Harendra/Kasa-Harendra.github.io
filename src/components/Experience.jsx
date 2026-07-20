import React from 'react';
import SpotlightCard from './ui/SpotlightCard';
import FadeInSection from './ui/FadeInSection';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Professional <span className="text-purple-400">Experience</span>
          </h2>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          <FadeInSection delay={0.2}>
            <SpotlightCard className="h-full">
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Intern – High Performance Computing</h3>
                    <p className="text-purple-300">Centre for Development of Advanced Computing (CDAC), Pune</p>
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10">
                    Apr 2025 – June 2025
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 flex-grow">
                  Focused on "Graph Representation and Visualization of Telecom Traffic Data". 
                  Applied graph-based data structures and Python libraries to visualize complex datasets. 
                  Gained hands-on experience with GPU architecture and CUDA/OpenACC.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["HPC", "Python", "NetworkX", "CUDA", "Data Visualization"].map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-purple-900/30 text-purple-200 border border-purple-700/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;
