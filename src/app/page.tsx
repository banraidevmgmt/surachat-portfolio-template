'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import SystemDesign from '@/components/SystemDesign';
import Stack from '@/components/Stack';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import { getSiteContent, type Language } from '@/data/site';

const LANGUAGE_STORAGE_KEY = 'surachat-portfolio-language';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (storedLanguage === 'en' || storedLanguage === 'th') {
      setLanguage(storedLanguage);
      return;
    }

    const preferredLanguage = navigator.language.toLowerCase().startsWith('th') ? 'th' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const content = getSiteContent(language);

  return (
    <main className="page-shell">
      <Navbar content={content} language={language} onLanguageChange={setLanguage} />
      <Hero content={content} />
      <About content={content} />
      <Projects content={content} />
      <SystemDesign content={content} />
      <Stack content={content} />
      <Experience content={content} />
      <Contact content={content} />
    </main>
  );
}
