import { ArrowUp } from "lucide-react";
import { profile, socials } from "../data/content.js";

export default function Footer() {
  const activeSocials = socials.filter((s) => s.href);

  return (
    <footer className="border-t border-line py-10">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold tracking-tight text-accent">{profile.name}</p>
            <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-faint">
              {profile.role} · {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {activeSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-muted transition-colors duration-300 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-paper"
            >
              <ArrowUp size={16} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <p className="mt-8 font-mono text-[0.6875rem] text-faint">
          © {new Date().getFullYear()} — Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
