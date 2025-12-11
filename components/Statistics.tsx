import React, { useState, useEffect } from 'react';
import { GitCommit, Star, FolderGit2, Flame, Users, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageStats } from '../types';

interface StatItem {
    label: string;
    value: string | number;
    icon: React.ReactNode;
}

const Statistics: React.FC = () => {
  const { data } = useLanguage();
  const labels = data.RESUME_DATA.labels;
  const githubUrl = data.RESUME_DATA.socials.github;

  const [stats, setStats] = useState<StatItem[]>([
    { label: labels.totalContributions, value: "-", icon: <GitCommit className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> },
    { label: "Stars Earned", value: "-", icon: <Star className="w-6 h-6 text-yellow-500 dark:text-yellow-400" /> },
    { label: "Followers", value: "-", icon: <Users className="w-6 h-6 text-green-600 dark:text-green-400" /> },
    { label: "Repositories", value: "-", icon: <FolderGit2 className="w-6 h-6 text-orange-500 dark:text-orange-400" /> },
  ]);

  const [languages, setLanguages] = useState<LanguageStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = githubUrl.split('/').pop();
        if (!username) throw new Error('Invalid GitHub URL');

        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error("Failed to fetch user data");
        const userData = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`);
        if (!reposRes.ok) throw new Error("Failed to fetch repos data");
        const reposData = await reposRes.json();

        if (Array.isArray(reposData)) {
            const totalStars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
            
            const langMap: Record<string, number> = {};
            let totalSize = 0;

            reposData.forEach((repo: any) => {
                if (repo.language && repo.size) {
                    langMap[repo.language] = (langMap[repo.language] || 0) + repo.size;
                    totalSize += repo.size;
                }
            });

            const colors: Record<string, string> = {
                "TypeScript": "bg-blue-600 dark:bg-blue-500",
                "JavaScript": "bg-yellow-400",
                "Python": "bg-green-600 dark:bg-green-500",
                "HTML": "bg-orange-600",
                "CSS": "bg-blue-400",
                "Vue": "bg-emerald-500",
                "Java": "bg-red-500",
                "Go": "bg-cyan-500",
                "Rust": "bg-orange-700",
                "Shell": "bg-gray-500",
                "HCL": "bg-purple-500",
                "Dockerfile": "bg-blue-400"
            };

            const langStats: LanguageStats[] = Object.entries(langMap)
                .map(([name, size]) => ({
                    name,
                    percent: Math.round((size / totalSize) * 100),
                    color: colors[name] || "bg-slate-400 dark:bg-slate-500"
                }))
                .sort((a, b) => b.percent - a.percent)
                .slice(0, 5);

            setLanguages(langStats);

            setStats([
                { label: labels.totalContributions, value: "1,500+", icon: <GitCommit className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> },
                { label: "Stars Earned", value: totalStars, icon: <Star className="w-6 h-6 text-yellow-500 dark:text-yellow-400" /> },
                { label: "Followers", value: userData.followers || 0, icon: <Users className="w-6 h-6 text-green-600 dark:text-green-400" /> },
                { label: "Repositories", value: userData.public_repos || 0, icon: <FolderGit2 className="w-6 h-6 text-orange-500 dark:text-orange-400" /> },
            ]);
        }
      } catch (error) {
        setStats([
            { label: labels.totalContributions, value: "1,200+", icon: <GitCommit className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> },
            { label: "Stars Earned", value: "15", icon: <Star className="w-6 h-6 text-yellow-500 dark:text-yellow-400" /> },
            { label: "Followers", value: "24", icon: <Users className="w-6 h-6 text-green-600 dark:text-green-400" /> },
            { label: "Repositories", value: "18", icon: <FolderGit2 className="w-6 h-6 text-orange-500 dark:text-orange-400" /> },
        ]);
        setLanguages([
            { name: "Python", percent: 40, color: "bg-green-600 dark:bg-green-500" },
            { name: "HCL (Terraform)", percent: 25, color: "bg-purple-500" },
            { name: "JavaScript", percent: 20, color: "bg-yellow-400" },
            { name: "TypeScript", percent: 15, color: "bg-blue-600 dark:bg-blue-500" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [githubUrl, labels]);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {labels.githubStats}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">{labels.realTimeData} <span className="font-mono text-cyan-600 dark:text-cyan-400">@rc-ventura</span></p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all duration-300 group shadow-lg dark:shadow-none min-h-[160px]">
                    {loading ? (
                         <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
                    ) : (
                        <>
                            <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-full group-hover:scale-110 transition-transform shadow-inner">
                                {stat.icon}
                            </div>
                            <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</h4>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                        </>
                    )}
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Most Used Languages */}
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 min-h-[300px] flex flex-col relative shadow-lg dark:shadow-none">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="text-cyan-600 dark:text-cyan-400">&lt;/&gt;</span> {labels.mostUsedLanguages}
                 </h3>
                 
                 <div className="flex-1 flex flex-col justify-center">
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {languages.map((lang) => (
                                <div key={lang.name}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{lang.name}</span>
                                        <span className="text-slate-500 dark:text-slate-400">{lang.percent}%</span>
                                    </div>
                                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full ${lang.color} relative transition-all duration-1000 ease-out`} 
                                            style={{ width: `${lang.percent}%` }}
                                        >
                                            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                 </div>
                 
                 <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline flex items-center justify-center gap-1 group">
                        View GitHub Profile <FolderGit2 className="w-3 h-3 transition-transform group-hover:scale-110" />
                    </a>
                 </div>
            </div>

            {/* Contribution Streak (Placeholder/Visual) */}
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 min-h-[300px] flex flex-col relative shadow-lg dark:shadow-none">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" /> {labels.contributionStreak}
                 </h3>
                 
                 <div className="flex-1 flex items-center justify-between px-4">
                     <div className="text-center">
                         <div className="text-4xl font-bold text-green-500 dark:text-green-400 mb-1">{loading ? '-' : '1,500+'}</div>
                         <div className="text-sm text-slate-500 dark:text-slate-400">{labels.totalContributions}</div>
                         <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">2022 - Present</div>
                     </div>

                     <div className="relative w-32 h-32 flex items-center justify-center">
                        <div className="absolute inset-0 border-4 border-slate-100 dark:border-slate-800 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin-slow"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 dark:text-white">{labels.active}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">{labels.status}</div>
                        </div>
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-slate-50 dark:bg-slate-950 p-1 rounded-full">
                            <Flame className="w-4 h-4 text-cyan-500" />
                        </div>
                     </div>

                     <div className="text-center">
                         <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{labels.high}</div>
                         <div className="text-sm text-slate-500 dark:text-slate-400">{labels.activityLevel}</div>
                          <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last 3 Months</div>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;