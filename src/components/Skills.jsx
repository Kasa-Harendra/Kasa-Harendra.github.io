import React from 'react';
import LogoLoop from './ui/LogoLoop';
import FadeInSection from './ui/FadeInSection';
import { 
  SiPython, SiCplusplus, SiMysql,
  SiPytorch, SiFastapi, SiDjango,
  SiGit, SiLinux, SiOllama, SiHuggingface,
  SiLangchain, SiSqlalchemy, SiScikitlearn, SiJupyter, SiPandas, SiNumpy,
  SiDocker,
  SiGitforwindows,
  SiMongodb,
  SiSqlite,
  SiNvidia,
  SiN8N,
  SiGooglegemini,
  SiC
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      items: [
        { name: "Python", icon: <SiPython /> },
        { name: "C", icon: <SiC /> },
        { name: "Java", icon: <FaJava /> },
      ]
    },
    // {
    //   category: "Technical Skills",
    //   items: [
    //     { name: "Web Scraping" },
    //     { name: "Data Analysis using Python" },
    //   ]
    // },
    {
      category: "Libraries/Frameworks",
      items: [
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn /> },
        { name: "Pandas", icon: <SiPandas />},
        // { name: "Numpy", icon: <SiNumpy /> },
        // { name: "Django", icon: <SiDjango /> },
        { name: "Langchain", icon: <SiLangchain /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <SiGit /> },
        { name: "Visual Studio Code", icon: <VscVscode /> },
        { name: "Jupyter Notebook", icon: <SiJupyter /> },
        { name: "Docker", icon: <SiDocker/>},
        { name: "Ollama", icon: <SiOllama /> },
      ]
    },
    {
      category: "Platforms",
      items: [
        { name: "Linux", icon: <SiLinux /> },
        { name: "Windows", icon: <SiGitforwindows /> },
        { name: "HuggingFace", icon: <SiHuggingface /> },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Sqlite", icon: <SiSqlite />}
      ]
    },
    {
      category: "Additional Skills",
      items: [
        { name: "CUDA", icon: <SiNvidia /> },
        { name: "Gemini", icon: <SiGooglegemini />},
        { name: "n8n", icon: <SiN8N />}
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & <span className="text-purple-400">Abilities</span></h2>
          <p className="text-gray-400">Technologies and tools I work with</p>
        </FadeInSection>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-0">
        {skillCategories.map((group, idx) => (
          <FadeInSection key={idx} delay={idx * 0.1}>
            <div className="flex flex-col md:flex-row items-center border-b border-slate-800/30 last:border-b-0 py-3">
              <div className="w-full md:w-1/4 flex items-center md:justify-start shrink-0">
                <h3 className="text-base font-semibold text-purple-400 uppercase tracking-wider">{group.category}</h3>
              </div>
              <div className="w-full md:w-3/4 flex items-center overflow-hidden">
                <LogoLoop items={group.items} />
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Skills;
