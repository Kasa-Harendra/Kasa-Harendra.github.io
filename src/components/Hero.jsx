import React from 'react';
import ElectricBorder from './ui/ElectricBorder';
import StarBorder from './ui/StarBorder';
import { Mail, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative p-4">
      <div className="text-center z-10 max-w-3xl">
        <div className="mb-8">
          <ElectricBorder>
            <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
               {/* Placeholder for profile image if not provided, using initials */}
               <span className="text-4xl font-bold text-white">KH</span>
               {/* <img src="/path/to/profile.jpg" alt="Kasa Harendra" className="w-full h-full object-cover" /> */}
            </div>
          </ElectricBorder>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Kasa <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Harendra</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Computer Science Undergraduate specializing in <span className="text-purple-300">Artificial Intelligence</span> and <span className="text-purple-300">High-Performance Computing</span>. 
          Passionate about building robust software solutions and solving complex security challenges.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <StarBorder onClick={() => window.location.href = 'mailto:harendrakasa@gmail.com'}>
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </StarBorder>
          <StarBorder onClick={() => window.open('https://linkedin.com', '_blank')}>
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </StarBorder>
          <StarBorder onClick={() => window.open('/resume.pdf', '_blank')}>
            <FileText className="mr-2 h-4 w-4" /> Resume
          </StarBorder>
        </div>
      </div>
    </section>
  );
};

export default Hero;
