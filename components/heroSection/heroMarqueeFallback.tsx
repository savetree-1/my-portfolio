// This file has been replaced with heroMarqueeNew.tsx to fix GSAP recursion issues
// Keeping this as a fallback

import React from "react";

export function HeroMarquee() {
  return (
    <div className="wrapperRollingText anime pointer-events-none z-20 select-none rounded-3xl tracking-[-0.1em] relative overflow-hidden w-full">
      <div className="rollingText md:!text-[200px] whitespace-nowrap animate-pulse">
        - Ankush - Rawat - Ankush - Rawat&nbsp;
      </div>
    </div>
  );
}
