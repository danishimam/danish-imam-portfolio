import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Reveal from "./ui/Reveal.jsx";
import { profile } from "../data/content.js";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${profile.whatsapp}`;

  return (
    <section id="contact" className="scroll-mt-28 pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-16 text-center md:px-16 md:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(47,128,217,0.10), transparent 65%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(120,146,175,0.16), transparent 68%)",
              }}
            />

            <div className="relative">
              <span className="label">Contact</span>

              <h2 className="mx-auto mt-6 max-w-2xl text-[2.25rem] font-medium leading-[1.08] tracking-[-0.035em] md:text-[3.25rem]">
                Have something to build?{" "}
                <span className="accent-italic text-[1.06em] tracking-normal text-muted">
                  Let's talk.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-md text-[1.0625rem] leading-relaxed text-muted">
                A message on WhatsApp is the quickest way to reach me. Email
                works just as well.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-primary group w-full sm:w-auto"
                >
                  <MessageCircle size={17} strokeWidth={1.75} />
                  Message on WhatsApp
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  <Mail size={16} strokeWidth={1.75} />
                  {profile.email}
                </a>
              </div>

              <div className="mx-auto mt-12 flex max-w-sm flex-col items-center gap-1">
                <span className="label">Phone</span>
                <a
                  href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                  className="font-mono text-sm text-graphite transition-colors hover:text-ink"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
