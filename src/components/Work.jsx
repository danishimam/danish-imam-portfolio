import { ArrowUpRight, Github } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import BrowserPreview from "./ui/BrowserPreview.jsx";
import { projects, socials } from "../data/content.js";
import { cn } from "../lib/utils.js";

const githubProfile = socials.find((s) => s.label === "GitHub")?.href;

function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function StackBadges({ stack = [], className }) {
  if (!stack.length) return null;
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label="Tech stack">
      {stack.map((tech) => (
        <li key={tech} className="badge badge-sm">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectActions({ project, className }) {
  const repo = project.repo || githubProfile;
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer noopener"
        className="btn btn-primary btn-sm group/btn"
      >
        Live Demo
        <ArrowUpRight
          size={15}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
        />
      </a>
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-ghost btn-sm"
          aria-label={`${project.name} source on GitHub`}
        >
          <Github size={15} strokeWidth={1.75} />
          GitHub
        </a>
      )}
    </div>
  );
}

/* The preview itself is a link to the live site, so the biggest
   target on the card still does the obvious thing. */
function PreviewLink({ project, ratio }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Open ${project.name} live demo`}
      tabIndex={-1}
      className="block overflow-hidden rounded-2xl"
    >
      <BrowserPreview
        url={project.url}
        name={project.name}
        ratio={ratio}
        className="transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.02]"
      />
    </a>
  );
}

function FeaturedCard({ project }) {
  return (
    <article className="card card-hover group p-3 sm:p-4 md:p-5">
      <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:order-2 lg:col-span-8">
          <PreviewLink project={project} ratio={0.6} />
        </div>

        <div className="px-3 pb-4 lg:order-1 lg:col-span-4 lg:px-4 lg:py-6">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
            Featured
          </span>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 font-mono text-xs text-faint">{hostOf(project.url)}</p>
          {project.description && (
            <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
          )}
          <StackBadges stack={project.stack} className="mt-6" />
          <ProjectActions project={project} className="mt-8" />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card card-hover group flex h-full flex-col p-3 sm:p-4">
      <PreviewLink project={project} ratio={0.6} />

      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-1 truncate font-mono text-[0.6875rem] text-faint">
              {hostOf(project.url)}
            </p>
          </div>
        </div>
        {project.description && (
          <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
        )}
        <StackBadges stack={project.stack} className="mt-4" />
        <ProjectActions project={project} className="mt-auto pt-6" />
      </div>
    </article>
  );
}

export default function Work() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <Section
      id="work"
      label="Projects"
      title="Things I've built and shipped."
      lead="Every preview below is the live site running in the page. Open the demo to use the real thing, or read the source on GitHub."
    >
      <Reveal>
        <FeaturedCard project={featured} />
      </Reveal>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.url} delay={0.05 * (i % 2)} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
