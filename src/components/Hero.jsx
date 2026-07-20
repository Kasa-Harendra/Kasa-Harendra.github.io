import React from 'react';
import StarBorder from './ui/StarBorder';
import TiltedCard from './ui/TiltedCard';
import { Linkedin, FileText, Download } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { SiMedium, SiGithub } from 'react-icons/si';
import resumePdf from '../assets/Kasa_Harendra.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative p-4 pt-20">
      <div className="z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left content: Profile Info */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Kasa <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Harendra</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Computer Science Undergraduate specializing in <span className="text-purple-300">Artificial Intelligence</span> and <span className="text-purple-300">High-Performance Computing</span>. 
            Passionate about building robust software solutions and solving complex security challenges.
          </p>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            
            <StarBorder onClick={() => window.open('https://www.linkedin.com/in/harendra-kasa-13a238329/', '_blank')}>
              <FaLinkedin className="mr-2 h-4 w-4" /> LinkedIn
            </StarBorder>
            <StarBorder onClick={() => window.open('https://github.com/Kasa-Harendra', '_blank')}>
              <SiGithub className="mr-2 h-4 w-4" /> Github
            </StarBorder>
            <StarBorder onClick={() => window.open('https://medium.com/@harendrakasa', '_blank')}>
              <SiMedium className="mr-2 h-4 w-4" /> Medium
            </StarBorder>
            <div className="relative group">
              <StarBorder onClick={() => window.open(resumePdf, '_blank')}>
                <FileText className="mr-2 h-4 w-4" /> Resume
              </StarBorder>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const link = document.createElement('a');
                  link.href = resumePdf;
                  link.download = 'Kasa_Harendra_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-purple-600 hover:bg-purple-700 text-white p-1.5 rounded-full shadow-lg z-10"
                title="Download Resume"
              >
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right content: TiltedCard Profile */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end md:pr-12 lg:pr-20 mb-8 md:mb-0">
          <TiltedCard
            imageSrc="src/assets/me.jpg"
            altText="Kasa Harendra Profile"
            captionText="Kasa Harendra"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text font-bold text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm shadow-xl">
                Kasa Harendra
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
