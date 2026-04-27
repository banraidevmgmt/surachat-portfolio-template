import { Languages } from 'lucide-react';
import type { Language, SiteContent } from '@/data/site';

const links = [
  { href: '#about', key: 'about' },
  { href: '#projects', key: 'projects' },
  { href: '#system-design', key: 'systemDesign' },
  { href: '#stack', key: 'stack' },
  { href: '#experience', key: 'experience' },
  { href: '#contact', key: 'contact' },
] as const;

interface NavbarProps {
  content: SiteContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function Navbar({ content, language, onLanguageChange }: NavbarProps) {
  const { navbar } = content.ui;

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="site-brand" href="#top">
          <span>{navbar.brandEyebrow}</span>
          <strong>{content.profile.name}</strong>
        </a>
        <div className="nav-controls">
          <nav aria-label="Primary">
            <ul className="nav-links">
              {links.map((link) => (
                <li key={link.href}>
                  <a className="nav-link" href={link.href}>
                    {navbar.links[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="language-switch" role="group" aria-label={navbar.languageLabel}>
            <span className="language-switch-label">
              <Languages size={15} />
              {navbar.languageLabel}
            </span>
            <div className="language-switch-buttons">
              {(['en', 'th'] as const).map((option) => (
                <button
                  aria-pressed={language === option}
                  className={`language-button${language === option ? ' language-button-active' : ''}`}
                  key={option}
                  onClick={() => onLanguageChange(option)}
                  type="button"
                >
                  {navbar.languageOptions[option]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
