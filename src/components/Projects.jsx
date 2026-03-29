import React from 'react';
import MagicBento from './ui/MagicBento';

const Projects = () => {
  const projects = [
    {
      title: "High-Performance Multimodal RAG System",
      description: "Sophisticated chat interface enabling context-aware interactions with diverse file types. Features concurrent embedding generation and parallel document ingestion for 3–10x faster processing.",
      tags: ["Python", "LangChain", "ChromaDB", "Streamlit", "GenAI"],
      link: "#",
      github: "https://github.com/Kasa-Harendra/Multimodal-RAG-System"
    },
    {
      title: "Chat With Repo",
      description: "4-tier containerized application with a novel Tree-Based RAG system for precise code retrieval. Features stateful session management via Redis and an offline local Ollama LLM service.",
      tags: ["FastAPI", "React", "Redis", "LangChain", "Docker"],
      link: "https://chat-with-repo.aihub-vvitu.social/",
      github: "https://github.com/Kasa-Harendra/Chat-With-Repo-FARM"
    },
    {
      title: "AI Data Tool (Conversational Tabular Analysis)",
      description: "Conversational platform for CSV/Excel dataset analysis using plain English. Automates statistical summarization and visualization with a real-time transparent code execution engine.",
      tags: ["Python", "Pandas", "LangChain", "Streamlit"],
      link: "https://ai-data-tool.aihub-vvitu.social/",
      github: "https://github.com/Kasa-Harendra/AI-Data-Tool-FARM"
    },
    {
      title: "BERT Sentiment Analysis Engine",
      description: "Binary classification model for sentiment analysis utilizing a BERT backbone. Includes a custom classification head with Dropout regularization to enhance model robustness.",
      tags: ["Python", "PyTorch", "Transformers", "BERT"],
      link: "https://imdb-sentiment-analysis-model.streamlit.app/",
      github: "https://github.com/Kasa-Harendra/IMDB-Sentiment-Analysis"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <MagicBento 
          items={projects}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  );
};

export default Projects;
