import React from 'react';
import DotGrid from './components/ui/DotGrid';
import StaggeredMenu from './components/ui/StaggeredMenu';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <DotGrid>
      <StaggeredMenu items={menuItems} />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        
        <footer className="py-8 text-center text-gray-500 text-sm bg-slate-950 border-t border-white/5">
          <p>© {new Date().getFullYear()} Kasa Harendra. Built with React & Tailwind.</p>
        </footer>
      </main>
    </DotGrid>
  );
}

export default App;
