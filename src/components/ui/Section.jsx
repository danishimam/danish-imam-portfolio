import Reveal from "./Reveal.jsx";
import { cn } from "../../lib/utils.js";

/**
 * Every section shares one structure: a pill eyebrow, a title,
 * an optional lead, then full-width content underneath.
 */
export default function Section({ id, label, title, lead, children, className }) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 md:py-28", className)}>
      {/* Soft ambient glow behind each section header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem]"
        style={{
          background:
            "radial-gradient(ellipse 45% 45% at 25% 50%, rgba(139,147,255,0.06), transparent)",
        }}
      />
      <div className="shell relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
              {label}
            </span>
          </Reveal>
          {title && (
            <Reveal delay={0.04}>
              <h2 className="mt-6 text-[2rem] font-semibold leading-[1.1] sm:text-4xl md:text-[2.75rem]">
                {title}
              </h2>
            </Reveal>
          )}
          {lead && (
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-[1.0625rem]">
                {lead}
              </p>
            </Reveal>
          )}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
