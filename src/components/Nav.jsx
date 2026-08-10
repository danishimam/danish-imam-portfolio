import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data/content.js";
import useActiveSection from "../hooks/useActiveSection.js";
import { cn } from "../lib/utils.js";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-5">
        <div className="shell">
          <div
            className={cn(
              "flex items-center justify-between rounded-full transition-all duration-500",
              scrolled
                ? "glass px-3 py-2 shadow-[0_1px_2px_rgb(13_35_60/0.04),0_16px_40px_-20px_rgb(13_35_60/0.2)] md:px-4"
                : "border border-transparent px-1 py-2"
            )}
          >
            <a
              href="#top"
              className="group flex items-center gap-2.5 rounded-full pl-2 pr-3"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-paper">
                <span className="accent-italic text-lg leading-none">D</span>
              </span>
              <span className="text-sm font-medium tracking-tight">
                {profile.name}
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = active === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300",
                      isActive
                        ? "text-ink"
                        : "text-muted hover:text-ink"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-line-soft"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a href="#contact" className="btn btn-primary hidden h-10 px-5 text-sm md:inline-flex">
                Get in touch
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/70 text-ink transition-colors hover:bg-surface md:hidden"
              >
                <Menu size={18} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-paper/95 backdrop-blur-xl" />

            <motion.div
              className="relative flex h-full flex-col px-6 pb-10 pt-5"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="label">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink"
                >
                  <X size={18} strokeWidth={1.75} />
                </button>
              </div>

              <nav className="mt-12 flex flex-col">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 + i * 0.05,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="hairline flex items-baseline justify-between py-5 text-2xl font-medium tracking-tight"
                  >
                    {item.label}
                    <span className="label">{String(i + 1).padStart(2, "0")}</span>
                  </motion.a>
                ))}
              </nav>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-auto w-full"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
