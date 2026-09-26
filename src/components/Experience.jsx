import { Building2, MapPin } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked.">
      <ol className="relative space-y-4 md:space-y-6 md:pl-10">
        {/* Timeline spine */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[11px] top-4 hidden w-px bg-gradient-to-b from-accent/50 via-line to-transparent md:block"
        />

        {experience.map((job, i) => (
          <Reveal as="li" key={job.role + job.period} delay={0.05 * i} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-10 top-10 hidden h-[23px] w-[23px] place-items-center rounded-full border md:grid ${
                job.current ? "border-accent/50 bg-surface" : "border-line bg-surface"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  job.current ? "bg-gradient-accent animate-pulse-dot" : "bg-faint"
                }`}
              />
            </span>

            <article className="card card-hover p-6 sm:p-8 md:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{job.role}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 size={14} strokeWidth={1.75} className="text-faint" />
                      {job.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} strokeWidth={1.75} className="text-faint" />
                      {job.place}
                    </span>
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2">
                  {job.current && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/10 px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-signal">
                        Current
                      </span>
                    </span>
                  )}
                  <span className="rounded-full border border-line bg-ink/[0.02] px-3 py-1 font-mono text-xs text-graphite">
                    {job.period}
                  </span>
                </div>
              </div>

              <ul className="mt-8 grid gap-4">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-4 text-[0.9375rem] leading-relaxed text-muted"
                  >
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
