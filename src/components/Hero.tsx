import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import type { SiteContent } from '@/data/site';

interface HeroProps {
  content: SiteContent;
}

export default function Hero({ content }: HeroProps) {
  const { hiringScore, portfolioContent, profile, strengths } = content;
  const { hero } = content.ui;
  const capabilityCards = [
    {
      label: hero.capabilityLabels.systemAnalysis,
      value: hiringScore.systemAnalysis.score,
      note: hiringScore.systemAnalysis.note,
    },
    {
      label: hero.capabilityLabels.backend,
      value: hiringScore.backend.score,
      note: hiringScore.backend.note,
    },
    {
      label: hero.capabilityLabels.automation,
      value: hiringScore.automation.score,
      note: hiringScore.automation.note,
    },
    {
      label: hero.capabilityLabels.dataProcessing,
      value: hiringScore.dataProcessing.score,
      note: hiringScore.dataProcessing.note,
    },
  ];

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="panel hero-copy">
          <div className="hero-badge-row">
            <span className="hero-badge">
              <MapPin size={14} />
              {profile.location}
            </span>
            <span className="hero-badge hero-badge-soft">
              {hero.nicknameLabel}: {profile.nickname}
            </span>
          </div>
          <p className="hero-kicker">{hero.kicker}</p>
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-pill-grid">
            {portfolioContent.sellingPoints.map((point) => (
              <div className="hero-pill" key={point}>
                {point}
              </div>
            ))}
          </div>

          <div className="button-row">
            <a className="button" href={`mailto:${profile.email}`}>
              <Mail size={16} />
              {hero.contactButton}
            </a>
            <a className="button button-ghost" href="#projects">
              {hero.viewProjectsButton}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="panel metrics-panel">
            <div className="panel-heading">
              <span className="eyebrow eyebrow-inline">{hero.capabilityEyebrow}</span>
              <p>{profile.availability}</p>
            </div>

            <div className="metrics-grid">
              {capabilityCards.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <p className="metric-note">{metric.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel highlight-panel">
            <div className="panel-heading">
              <span className="eyebrow eyebrow-inline">{hero.operatingEyebrow}</span>
              <h3>{hero.operatingTitle}</h3>
            </div>
            <ul className="highlight-list">
              {strengths.slice(0, 3).map((strength) => (
                <li key={strength.title}>
                  <strong>{strength.title}</strong>
                  <span>{strength.impact}</span>
                </li>
              ))}
            </ul>

            <div className="hero-link-row">
              <a className="inline-link" href={profile.linkedin} rel="noreferrer" target="_blank">
                <Linkedin size={16} />
                {hero.socialLinks.linkedin}
              </a>
              <a className="inline-link" href={profile.githubPrimary} rel="noreferrer" target="_blank">
                <Github size={16} />
                {hero.socialLinks.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
