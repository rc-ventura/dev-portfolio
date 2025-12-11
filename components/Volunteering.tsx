import React from 'react';
import { Heart, Calendar, MapPin, Building2, HandHeart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Volunteering: React.FC = () => {
  const { data } = useLanguage();
  const { VOLUNTEER_DATA, RESUME_DATA } = data;

  return (
    <section id="volunteer" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <div className="inline-flex p-3 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-500 dark:text-pink-400 ring-4 ring-pink-50 dark:ring-pink-900/10">
                <HandHeart className="w-8 h-8" />
             </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {RESUME_DATA.labels.volunteer}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {VOLUNTEER_DATA.map((vol, index) => (
                <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-pink-500/50 transition-colors relative overflow-hidden group shadow-lg dark:shadow-none flex flex-col h-full">
                     {/* Decorative Icon */}
                    <div className="absolute top-4 right-4 p-2 bg-pink-100 dark:bg-pink-900/20 rounded-full text-pink-500 dark:text-pink-400 group-hover:scale-110 transition-transform">
                        <Heart className="w-5 h-5" />
                    </div>
                    
                    <div className="mb-6">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{vol.role}</h4>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium mb-3">
                            <Building2 className="w-4 h-4 text-pink-500" />
                            <span>{vol.company}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-500 text-sm">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {vol.period}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {vol.location}</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-l-2 border-pink-200 dark:border-pink-900 pl-4">
                            {vol.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;