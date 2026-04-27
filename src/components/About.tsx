import SectionHeading from '@/components/SectionHeading';
import type { SiteContent } from '@/data/site';

interface AboutProps {
  content: SiteContent;
}

export default function About({ content }: AboutProps) {
  const { about } = content.ui;
  const { portfolioContent, profile } = content;

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={profile.tagline}
          copy={about.copy}
          right={`${about.rightPrefix} ${profile.location}`}
        />

        <div className="copy-grid about-grid">
          <article className="copy-card copy-card-featured">
            <span className="detail-label">{about.overviewLabel}</span>
            <p className="lead-copy">{portfolioContent.bio}</p>
          </article>

          <article className="copy-card copy-card-compact">
            <span className="detail-label">{about.teamsGetLabel}</span>
            <ul className="prose-list">
              {portfolioContent.sellingPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          {profile.about.map((paragraph) => (
            <article className="copy-card" key={paragraph}>
              <p>{paragraph}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
