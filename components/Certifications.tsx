import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Certifications: React.FC = () => {
  const { data } = useLanguage();
  const { CERTIFICATIONS_DATA, RESUME_DATA } = data;

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {RESUME_DATA.labels.certifications}
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Selected certifications demonstrating my most relevant skills and training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors flex items-center gap-4 group shadow-md dark:shadow-none">
                    <div className="p-3 bg-blue-500/10 rounded-full text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{cert.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;