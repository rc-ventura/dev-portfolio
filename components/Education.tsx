import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { data } = useLanguage();
  const { EDUCATION_DATA, RESUME_DATA } = data;

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">{RESUME_DATA.labels.education}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {RESUME_DATA.labels.academicJourney}
          </h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
            {EDUCATION_DATA.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors relative overflow-hidden group shadow-lg dark:shadow-none">
                     {/* Glow effect */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-cyan-600 dark:text-cyan-400">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                            </div>
                            <h5 className="text-xl text-cyan-600 dark:text-cyan-400 font-medium mb-4">{edu.institution}</h5>
                            
                            <div className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-400 text-sm mb-6">
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {edu.period}</span>
                                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {edu.location}</span>
                            </div>

                            <div className="space-y-3">
                                <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                                    Honors & Achievements
                                </p>
                                <ul className="space-y-2">
                                    {edu.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                            <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="px-4 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-mono font-bold">
                                {edu.gpa}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;