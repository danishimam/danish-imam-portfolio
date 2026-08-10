import { useEffect, useRef, useState } from "react";

/** Reports the live pixel width of an element, so previews can be
 *  scaled to fit any breakpoint without hardcoded ratios. */
export default function useElementWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => setWidth(el.getBoundingClientRect().width);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, width];
}
