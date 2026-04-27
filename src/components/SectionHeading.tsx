import { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: string;
  copy?: string;
  right?: ReactNode;
}

export default function SectionHeading({ eyebrow, title, copy, right }: Props) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
      </div>
      {right ? <div className="section-heading-aside">{right}</div> : null}
    </div>
  );
}
