import React from 'react';
import { Brain, Code2, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { data } = useLanguage();
  const { ABOUT_CARDS, RESUME_DATA } = data;

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />;
      case 1: return <Code2 className="w-10 h-10 text-green-600 dark:text-green-400 mb-4" />;
      case 2: return <Zap className="w-10 h-10 text-orange-500 dark:text-orange-400 mb-4" />;
      default: return <Brain className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-4" />;
    }
  };

  const getGradient = (index: number) => {
     switch (index) {
      case 0: return "from-blue-500/20 to-transparent";
      case 1: return "from-green-500/20 to-transparent";
      case 2: return "from-orange-500/20 to-transparent";
      default: return "from-cyan-500/20 to-transparent";
    }
  }

  return (
    <section id="about" className="py-20 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">{RESUME_DATA.labels.about}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Full Stack AI <span className="text-slate-900 dark:text-white">Engineer</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {RESUME_DATA.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_CARDS.map((card, index) => (
            <div key={index} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-b ${getGradient(index)} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
              <div className="relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl h-full hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300 flex flex-col items-center text-center shadow-lg dark:shadow-none">
                {getIcon(index)}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description.split(new RegExp(`(${card.highlightWords.join('|')})`, 'g')).map((part, i) => {
                    if (card.highlightWords.includes(part)) {
                        return <span key={i} className={`font-semibold ${index === 0 ? 'text-blue-600 dark:text-blue-400' : index === 1 ? 'text-green-600 dark:text-green-400' : 'text-orange-500 dark:text-orange-400'}`}>{part}</span>
                    }
                    return part;
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;