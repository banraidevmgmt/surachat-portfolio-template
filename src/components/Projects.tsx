import SectionHeading from '@/components/SectionHeading';
import type { SiteContent } from '@/data/site';

interface ProjectsProps {
  content: SiteContent;
}

export default function Projects({ content }: ProjectsProps) {
  const { projects } = content;
  const { projects: projectUi } = content.ui;

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow={projectUi.eyebrow}
          title={projectUi.title}
          copy={projectUi.copy}
          right={`${projects.length} ${projectUi.selectedCountLabel}`}
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card${index === 0 ? ' project-card-featured' : ''}`}
              key={project.slug}
            >
              <div className="project-head">
                <span className="eyebrow eyebrow-inline">{project.year}</span>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
              </div>

              <div className="project-detail-grid">
                <div className="detail-block">
                  <span className="detail-label">{projectUi.problemLabel}</span>
                  <p>{project.problem}</p>
                </div>

                <div className="detail-block">
                  <span className="detail-label">{projectUi.solutionLabel}</span>
                  <p>{project.solution}</p>
                </div>

                <div className="detail-block">
                  <span className="detail-label">{projectUi.impactLabel}</span>
                  <p>{project.impact}</p>
                </div>
              </div>

              <div className="project-footer">
                <div>
                  <span className="detail-label">{projectUi.techLabel}</span>
                  <div className="chip-list">
                    {project.tech.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="detail-label">{projectUi.architectureLabel}</span>
                  <ul className="prose-list">
                    {project.architecture.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
