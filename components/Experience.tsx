import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { data } = useLanguage();
  const { EXPERIENCE_DATA, RESUME_DATA } = data;

  return (
    <section id="experience" className="py-20 relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">{RESUME_DATA.labels.experience}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {RESUME_DATA.labels.professionalJourney}
          </h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent md:-translate-x-1/2 transition-colors duration-300"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((job, index) => {
               const isEven = index % 2 === 0;
               return (
                <div key={job.id} className={`relative flex flex-col md:flex-row items-center md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-cyan-500 rounded-full z-20 -translate-x-1/2 shadow-[0_0_10px_rgba(34,211,238,0.5)] flex items-center justify-center top-0 md:top-8 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="w-full md:w-[45%] hidden md:block"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-[45%] pl-20 md:pl-0">
                    <div className={`relative bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] shadow-md dark:shadow-none`}>
                        
                        {/* Mobile Connector */}
                        <div className="absolute top-2 -left-12 w-12 h-px bg-slate-300 dark:bg-slate-700 md:hidden"></div>
                        
                        {/* Desktop Connector */}
                        <div className={`hidden md:block absolute top-8 w-8 h-px bg-slate-300 dark:bg-slate-700 transition-all group-hover:bg-cyan-500/50 ${isEven ? '-right-8' : '-left-8'}`}></div>

                        {/* Card Header */}
                        <div className="flex flex-col gap-1 mb-4">
                             <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xl">
                                <Briefcase className="w-5 h-5" />
                                <h4>{job.role}</h4>
                             </div>
                             <h5 className="text-lg text-slate-800 dark:text-white font-medium">{job.company}</h5>
                             <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mt-1">
                                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {job.period}</span>
                                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                             </div>
                        </div>

                        {/* Card Content */}
                        <ul className="space-y-3">
                            {job.description.map((desc, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-600/50 dark:text-cyan-500/50 mt-1 flex-shrink-0 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                  </div>
                </div>
               );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;