import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered entrance. Fades and lifts once, never replays.
 * Motion is skipped entirely when the visitor prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className = "",
  as = "div",
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
