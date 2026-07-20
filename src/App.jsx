import React from 'react';
import DotGrid from './components/ui/DotGrid';
import StaggeredMenu from './components/ui/StaggeredMenu';
import Dock from './components/ui/Dock';

import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FadeInSection from './components/ui/FadeInSection';

import { HomeIcon, FileIcon, Code2Icon, TimerIcon } from 'lucide-react'

const Separator = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-4"></div>
);

function App() {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  // const menuItems = [
  //   { id: "home", label: "Home", icon: <HomeIcon /> },
  //   { id: "skills", label: "Skills", icon: <Code2Icon /> },
  //   { id: "experience", label: "Experience", icon: <TimerIcon /> },
  //   { id: "projects", label: "Projects", icon: <FileIcon /> },
  // ];

  return (
    <DotGrid>
      <StaggeredMenu items={menuItems} />
      {/* <Dock items={menuItems} /> */}
      <main className="relative z-10">
        <Hero />
        <Separator />
        <Skills />
        <Separator />
        <Experience />
        <Separator />
        <Projects />
        <Separator />
        <Certifications />
        <Separator />
        <Contact />
        
        <footer className="py-8 text-center text-gray-500 text-sm bg-slate-950 border-t border-white/5">
          <p>© {new Date().getFullYear()} Kasa Harendra</p>
        </footer>
      </main>
    </DotGrid>
  );
}

export default App;
