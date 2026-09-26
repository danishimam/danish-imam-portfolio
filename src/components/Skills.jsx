import { BarChart3, Code2, Database, Server, Workflow, Wrench } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { skillGroups } from "../data/content.js";

const icons = {
  frontend: Code2,
  database: Database,
  analytics: BarChart3,
  erp: Workflow,
  backend: Server,
  tools: Wrench,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="The toolkit."
      lead="From the database layer to the dashboard — the tools I use to automate, integrate and ship."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] || Code2;
          return (
            <Reveal key={group.title} delay={0.05 * (i % 3)} className="h-full">
              <div className="card card-hover group h-full p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-gradient-to-br from-accent/15 to-accent-2/5 text-accent transition-transform duration-500 group-hover:scale-105">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
                  </div>
                  <span className="font-mono text-[0.6875rem] text-faint">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="badge">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
