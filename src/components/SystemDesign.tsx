import SectionHeading from '@/components/SectionHeading';
import type { SiteContent } from '@/data/site';

interface SystemDesignProps {
  content: SiteContent;
}

export default function SystemDesign({ content }: SystemDesignProps) {
  const { caseStudyQuestions, designPrinciples, skillAnalysis, systemProfile } = content;
  const { systemDesign } = content.ui;

  return (
    <section className="section" id="system-design">
      <div className="container">
        <SectionHeading
          eyebrow={systemDesign.eyebrow}
          title={systemDesign.title}
          copy={systemDesign.copy}
          right={systemDesign.right}
        />

        <div className="principles-grid">
          {designPrinciples.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}

          <article className="principle-card principle-card-featured">
            <div className="panel-heading">
              <span className="eyebrow eyebrow-inline">{systemDesign.capabilityEyebrow}</span>
              <h3>{systemDesign.capabilityTitle}</h3>
            </div>

            <div className="analysis-list">
              {skillAnalysis.map((item) => (
                <div className="analysis-row" key={item.category}>
                  <div>
                    <strong>{item.category}</strong>
                    <p>{item.reasoning}</p>
                  </div>
                  <span className="analysis-score">{item.level}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="principle-card">
            <h3>{systemDesign.reviewQuestionsTitle}</h3>
            <ul className="prose-list">
              {caseStudyQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </article>

          <article className="principle-card">
            <h3>{systemDesign.systemProfileTitle}</h3>
            <div className="system-profile">
              <div className="system-profile-item">
                <span>{systemDesign.consistencyLabel}</span>
                <p>{systemProfile.consistency}</p>
              </div>
              <div className="system-profile-item">
                <span>{systemDesign.asyncLabel}</span>
                <p>{systemProfile.asyncDesign}</p>
              </div>
              <div className="system-profile-item">
                <span>{systemDesign.failureLabel}</span>
                <p>{systemProfile.failureHandling}</p>
              </div>
              <div className="system-profile-item">
                <span>{systemDesign.businessLabel}</span>
                <p>{systemProfile.businessUnderstanding}</p>
              </div>
            </div>
            <p className="verdict-callout">{systemProfile.verdict}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
