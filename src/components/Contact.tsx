import SectionHeading from '@/components/SectionHeading';
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { SiteContent } from '@/data/site';

interface ContactProps {
  content: SiteContent;
}

export default function Contact({ content }: ContactProps) {
  const { profile } = content;
  const { contact } = content.ui;

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            copy={profile.availability}
          />
          <div className="copy-card">
            <p>{contact.focusBody}</p>
            <p className="contact-note">
              {contact.locationNotePrefix} {profile.location}. {contact.locationNoteSuffix}
            </p>
            <div className="contact-chip-row">
              <a className="contact-chip" href={`tel:${profile.phone}`}>
                <Phone size={16} />
                {profile.phone}
              </a>
              <a className="contact-chip" href={`https://line.me/ti/p/~${profile.line}`} rel="noreferrer" target="_blank">
                <MessageCircle size={16} />
                {contact.lineLabel}: {profile.line}
              </a>
              <span className="contact-chip">
                <MapPin size={16} />
                {profile.location}
              </span>
            </div>
          </div>
        </div>

        <aside className="contact-card">
          <span className="eyebrow eyebrow-inline">{contact.reachOutEyebrow}</span>
          <h3>{contact.reachOutTitle}</h3>
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Mail size={16} />
              {profile.email}
            </a>
            <a className="contact-link" href={profile.linkedin} rel="noreferrer" target="_blank">
              <Linkedin size={16} />
              {contact.linkedinLabel}
            </a>
            <a className="contact-link" href={profile.githubPrimary} rel="noreferrer" target="_blank">
              <Github size={16} />
              {contact.githubLabel}
            </a>
            <a className="contact-link" href={profile.githubSecondary} rel="noreferrer" target="_blank">
              <Github size={16} />
              {contact.secondaryGithubLabel}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
