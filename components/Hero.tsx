import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { data } = useLanguage();
  const { RESUME_DATA } = data;
  
  const [text, setText] = useState('');
  const fullText = RESUME_DATA.title + " |";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    
    const type = () => {
      const current = fullText;
      
      if (isDeleting) {
        setText(current.substring(0, index - 1));
        index--;
      } else {
        setText(current.substring(0, index + 1));
        index++;
      }

      if (!isDeleting && index === current.length) {
        setTimeout(() => isDeleting = true, 2000);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
      }
    };

    const timer = setInterval(type, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-slide-up mt-24"> 
          
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors duration-300">
            {RESUME_DATA.name.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">{RESUME_DATA.name.split(' ')[1]}</span>
          </h1>
          
          <div className="h-12 md:h-16 mb-8 flex items-center justify-center">
             <span className="text-2xl md:text-4xl text-blue-600 dark:text-blue-400 font-mono transition-colors duration-300">
              {text}<span className="animate-pulse text-slate-900 dark:text-white">|</span>
             </span>
          </div>
          
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 transition-colors duration-300">
             {RESUME_DATA.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="#projects"
              className="px-8 py-3.5 rounded-lg bg-cyan-600 dark:bg-cyan-500 text-white font-bold hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 dark:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              {RESUME_DATA.labels.viewWork}
            </a>
            <a 
              href="#contact"
              className="px-8 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:border-cyan-600 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all font-bold bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            >
              {RESUME_DATA.labels.contact}
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href={RESUME_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href={RESUME_DATA.socials.github} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white transition-all shadow-sm">
                <Github className="w-5 h-5" />
            </a>
            <a href={RESUME_DATA.socials.email} className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500 dark:hover:border-cyan-400 transition-all shadow-sm">
                <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="mt-20 animate-bounce text-slate-500 dark:text-slate-600">
            <p className="text-sm">{RESUME_DATA.labels.scroll}</p>
            <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent mx-auto mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;