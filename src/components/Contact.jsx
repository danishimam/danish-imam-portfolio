import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import Reveal from "./ui/Reveal.jsx";
import { profile, socials } from "../data/content.js";

const socialIcons = { GitHub: Github, LinkedIn: Linkedin };

export default function Contact() {
  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Quickest reply",
      href: `https://wa.me/${profile.whatsapp}`,
      external: true,
      primary: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    },
    ...socials
      .filter((s) => s.href)
      .map((s) => ({
        icon: socialIcons[s.label] || ArrowUpRight,
        label: s.label,
        value: s.href.replace(/^https?:\/\/(www\.)?/, ""),
        href: s.href,
        external: true,
      })),
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <div className="card relative overflow-hidden px-4 py-16 sm:px-10 md:px-16 md:py-24">
            <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] max-w-[120%] -translate-x-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(139,147,255,0.25), rgba(46,224,247,0.06) 60%, transparent)",
              }}
            />

            <div className="relative text-center">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
                Contact
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.035em] md:text-[3.5rem]">
                Have something to build?{" "}
                <span className="text-gradient">Let's talk.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-md text-[1.0625rem] leading-relaxed text-muted">
                A message on WhatsApp is the quickest way to reach me. Email
                works just as well.
              </p>
            </div>

            <ul className="relative mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
              {channels.map(({ icon: Icon, label, value, href, external, primary }) => (
                <li key={label} className="min-w-0">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="card card-hover group flex items-center gap-4 rounded-2xl p-4 text-left sm:p-6"
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border transition-transform duration-500 group-hover:scale-105 ${
                        primary
                          ? "border-transparent bg-gradient-accent text-paper"
                          : "border-line bg-white/[0.03] text-accent"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold tracking-tight text-ink">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-muted">{value}</span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.75}
                      className="shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
