"use client";

import { useEffect } from "react";

/**
 * Adds `.is-visible` to every `.reveal` element as it enters the viewport.
 * CSS handles the animation, so this only ever toggles a class — and the
 * animation is disabled entirely under prefers-reduced-motion.
 */
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-ready");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nodes = Array.from(document.querySelectorAll(".reveal"));

    if (prefersReduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return () => root.classList.remove("js-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      root.classList.remove("js-ready");
    };
  }, []);

  return null;
}
