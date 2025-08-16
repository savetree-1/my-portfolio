import React from "react";
import { HeroButton } from "./heroButton";
import { HeroMarquee } from "./heroMarqueeNew";
export function HeroWrapper({}) {
  return (
    <main className="section1__wrapper relative w-full grow ">
      <div className="myImage"></div>
      <HeroButton />
      <h2 className="left mask pointer-events-none z-20 pt-20">
        <div className="free anime">
          Learner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="animation__wrapper anime no-scramble">
          <span className="animate__this animate__this1 left-0">
            Next.js Developer<span className="yellow__it">.</span>
            <br />
          </span>
          <span className="animate__this animate__this2 left-0">
            ML Learner<span className="yellow__it">.</span>
            <br />
          </span>
          <span className="animate__this animate__this3 left-0">
            Web Developer<span className="yellow__it">.</span>
            <br />
          </span>
          <span className="animate__this animate__this4 left-0">
            Problem Solver<span className="yellow__it">.</span>
            <br />
          </span>
          <span className="animate__this animate__this5 left-0">
            Tech Enthusiast<span className="yellow__it">.</span>
          </span>
          <span>&nbsp;</span>
        </div>
      </h2>
      <HeroMarquee />
    </main>
  );
}
