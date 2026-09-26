import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { certifications, profile, projects, socials } from "../data/content.js";

const rise = (delay) => ({
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const socialIcons = { GitHub: Github, LinkedIn: Linkedin };

const spec = [
  { k: "Role", v: profile.headline },
  { k: "Company", v: profile.company },
  { k: "Base", v: profile.location },
  { k: "Focus", v: "SQL · APIs · Power BI" },
];

const stats = [
  { n: projects.length, l: "Live projects" },
  { n: certifications.length, l: "Certifications" },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const anim = (delay) => (reduced ? {} : rise(delay));
  const activeSocials = socials.filter((s) => s.href);

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-44">
      {/* Ambient light + grid */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[56rem] max-w-[140vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,87,255,0.10), rgba(0,87,255,0.03) 60%, transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-64 h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(0,87,255,0.06), transparent)" }}
      />

      <div className="shell relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.div {...anim(0)}>
              <span className="eyebrow normal-case tracking-normal">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-signal animate-pulse-dot" />
                </span>
                <span className="font-sans text-[0.8125rem] text-graphite">
                  {profile.headline} at {profile.company}
                </span>
              </span>
            </motion.div>

            <h1 className="mt-8 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-[4.25rem] 2xl:text-[5rem]">
              <motion.span {...anim(0.08)} className="block">
                Hi, I'm {profile.name.split(" ")[0]}.
              </motion.span>
              <motion.span {...anim(0.16)} className="block text-gradient pb-1">
                I automate, integrate
              </motion.span>
              <motion.span {...anim(0.24)} className="block text-muted">
                and ship software.
              </motion.span>
            </h1>

            <motion.p
              {...anim(0.34)}
              className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-muted md:text-lg"
            >
              {profile.role} in {profile.location.split(",")[0]} working across ERP
              workflows, SQL Server, REST API integration and Power BI — with a
              frontend foundation in React.js and Tailwind CSS.
            </motion.p>

            <motion.div {...anim(0.42)} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary group">
                View projects
                <ArrowDownRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Mail size={16} strokeWidth={1.75} />
                Get in touch
              </a>
              {profile.resume && (
                <a href={profile.resume} download className="btn btn-ghost">
                  <Download size={16} strokeWidth={1.75} />
                  Résumé
                </a>
              )}
            </motion.div>

            {activeSocials.length > 0 && (
              <motion.div {...anim(0.5)} className="mt-10 flex items-center gap-2">
                {activeSocials.map((s) => {
                  const Icon = socialIcons[s.label] || ArrowUpRight;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent hover:text-paper"
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </a>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Floating spec panel — the CV facts, set like a product spec. */}
          <motion.div
            {...(reduced
              ? {}
              : {
                  initial: { opacity: 0, y: 32, scale: 0.97 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                })}
            className="lg:col-span-5"
          >
            <div className={reduced ? "" : "animate-drift"}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-px rounded-[calc(1.25rem+1px)] bg-gradient-to-br from-accent/30 via-transparent to-accent-2/20 opacity-70"
                />
                <div className="glass relative rounded-[1.25rem] p-2 shadow-[var(--shadow-float)]">
                  <div className="rounded-2xl bg-paper/50 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="label">Currently</span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/10 px-2.5 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                        <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-signal">
                          Since {profile.since}
                        </span>
                      </span>
                    </div>

                    <dl className="mt-6">
                      {spec.map((row, i) => (
                        <div
                          key={row.k}
                          className={`flex items-baseline justify-between gap-4 py-4 ${
                            i !== 0 ? "hairline" : ""
                          }`}
                        >
                          <dt className="label">{row.k}</dt>
                          <dd className="text-right text-sm font-medium tracking-tight">
                            {row.v}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {stats.map((s) => (
                        <div
                          key={s.l}
                          className="rounded-2xl border border-line bg-ink/[0.02] px-4 py-4"
                        >
                          <p className="text-gradient text-3xl font-semibold tracking-tight">
                            {String(s.n).padStart(2, "0")}
                          </p>
                          <p className="mt-1 text-xs text-muted">{s.l}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`mailto:${profile.email}`}
                      className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-line bg-ink/[0.02] px-4 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5"
                    >
                      <span className="truncate text-sm text-graphite">{profile.email}</span>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.75}
                        className="shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
