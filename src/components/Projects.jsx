import React, { useState } from 'react';
import BorderGlow from './ui/BorderGlow';
import FadeInSection from './ui/FadeInSection';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "GraphMind AI",
      description: <>Built a <span className="text-purple-400 font-semibold">multimodal GraphRAG platform</span> converting documents and media into <span className="text-purple-400 font-semibold">knowledge graphs</span> for advanced search. Engineered a <span className="text-purple-400 font-semibold">multi-tenant retrieval system</span> with <span className="text-purple-400 font-semibold">N-hop traversal</span>, <span className="text-purple-400 font-semibold">Celery processing</span>, and <span className="text-purple-400 font-semibold">Redis caching</span>, reducing <span className="text-purple-400 font-semibold">LLM hallucinations by 80%</span>.</>,
      tags: ["FastAPI", "Next.js", "React-Flow", "MongoDB", "Redis", "LangChain", "GraphRAG"],
      link: "",
      github: "https://github.com/Kasa-Harendra/GraphMind-AI"
    },
    {
      title: "OpenAgents",
      description: <>Developed a <span className="text-purple-400 font-semibold">Desktop AI assistant</span> featuring an <span className="text-purple-400 font-semibold">autonomous swarm of agents</span> for Research, Browser, and Terminal tasks, executing complex workflows with <span className="text-purple-400 font-semibold">90% accuracy</span>. Implemented dynamic flows via an <span className="text-purple-400 font-semibold">Orchestrator agent</span> with <span className="text-purple-400 font-semibold">per-agent LLM customization</span> and secure <span className="text-purple-400 font-semibold">Google OAuth</span>.</>,
      tags: ["FastAPI", "Electron", "React", "LangChain", "BrowserUse"],
      link: "",
      github: "https://github.com/Kasa-Harendra/OpenAgents"
    },
    {
      title: "GitOracle",
      description: <>Built a secure <span className="text-purple-400 font-semibold">AI-powered GitHub workspace</span> with <span className="text-purple-400 font-semibold">OAuth integration</span> for repository-wide chat, PR summarization, and file exploration without local cloning. Achieved <span className="text-purple-400 font-semibold">90%+ reduction in API calls</span> and <span className="text-purple-400 font-semibold">sub-second retrieval</span> using <span className="text-purple-400 font-semibold">hierarchical TreeRAG indexing</span>, <span className="text-purple-400 font-semibold">Celery workers</span>, and <span className="text-purple-400 font-semibold">multi-layer caching</span>.</>,
      tags: ["FastAPI", "Next.js", "MongoDB", "Redis", "Celery", "TreeRAG"],
      link: "",
      github: "https://github.com/Kasa-Harendra/AI-Github-Workspace"
    },
    {
      title: "BERT Sentiment Analysis Engine",
      description: <><span className="text-purple-400 font-semibold">Binary classification model</span> for sentiment analysis using a <span className="text-purple-400 font-semibold">BERT backbone</span>. Features a <span className="text-purple-400 font-semibold">custom classification head</span> with <span className="text-purple-400 font-semibold">Dropout regularization</span> for enhanced robustness.</>,
      tags: ["Python", "PyTorch", "Transformers", "BERT"],
      link: "https://imdb-sentiment-analysis-model.streamlit.app/",
      github: "https://github.com/Kasa-Harendra/IMDB-Sentiment-Analysis"
    },
    {
      title: "AI Data Tool (Conversational Tabular Analysis)",
      description: <><span className="text-purple-400 font-semibold">Conversational platform</span> for CSV/Excel analysis using plain English. Automates <span className="text-purple-400 font-semibold">statistical summarization</span> and visualization via a <span className="text-purple-400 font-semibold">real-time code execution engine</span>.</>,
      tags: ["Python", "Pandas", "LangChain", "Streamlit"],
      link: "https://ai-data-tool.aihub-vvitu.social/",
      github: "https://github.com/Kasa-Harendra/AI-Data-Tool-FARM"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/30">
      <div className="w-[90%] md:w-[70%] max-w-7xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
        </FadeInSection>
        <div className="flex flex-col gap-6 w-full">
          {visibleProjects.map((project, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <BorderGlow className="w-full"
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={7}
                glowRadius={40}
                glowIntensity={1.0}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
              >
                <div className="p-5 flex flex-col lg:flex-row gap-6 lg:items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex gap-4 mb-5 text-sm font-medium">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1.5">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                          GitHub
                        </a>
                      )}
                      {project.link && project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          Live Demo
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full text-[10px] uppercase tracking-wider font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-[40%] xl:w-[45%] shrink-0">
                    <div className="aspect-video bg-slate-800/40 rounded-lg flex items-center justify-center border border-slate-700/50 relative overflow-hidden group">
                      <span className="text-slate-500 text-xs font-medium group-hover:text-slate-400 transition-colors">Image Placeholder</span>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </FadeInSection>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
            >
              <span>{showAll ? 'Show Less' : 'Show More Projects'}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
