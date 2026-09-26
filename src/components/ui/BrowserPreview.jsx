import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import useElementWidth from "../../hooks/useElementWidth.js";
import { cn } from "../../lib/utils.js";

const VIEWPORT_WIDTH = 1440;

/**
 * The signature element: each project is shown as the site itself,
 * running inside a browser frame, rather than as a static screenshot.
 *
 * The frame only mounts once it is close to the viewport, and the
 * preview is non-interactive — clicking anywhere opens the real site.
 * If a site refuses to be framed, the placeholder underneath stays
 * visible, so the card never looks broken.
 */
export default function BrowserPreview({ url, name, ratio = 0.625, className }) {
  const [wrapRef, width] = useElementWidth();
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, { once: true, margin: "300px" });
  const [loaded, setLoaded] = useState(false);

  const host = (() => {
    try {
      return new URL(url).host;
    } catch {
      return url;
    }
  })();

  const scale = width ? width / VIEWPORT_WIDTH : 0;

  return (
    <div ref={inViewRef} className={cn("select-none", className)}>
      <div className="overflow-hidden rounded-2xl border border-ink/[0.06] bg-paper">
        {/* Chrome */}
        <div className="flex items-center gap-3 border-b border-ink/[0.06] bg-elevated/90 px-3 py-2.5">
          <div className="flex shrink-0 gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/25" />
          </div>
          <div className="min-w-0 flex-1 rounded-md bg-ink/[0.04] px-2.5 py-1">
            <span className="block truncate font-mono text-[0.625rem] text-faint">
              {host}
            </span>
          </div>
        </div>

        {/* Viewport */}
        <div
          ref={wrapRef}
          className="relative w-full overflow-hidden bg-surface"
          style={{ paddingBottom: `${ratio * 100}%` }}
        >
          {/* Placeholder / fallback for sites that block embedding */}
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-elevated via-surface to-paper">
            <span className="text-gradient text-5xl font-semibold opacity-40">{name.charAt(0)}</span>
          </div>

          {inView && scale > 0 && (
            <iframe
              src={url}
              title={`${name} live preview`}
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setLoaded(true)}
              className={cn(
                "absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-700",
                loaded ? "opacity-100" : "opacity-0"
              )}
              style={{
                width: `${VIEWPORT_WIDTH}px`,
                height: `${VIEWPORT_WIDTH * ratio}px`,
                transform: `scale(${scale})`,
                pointerEvents: "none",
              }}
            />
          )}

          {/* Keeps the preview reading as an image rather than a live app */}
          <div className="absolute inset-0 bg-paper/[0.04]" />
        </div>
      </div>
    </div>
  );
}
