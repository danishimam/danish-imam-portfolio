import Reveal from "./Reveal.jsx";
import { cn } from "../../lib/utils.js";

/**
 * Every section shares one structure: a mono gutter label on the left,
 * content on the right. The label column is the page's spine.
 */
export default function Section({ id, label, title, lead, children, className }) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-24 md:py-32", className)}>
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3 md:sticky md:top-32">
                <span className="h-px w-6 bg-line md:w-4" />
                <span className="label">{label}</span>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-9">
            {title && (
              <Reveal>
                <h2 className="max-w-2xl text-3xl font-medium leading-[1.1] md:text-[2.75rem]">
                  {title}
                </h2>
              </Reveal>
            )}
            {lead && (
              <Reveal delay={0.08}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                  {lead}
                </p>
              </Reveal>
            )}
            <div className={cn(title || lead ? "mt-12 md:mt-16" : "")}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
