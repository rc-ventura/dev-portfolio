import React, { useState } from 'react';
import { Database, Server, Cpu, Globe, Terminal, Code, Layers, Activity, LayoutDashboard, Cloud, Bot, Network, GitBranch, ShipWheel } from 'lucide-react';
import { Skill } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: 'JavaScript (ES6+)', category: 'frontend', icon: <Code className="w-6 h-6" /> },
  { name: 'React.js', category: 'frontend', icon: <Globe className="w-6 h-6" /> },
  { name: 'Gradio UI', category: 'frontend', icon: <LayoutDashboard className="w-6 h-6" /> },
  { name: 'Streamlit', category: 'frontend', icon: <LayoutDashboard className="w-6 h-6" /> },

  // Backend
  { name: 'Python', category: 'backend', icon: <Terminal className="w-6 h-6" /> },
  { name: 'MongoDB', category: 'backend', icon: <Database className="w-6 h-6" /> },
  { name: 'PostgreSQL', category: 'backend', icon: <Database className="w-6 h-6" /> },
  { name: 'Linux OS', category: 'backend', icon: <Terminal className="w-6 h-6" /> },

  // AI / ML
  { name: 'OpenAI API/SDK', category: 'ai', icon: <Bot className="w-6 h-6" /> },
  { name: 'Google GenAI SDK', category: 'ai', icon: <Bot className="w-6 h-6" /> },
  { name: 'LangChain', category: 'ai', icon: <Network className="w-6 h-6" /> },
  { name: 'LangGraph', category: 'ai', icon: <Network className="w-6 h-6" /> },
  { name: 'CrewAI', category: 'ai', icon: <Cpu className="w-6 h-6" /> },

  // DevOps & Tools
  { name: 'AWS', category: 'tools', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Google Cloud', category: 'tools', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Docker', category: 'tools', icon: <Layers className="w-6 h-6" /> },
  { name: 'Kubernetes', category: 'tools', icon: <ShipWheel className="w-6 h-6" /> },
  { name: 'Terraform', category: 'tools', icon: <Layers className="w-6 h-6" /> },
  { name: 'GitHub Actions', category: 'tools', icon: <GitBranch className="w-6 h-6" /> },
  { name: 'GitLab CI', category: 'tools', icon: <GitBranch className="w-6 h-6" /> },
  { name: 'Prometheus', category: 'tools', icon: <Activity className="w-6 h-6" /> },
  { name: 'Grafana', category: 'tools', icon: <Activity className="w-6 h-6" /> },
];

const Skills: React.FC = () => {
  const { data } = useLanguage();
  const { RESUME_DATA } = data;
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'tools'>('all');

  const filteredSkills = filter === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-20 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">{RESUME_DATA.labels.techSkills}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {RESUME_DATA.labels.techProficiency}
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {RESUME_DATA.labels.techSubtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
            {['all', 'ai', 'tools', 'backend', 'frontend'].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 capitalize ${
                        filter === cat 
                        ? 'bg-cyan-600 dark:bg-cyan-500 text-white border-cyan-600 dark:border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                        : 'bg-transparent text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:border-cyan-600 dark:hover:border-cyan-400 hover:text-cyan-700 dark:hover:text-white'
                    }`}
                >
                    {cat === 'tools' ? 'DevOps & Cloud' : cat === 'ai' ? 'AI / Agents' : cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
                key={index}
                className="group p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-4 shadow-sm dark:shadow-none"
            >
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-500/10">
                    {skill.icon}
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;