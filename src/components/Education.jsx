import { Award } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { certifications, education } from "../data/content.js";

export default function Education() {
  return (
    <Section id="education" label="Education" title="Study and certification.">
      <div className="flex flex-col">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={0.04 * i}>
            <div
              className={`grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-8 ${
                i !== 0 ? "hairline" : ""
              }`}
            >
              <p className="font-mono text-xs tracking-tight text-graphite md:col-span-4">
                {item.period}
              </p>
              <div className="md:col-span-8">
                <h3 className="text-lg font-medium tracking-tight">{item.school}</h3>
                <p className="mt-1 text-sm text-muted">{item.qualification}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="mt-14">
          <span className="label">Certifications</span>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 text-[0.8125rem] text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[var(--shadow-lift)]"
              >
                <Award size={14} strokeWidth={1.75} className="text-faint" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
