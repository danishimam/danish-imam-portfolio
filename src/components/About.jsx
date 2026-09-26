import { BarChart3, Database, GraduationCap, MapPin, Plug, Workflow, Briefcase, Code2 } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { education, profile } from "../data/content.js";

const focus = [
  { icon: Workflow, label: "ERP workflow automation" },
  { icon: Plug, label: "REST API integration & testing" },
  { icon: Database, label: "SQL data validation & reconciliation" },
  { icon: BarChart3, label: "Power BI reporting" },
  { icon: Code2, label: "Responsive React interfaces" },
];

const glance = [
  { icon: Briefcase, k: "Role", v: `${profile.headline}, ${profile.company}` },
  { icon: MapPin, k: "Location", v: profile.location },
  { icon: GraduationCap, k: "Education", v: education[0]?.qualification },
];

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      title={
        <>
          Software engineer turning business processes into{" "}
          <span className="text-gradient">reliable systems</span>.
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="card h-full p-6 sm:p-8 md:p-10">
            <span className="label">Summary</span>
            <p className="mt-6 text-lg leading-relaxed text-graphite md:text-xl md:leading-relaxed">
              {profile.summary}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-[1.0625rem]">
              {profile.summaryTwo}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 lg:col-span-5">
          <Reveal delay={0.08}>
            <div className="card p-6 sm:p-8">
              <span className="label">Focus areas</span>
              <ul className="mt-5 space-y-1">
                {focus.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="group flex items-center gap-4 rounded-xl px-2 py-2 transition-colors duration-300 hover:bg-ink/[0.03]"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-ink/[0.02] text-accent transition-colors duration-300 group-hover:border-accent/40">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium tracking-tight text-graphite">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card p-6 sm:p-8">
              <span className="label">At a glance</span>
              <dl className="mt-4">
                {glance.map(({ icon: Icon, k, v }, i) => (
                  <div
                    key={k}
                    className={`flex items-start gap-4 py-4 ${i !== 0 ? "hairline" : ""}`}
                  >
                    <Icon size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-faint" />
                    <div className="min-w-0">
                      <dt className="text-xs text-faint">{k}</dt>
                      <dd className="mt-1 text-sm font-medium text-ink">{v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
