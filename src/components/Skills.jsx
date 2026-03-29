import React from 'react';
import LogoLoop from './ui/LogoLoop';
import { Code2, Database, Terminal, Cpu, Globe, Layout, Server, Brain, GitBranch } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "Python", icon: <Code2 /> },
    { name: "Java", icon: <Code2 /> },
    { name: "C/C++", icon: <Code2 /> },
    { name: "MySQL", icon: <Database /> },
    { name: "HTML/CSS", icon: <Layout /> },
    { name: "JavaScript", icon: <Globe /> },
    { name: "React", icon: <Code2 /> },
    { name: "Node.js", icon: <Server /> },
    { name: "PyTorch", icon: <Brain /> },
    { name: "Git", icon: <GitBranch /> },
    { name: "Linux", icon: <Terminal /> },
    { name: "CUDA", icon: <Cpu /> },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & <span className="text-purple-400">Abilities</span></h2>
        <p className="text-gray-400">Technologies and tools I work with</p>
      </div>
      
      <LogoLoop items={skills} />
    </section>
  );
};

export default Skills;
