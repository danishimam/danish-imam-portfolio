import { ArrowUpRight } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import BrowserPreview from "./ui/BrowserPreview.jsx";
import { projects } from "../data/content.js";

function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function FeaturedCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group block rounded-[1.75rem] border border-line bg-surface p-4 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[var(--shadow-float)] md:p-5"
    >
      <div className="grid items-center gap-6 md:grid-cols-5 md:gap-8">
        <div className="md:col-span-2 md:px-3 md:py-4">
          <span className="label">Featured</span>
          <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-3 font-mono text-xs text-faint">{hostOf(project.url)}</p>
          <span className="btn btn-ghost mt-7 h-11 px-5 text-sm transition-colors group-hover:border-ink/20 group-hover:bg-paper">
            Open live site
            <ArrowUpRight
              size={15}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <div className="md:col-span-3">
          <BrowserPreview
            url={project.url}
            name={project.name}
            ratio={0.62}
            className="transition-transform duration-700 group-hover:scale-[1.015]"
          />
        </div>
      </div>
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-3.5 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/15 hover:shadow-[var(--shadow-float)]"
    >
      <BrowserPreview
        url={project.url}
        name={project.name}
        ratio={0.66}
        className="transition-transform duration-700 group-hover:scale-[1.02]"
      />

      <div className="flex items-end justify-between gap-4 px-1.5 pb-1 pt-5">
        <div className="min-w-0">
          <h3 className="truncate text-base font-medium tracking-tight">
            {project.name}
          </h3>
          <p className="mt-1 truncate font-mono text-[0.6875rem] text-faint">
            {hostOf(project.url)}
          </p>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-graphite transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
          <ArrowUpRight size={15} strokeWidth={1.75} />
        </span>
      </div>
    </a>
  );
}

export default function Work() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <Section
      id="work"
      label="Work"
      title="Things I've built and shipped."
      lead="Every preview below is the live site running in the page. Open any card to use the real thing."
    >
      <Reveal>
        <FeaturedCard project={featured} />
      </Reveal>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <Reveal key={project.url} delay={0.05 * (i % 3)} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
