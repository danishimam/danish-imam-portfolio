import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { skillGroups } from "../data/content.js";

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="The toolkit.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={0.04 * (i % 3)} className="h-full">
            <div className="group h-full rounded-3xl border border-line bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[var(--shadow-lift)]">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-medium tracking-tight">{group.title}</h3>
                <span className="font-mono text-[0.625rem] text-faint">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line-soft bg-paper px-3 py-1.5 text-[0.8125rem] text-graphite transition-colors duration-300 group-hover:border-line"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
