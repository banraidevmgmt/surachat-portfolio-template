import SectionHeading from '@/components/SectionHeading';
import type { SiteContent } from '@/data/site';

interface StackProps {
  content: SiteContent;
}

export default function Stack({ content }: StackProps) {
  const { stackGroups, strengths } = content;
  const { stack } = content.ui;

  return (
    <section className="section" id="stack">
      <div className="container">
        <SectionHeading
          eyebrow={stack.eyebrow}
          title={stack.title}
          copy={stack.copy}
          right={stack.right}
        />

        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="stack-card stack-card-featured">
          <div className="panel-heading">
            <span className="eyebrow eyebrow-inline">{stack.strengthsEyebrow}</span>
            <h3>{stack.strengthsTitle}</h3>
          </div>

          <div className="strength-grid">
            {strengths.map((strength) => (
              <div className="strength-item" key={strength.title}>
                <h4>{strength.title}</h4>
                <p>{strength.impact}</p>
                <span>{strength.evidence}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
