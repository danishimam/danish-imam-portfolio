import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { profile, socials } from "../data/content.js";

const rise = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
});

const spec = [
  { k: "Role", v: "Frontend Engineer" },
  { k: "Company", v: "Venixo Technologies" },
  { k: "Base", v: "Hyderabad, India" },
  { k: "Stack", v: "React · Tailwind · Node" },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const anim = (delay) => (reduced ? {} : rise(delay));
  const activeSocials = socials.filter((s) => s.href);

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      {/* Ambient light. Kept extremely low contrast so the page still
          reads as clean light blue-grey rather than as a coloured gradient. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(47,128,217,0.10), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-[26rem] w-[26rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(120,146,175,0.16), transparent 68%)",
        }}
      />

      <div className="shell relative">
        <div className="grid items-start gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <motion.div {...anim(0)} className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal animate-pulse-dot" />
              </span>
              <span className="label">
                {profile.role} · {profile.location}
              </span>
            </motion.div>

            <h1 className="mt-7 text-[2.6rem] font-medium leading-[1.04] tracking-[-0.035em] sm:text-6xl md:text-[4.25rem]">
              <motion.span {...anim(0.08)} className="block">
                Software engineer
              </motion.span>
              <motion.span {...anim(0.16)} className="block">
                building{" "}
                <span className="accent-italic text-[1.06em] tracking-normal">
                  production-ready
                </span>
              </motion.span>
              <motion.span {...anim(0.24)} className="block text-muted">
                web applications.
              </motion.span>
            </h1>

            <motion.p
              {...anim(0.34)}
              className="mt-8 max-w-lg text-[1.0625rem] leading-relaxed text-muted"
            >
              I'm {profile.name.split(" ")[0]} — a frontend engineer and ERP
              developer working in React.js, Tailwind CSS, Node.js and SQL. I
              build responsive, scalable interfaces and the workflows behind
              them.
            </motion.p>

            <motion.div {...anim(0.42)} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary group">
                View selected work
                <ArrowDownRight
                  size={17}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Mail size={16} strokeWidth={1.75} />
                Get in touch
              </a>
            </motion.div>

            {activeSocials.length > 0 && (
              <motion.div {...anim(0.5)} className="mt-10 flex items-center gap-6">
                {activeSocials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                  >
                    {s.label}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.75}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          {/* Floating spec panel — the CV facts, set like a product spec. */}
          <motion.div
            {...(reduced
              ? {}
              : {
                  initial: { opacity: 0, y: 30, scale: 0.98 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                })}
            className="md:col-span-5 md:pt-6"
          >
            <div className={reduced ? "" : "animate-drift"}>
              <div className="glass rounded-3xl p-1.5 shadow-[0_2px_4px_rgb(13_35_60/0.04),0_30px_70px_-30px_rgb(13_35_60/0.28)]">
                <div className="rounded-[1.25rem] bg-surface/80 p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="label">Currently</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-graphite">
                        Since Jun 2026
                      </span>
                    </span>
                  </div>

                  <dl className="mt-6">
                    {spec.map((row, i) => (
                      <div
                        key={row.k}
                        className={`flex items-baseline justify-between gap-4 py-3.5 ${
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

                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-5 flex items-center justify-between rounded-2xl border border-line bg-paper px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:bg-surface hover:shadow-[var(--shadow-lift)]"
                  >
                    <span className="truncate text-sm text-graphite">
                      {profile.email}
                    </span>
                    <ArrowUpRight size={15} strokeWidth={1.75} className="shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
