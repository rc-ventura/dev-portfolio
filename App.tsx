import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync React state with DOM on mount
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 font-sans transition-colors duration-300">
        <ParticleBackground isDark={isDark} />
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Statistics />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Volunteering />
          <Certifications />
        </main>

        <Footer />
        <ChatBot />
      </div>
    </LanguageProvider>
  );
}

export default App;