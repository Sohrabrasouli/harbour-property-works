"use client";

import { useEffect } from "react";

export function SiteMotion() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10%", threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
