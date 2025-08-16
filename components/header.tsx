import React, { use, useEffect, useRef, useState } from "react";
import Magentic from "./ui/magentic";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Logo from "@/public/svg/Logo.svg";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { toggleMenu } from "@/redux/states/menuSlice";
import { cn } from "@/lib/utils";
import { links } from "@/data/data";
import "@/app/header.css";

const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");

type HeaderProps = {
  color: "Dark" | "Light";
  className?: string;
  mode?: "hamburger" | "cross";
};

export function Header({ color, className, mode = "hamburger" }: HeaderProps) {
  const possibleTailwindClasses = [
    "bg-colorDark",
    "bg-colorLight",
    "text-colorDark",
    "text-colorLight",
    "before:bg-colorDark",
    "before:bg-colorLight",
  ];

  const logoAnimationTl = useRef<gsap.core.Timeline | null>(null);
  const iconRotationTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    logoAnimationTl.current = gsap.timeline({ paused: true }).fromTo(
      `.logo__rotate`,
      {
        rotate: 0,
        transformOrigin: "center",
      },
      {
        rotate: -360,
        transformOrigin: "center",
        duration: 0.6,
        ease: ease,
      },
    );

    // Animation for personal icon
    iconRotationTl.current = gsap.timeline({ paused: true }).fromTo(
      `.personal__icon`,
      {
        rotate: 0,
        scale: 1,
        transformOrigin: "center",
      },
      {
        rotate: 360,
        scale: 1.1,
        transformOrigin: "center",
        duration: 0.8,
        ease: ease,
      },
    );

    return () => {
      logoAnimationTl.current?.kill();
      iconRotationTl.current?.kill();
    };
  }, []);

  const dispatch = useAppDispatch();
  return (
    <header className={cn("nav__container anime px-paddingX", className)}>
      <nav className="nav__bar ">
        <div className="max-w-maxWidth">
          <Magentic
            href={links.home}
            strength={50}
            className={`nav__item text-xl font-bold text-color${color} before:bg-color${color}`}
            onMouseEnter={() => {
              logoAnimationTl.current?.play();
              iconRotationTl.current?.play();
            }}
            onMouseLeave={() => {
              logoAnimationTl.current?.reverse();
              iconRotationTl.current?.reverse();
            }}
          >
            <div className="mask logo__anim flex items-center gap-3 font-semibold">
              {/* Personal Icon */}
              <div className="personal__icon relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                <Image
                  src="/img/logo.png"
                  alt="Ankush Logo"
                  width={32}
                  height={32}
                  className="filter brightness-110 contrast-110 object-cover"
                />
              </div>
              
              {/* Ankush Text Logo */}
              <svg
                className="w-[120px]"
                width="210"
                height="44.5"
                viewBox="0 0 336.2 71.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeLinecap="round" fillRule="evenodd" stroke="currentColor" strokeWidth="0.20mm" fill="currentColor">
                  <path className="logo__rotate" d="M 169.6 70 L 186 70 L 164.9 42.8 L 184 20 L 167 20 L 150.4 39.7 L 150.4 0 L 137.4 0 L 137.4 70 L 150.4 70 L 150.4 60 L 156.4 52.9 L 169.6 70 Z M 304.2 0 L 291.2 0 L 291.2 70 L 304.2 70 L 304.2 40.6 C 304.4 35.6 308.6 31.5 313.7 31.5 C 318.9 31.5 323.2 35.8 323.2 41 L 323.2 70 L 336.2 70 L 336.2 41 C 336.2 28.6 326.1 18.5 313.7 18.5 C 310.3 18.5 307.1 19.3 304.2 20.6 L 304.2 0 Z M 0 70 L 15.1 70 L 21.1 55 L 49.2 55 L 55.2 70 L 70.4 70 L 42.2 0 L 28.2 0 L 0 70 Z M 91.4 20 L 78.4 20 L 78.4 70 L 91.4 70 L 91.4 40.6 C 91.6 35.6 95.8 31.5 100.9 31.5 C 106.1 31.5 110.4 35.8 110.4 41 L 110.4 70 L 123.4 70 L 123.4 41 C 123.4 28.6 113.3 18.5 100.9 18.5 C 97.5 18.5 94.3 19.3 91.4 20.6 L 91.4 20 Z M 205 49 L 205 20 L 192 20 L 192 49 C 192 61.4 202.1 71.5 214.5 71.5 C 226.9 71.5 237 61.4 237 49 L 237 20 L 224 20 L 224 49 C 224 54.2 219.7 58.5 214.5 58.5 C 209.3 58.5 205 54.2 205 49 Z M 269.2 35 L 282.2 35 C 282.2 25.9 274.8 18.5 265.7 18.5 C 256.6 18.5 249.2 25.9 249.2 35 C 249.2 47.3 265 50.1 265 55 C 265 56.9 263.4 58.5 261.5 58.5 C 259.6 58.5 258 56.9 258 55 L 245 55 C 245 64.1 252.4 71.5 261.5 71.5 C 270.6 71.5 278 64.1 278 55 C 278 42.7 262.2 39.9 262.2 35 C 262.2 33.1 263.8 31.5 265.7 31.5 C 267.6 31.5 269.2 33.1 269.2 35 Z M 35.2 20.1 L 43.6 41 L 26.8 41 L 35.2 20.1 Z" vectorEffect="non-scaling-stroke"/>
                </g>
              </svg>
            </div>
          </Magentic>
          <Magentic
            strength={50}
            className={`mask nav__item h-8 w-8 cursor-pointer items-center text-color${color} before:bg-color${color}`}
            onClick={() => {
              if (mode === "cross") {
                dispatch(toggleMenu({ isMenuOpen: false }));
              } else {
                dispatch(toggleMenu({ isMenuOpen: true, color: color }));
              }
            }}
          >
            <div
              className={cn(
                "flex h-[0.9rem] w-full flex-col justify-between ",
                {
                  "scale-[.90] justify-center": mode === "cross",
                },
              )}
            >
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute rotate-45": mode === "cross",
                })}
              ></div>
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute -rotate-45": mode === "cross",
                })}
              ></div>
            </div>
          </Magentic>
        </div>
      </nav>
    </header>
  );
}
