import React from 'react';
import { 
  Database, Cloud, Server, Box, Globe, Cpu, Layers, Terminal, 
  Container, ShipWheel, Activity, LineChart, Code2, Bot, 
  Workflow, GitMerge, FileJson, LayoutDashboard, Network
} from 'lucide-react';

const TECH_ITEMS = [
  // Cloud & DevOps
  { name: 'AWS', icon: <Cloud className="w-8 h-8 text-orange-500" /> },
  { name: 'Google Cloud', icon: <Cloud className="w-8 h-8 text-blue-500" /> },
  { name: 'Docker', icon: <Container className="w-8 h-8 text-blue-600" /> },
  { name: 'Kubernetes', icon: <ShipWheel className="w-8 h-8 text-blue-700" /> },
  { name: 'Terraform', icon: <Layers className="w-8 h-8 text-purple-600" /> },
  { name: 'Linux', icon: <Terminal className="w-8 h-8 text-slate-700 dark:text-slate-300" /> },
  { name: 'GitHub Actions', icon: <Workflow className="w-8 h-8 text-slate-800 dark:text-white" /> },
  { name: 'GitLab', icon: <GitMerge className="w-8 h-8 text-orange-600" /> },
  
  // Monitoring
  { name: 'Prometheus', icon: <Activity className="w-8 h-8 text-orange-500" /> },
  { name: 'Grafana', icon: <LineChart className="w-8 h-8 text-orange-400" /> },

  // AI & Data
  { name: 'Python', icon: <Code2 className="w-8 h-8 text-yellow-500" /> },
  { name: 'OpenAI API', icon: <Bot className="w-8 h-8 text-green-600" /> },
  { name: 'Google GenAI', icon: <Bot className="w-8 h-8 text-blue-400" /> },
  { name: 'LangChain', icon: <Network className="w-8 h-8 text-emerald-500" /> },
  { name: 'LangGraph', icon: <Network className="w-8 h-8 text-emerald-700" /> },
  { name: 'CrewAI', icon: <Bot className="w-8 h-8 text-red-500" /> },
  { name: 'Gradio', icon: <LayoutDashboard className="w-8 h-8 text-orange-400" /> },
  { name: 'Streamlit', icon: <LayoutDashboard className="w-8 h-8 text-red-500" /> },

  // Web & DB
  { name: 'React', icon: <Globe className="w-8 h-8 text-cyan-400" /> },
  { name: 'JavaScript', icon: <FileJson className="w-8 h-8 text-yellow-400" /> },
  { name: 'MongoDB', icon: <Database className="w-8 h-8 text-green-500" /> },
  { name: 'PostgreSQL', icon: <Database className="w-8 h-8 text-blue-600" /> },
];

const TechMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950 py-10 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="flex w-max animate-scroll pause-on-hover">
        {[1, 2].map((set) => (
            <div key={set} className="flex gap-12 px-6">
                {TECH_ITEMS.map((item, index) => (
                <div key={`tech-${set}-${index}`} className="flex flex-col items-center gap-3 group cursor-pointer min-w-[80px]">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-slate-50 dark:group-hover:bg-slate-800 transition-all duration-300 shadow-md dark:shadow-lg transform group-hover:-translate-y-1">
                        {item.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors uppercase tracking-wider text-center">{item.name}</span>
                </div>
                ))}
            </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;