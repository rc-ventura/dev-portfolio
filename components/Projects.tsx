import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, Layers, Github, Star, GitFork, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Project, GitHubStats } from '../types';
import TechMarquee from './TechMarquee';

const Projects: React.FC = () => {
  const { data } = useLanguage();
  const { PROJECTS_DATA, RESUME_DATA } = data;
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS_DATA[0]);
  const [repoStats, setRepoStats] = useState<Record<string, GitHubStats>>({});

  // Sync state if language changes
  useEffect(() => {
    setActiveProject(PROJECTS_DATA[0]);
  }, [PROJECTS_DATA]);

  // Fetch GitHub Stats for projects
  useEffect(() => {
    const fetchRepoStats = async () => {
        const newStats: Record<string, GitHubStats> = {};

        await Promise.all(PROJECTS_DATA.map(async (project) => {
            if (!project.github) return;

            // Extract owner and repo from URL (e.g., https://github.com/owner/repo)
            try {
                const urlParts = project.github.split('/');
                // Basic check to see if it looks like a repo URL
                if (urlParts.length >= 5 && project.github.includes('github.com')) {
                    const owner = urlParts[urlParts.length - 2];
                    const repo = urlParts[urlParts.length - 1];
                    
                    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
                    if (response.ok) {
                        const data = await response.json();
                        newStats[project.id] = {
                            stars: data.stargazers_count,
                            forks: data.forks_count,
                            lastUpdated: new Date(data.updated_at).toLocaleDateString(),
                            language: data.language
                        };
                    }
                }
            } catch (error) {
                console.warn(`Failed to fetch stats for ${project.title}`, error);
            }
        }));

        setRepoStats(prev => ({ ...prev, ...newStats }));
    };

    fetchRepoStats();
  }, [PROJECTS_DATA]);

  return (
    <section id="projects" className="bg-slate-50 dark:bg-slate-950 pb-20 pt-10 transition-colors duration-300">
      
      {/* Featured Work Header */}
      <div className="text-center mb-10 pt-10">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-2">{RESUME_DATA.labels.featuredWork}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
             {RESUME_DATA.labels.projectPortfolio}
          </h2>
           <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            Explore innovative AI projects and automation solutions that demonstrate cutting-edge technology integration
          </p>
      </div>

      <TechMarquee />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project List */}
          <div className="lg:col-span-4 space-y-3">
            {PROJECTS_DATA.map((project) => {
              const stats = repoStats[project.id];
              return (
                <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`w-full text-left p-5 rounded-xl transition-all duration-300 border group ${
                    activeProject.id === project.id
                        ? 'bg-white dark:bg-slate-900/80 border-cyan-500 shadow-md dark:shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                        : 'bg-slate-50 dark:bg-slate-950 border-transparent hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${activeProject.id === project.id ? 'bg-cyan-500' : 'bg-slate-400 dark:bg-slate-600 group-hover:bg-cyan-500/50'}`}></div>
                        <div className="flex-1">
                            <h4 className={`font-bold text-base ${activeProject.id === project.id ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                            {project.title.split(' - ')[0]}
                            </h4>
                            <div className="flex justify-between items-center mt-0.5">
                                <p className="text-xs text-slate-500">{project.category}</p>
                                {stats && (
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                                        <span className="flex items-center gap-0.5"><Star className="w-3 h-3" /> {stats.stars}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        {activeProject.id === project.id && <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-500 ml-auto animate-pulse" />}
                    </div>
                </button>
              );
            })}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden min-h-[500px] flex flex-col relative group shadow-lg dark:shadow-none transition-colors duration-300">
                {/* Image Section */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10"></div>
                    <img 
                        src={activeProject.image} 
                        alt={activeProject.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-6 right-6 z-20 flex gap-3">
                         {activeProject.github && (
                             <a href={activeProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 dark:bg-slate-950/50 backdrop-blur-md text-white rounded-lg hover:bg-slate-900 dark:hover:bg-black border border-slate-700 transition-all text-sm font-medium">
                                 <Github className="w-4 h-4" /> Code
                             </a>
                         )}
                         <a href={activeProject.link} className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md text-slate-900 dark:text-white rounded-lg hover:bg-white dark:hover:bg-slate-950 border border-slate-200 dark:border-slate-700 transition-all text-sm font-medium">
                             Visit Site <ExternalLink className="w-4 h-4" />
                         </a>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 relative z-20 -mt-10">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                         <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 text-xs font-semibold border border-cyan-200 dark:border-cyan-900">
                            {activeProject.category}
                        </span>
                        
                        {/* Live GitHub Stats Badge */}
                        {repoStats[activeProject.id] && (
                            <div className="flex items-center gap-3 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400">
                                <span className="flex items-center gap-1" title="Stars">
                                    <Star className="w-3 h-3 text-yellow-500" /> {repoStats[activeProject.id].stars}
                                </span>
                                <span className="w-px h-3 bg-slate-300 dark:bg-slate-600"></span>
                                <span className="flex items-center gap-1" title="Forks">
                                    <GitFork className="w-3 h-3 text-slate-500" /> {repoStats[activeProject.id].forks}
                                </span>
                                {repoStats[activeProject.id].language && (
                                    <>
                                        <span className="w-px h-3 bg-slate-300 dark:bg-slate-600"></span>
                                        <span>{repoStats[activeProject.id].language}</span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{activeProject.title}</h3>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-cyan-600 dark:text-cyan-400 font-medium mb-2 flex items-center gap-2">
                                <Globe className="w-4 h-4" /> Project Overview
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {activeProject.description}
                            </p>
                        </div>

                        {activeProject.problemSolved && (
                            <div>
                                <h4 className="text-green-600 dark:text-green-400 font-medium mb-2 flex items-center gap-2">
                                    <Layers className="w-4 h-4" /> Problem Solved
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {activeProject.problemSolved}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                                {activeProject.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            {repoStats[activeProject.id] && (
                                <div className="text-xs text-slate-400 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> Updated: {repoStats[activeProject.id].lastUpdated}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;