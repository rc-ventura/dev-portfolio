import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { data } = useLanguage();
  const { RESUME_DATA } = data;

  return (
    <footer id="contact" className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{RESUME_DATA.labels.footerText}</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                    I'm currently available for freelance work or full-time opportunities. Drop me a line if you'd like to chat!
                </p>
            </div>
            <div className="flex flex-col md:items-end gap-4">
                <a href={RESUME_DATA.socials.email} className="flex items-center gap-2 text-xl font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                    <Mail className="w-6 h-6" />
                    {RESUME_DATA.socials.email.replace('mailto:', '')}
                </a>
                <div className="flex gap-4">
                    <a href={RESUME_DATA.socials.github} className="p-2 bg-white dark:bg-slate-900 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800 shadow-sm">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href={RESUME_DATA.socials.linkedin} className="p-2 bg-white dark:bg-slate-900 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800 shadow-sm">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 dark:text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;