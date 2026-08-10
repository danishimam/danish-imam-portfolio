import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've worked."
    >
      <div className="flex flex-col">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.period} delay={0.04 * i}>
            <article
              className={`group grid gap-6 py-9 md:grid-cols-12 md:gap-8 ${
                i !== 0 ? "hairline" : ""
              }`}
            >
              <div className="md:col-span-4">
                <p className="font-mono text-xs tracking-tight text-graphite">
                  {job.period}
                </p>
                {job.current && (
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-graphite">
                      Current
                    </span>
                  </span>
                )}
              </div>

              <div className="md:col-span-8">
                <h3 className="text-xl font-medium tracking-tight md:text-[1.375rem]">
                  {job.role}
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  {job.company} · {job.place}
                </p>

                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted"
                    >
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-line transition-colors duration-500 group-hover:bg-ink/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
