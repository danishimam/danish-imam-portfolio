import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { profile } from "../data/content.js";

const focus = [
  "Modern user interfaces",
  "RESTful API integration",
  "ERP workflow optimisation",
  "Clean, maintainable code",
];

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      title={
        <>
          Frontend engineer, ERP developer, and a stickler for{" "}
          <span className="accent-italic text-[1.05em] tracking-normal">
            clean code
          </span>
          .
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="text-[1.0625rem] leading-relaxed text-graphite">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted">
              {profile.summaryTwo}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-2">
          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-line bg-surface p-6 md:p-7">
              <span className="label">Focus areas</span>
              <ul className="mt-5">
                {focus.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 py-3 text-sm font-medium tracking-tight ${
                      i !== 0 ? "hairline" : ""
                    }`}
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
