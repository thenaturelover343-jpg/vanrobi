"use client";

import { useEffect, useState } from "react";

const KEY = "vanrobi-intro-seen";

export function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer = 0;
    let start = 0;
    try {
      if (sessionStorage.getItem(KEY)) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        sessionStorage.setItem(KEY, "1");
        return;
      }
      // Defer setState out of the synchronous effect body (react-hooks/set-state-in-effect)
      start = window.setTimeout(() => {
        setShow(true);
        timer = window.setTimeout(() => {
          setShow(false);
          sessionStorage.setItem(KEY, "1");
        }, 760);
      }, 0);
    } catch {
      /* private mode, skip */
    }
    return () => {
      if (start) window.clearTimeout(start);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-mark">
        <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
          <path
            d="M4 6 L14 24 L24 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 14h10"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity=".5"
          />
        </svg>
        <span>VanRobi</span>
      </div>
    </div>
  );
}
