import { useState, useEffect, useLayoutEffect } from "react";

export function useBreakpoint(maxWidth: number): boolean {
  const query = `(max-width: ${maxWidth}px)`;
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);
    setMatches(media.matches);
  }, [query]);

  useEffect(() => {
    if (!mounted) return;

    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, mounted]);

  return matches;
}
