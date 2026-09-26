import { Award, GraduationCap } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { certifications, education } from "../data/content.js";

export default function Education() {
  return (
    <Section id="education" label="Education" title="Study and certification.">
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={0.05 * i} className="h-full">
            <div className="card card-hover h-full p-6 sm:p-8">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.02] text-accent">
                <GraduationCap size={18} strokeWidth={1.75} />
              </span>
              <p className="mt-6 font-mono text-xs text-faint">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{item.school}</h3>
              <p className="mt-1 text-sm text-muted">{item.qualification}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="card mt-4 p-6 sm:p-8">
          <span className="label">Certifications</span>
          <ul className="mt-6 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <li key={cert} className="badge py-2">
                <Award size={14} strokeWidth={1.75} className="text-accent" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
