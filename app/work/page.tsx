"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        GitConnectX <br /> Analyzer
      </>
    ),
    description: "GitHub Analytics Utility",
    link: "https://github.com/savetree-1/GitConnectX",
    imageLink: "/img/gitconnectx.png",
  },
  {
    title: (
      <>
        Forest Fire <br /> Detection
      </>
    ),
    description: "ML Project",
    link: "https://github.com/savetree-1/forest-fire-detection",
    imageLink: "/img/projects/2.png",
  },
  {
    title: (
      <>
        Image <br /> Steganography
      </>
    ),
    description: "Security Tool",
    link: "https://github.com/savetree-1/image-steganography",
    imageLink: "/img/projects/3.png",
  },
  {
    title: (
      <>
        Personal <br /> Portfolio
      </>
    ),
    description: "Website",
    link: "https://github.com/savetree-1/personal-portfolio",
    imageLink: "/img/projects/4.png",
  },

  {
    title: (
      <>
        Prompt <br /> MultiSearch
      </>
    ),
    description: "Browser Extension",
    link: "https://github.com/savetree-1/prompt-multisearch",
    imageLink: "/img/projects/5.png",
  },
  {
    title: (
      <>
        MetaShield <br /> Tool
      </>
    ),
    description: "Metadata Remover",
    link: "https://github.com/savetree-1/metashield",
    imageLink: "/img/projects/6.png",
  },
];
// Updated project data 
export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
