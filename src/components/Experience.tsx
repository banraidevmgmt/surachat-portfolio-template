import SectionHeading from '@/components/SectionHeading';
import type { SiteContent } from '@/data/site';

interface ExperienceProps {
  content: SiteContent;
}

export default function Experience({ content }: ExperienceProps) {
  const { experiences, weaknesses } = content;
  const { experience } = content.ui;

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          copy={experience.copy}
          right={experience.right}
        />

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="timeline-card" key={experience.title}>
              <h3>{experience.title}</h3>
              <span className="project-meta">{experience.meta}</span>
              <ul className="prose-list">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className="timeline-card timeline-card-secondary">
            <h3>{experience.growthEdgesTitle}</h3>
            <ul className="prose-list">
              {weaknesses.slice(0, 3).map((item) => (
                <li key={item.issue}>
                  <strong>{item.issue}</strong>
                  <span>{item.improvement}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
