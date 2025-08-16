import React, { use, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Header } from "./header";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { toggleMenu } from "@/redux/states/menuSlice";
import { Footer } from "./contactSection/footer";
import Magentic from "./ui/magentic";
import { isDesktop } from "@/lib/utils";
import { links } from "@/data/data";
export function HeaderNavigation() {
  const { isMenuOpen, color } = useAppSelector((state) => state.menuReducer);
  const dispatch = useAppDispatch();
  const possibleTailwindClasses = [
    "text-colorDark",
    "text-colorLight",
    "lightGradient",
    "darkGradient",
  ];

  const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");

  const headerAnimation = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const flexHeight = isDesktop() ? "20vh" : "7vh";
    headerAnimation.current = gsap
      .timeline()
      .set("#headerNavigation", {
        display: "flex",
      })
      .to("#headerNavigation", {
        duration: 1,
        y: "0%",
        ease,
      })
      .fromTo(
        "#headerNavigation .rounded__div__up",
        {
          height: flexHeight,
        },
        {
          height: "0vh",
          duration: 1,
          ease,
        },
        "-=0.9",
      )
      .fromTo(
        ".headerAnimate",
        {
          y: "-20vh",
        },
        {
          y: "0vh",
          duration: 1,
          stagger: -0.08,
          ease,
        },
        "-=1.2",
      );

    return () => {
      headerAnimation.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      headerAnimation.current?.play();
    } else {
      headerAnimation.current?.reverse();
    }
  }, [isMenuOpen]);

  const headerData = [
    {
      name: "Home",
      href: links.home,
    },
    {
      name: "About Me",
      href: links.about,
    },
    {
      name: "Education",
      href: links.education,
    },
    {
      name: "Skills",
      href: links.skills,
    },
    {
      name: "Work",
      href: links.work,
    },
    {
      name: "Resume / CV",
      href: links.resume,
    },
    {
      name: "Certifications",
      href: links.certifications,
    },
    {
      name: "Stats & Achievements",
      href: links.stats,
    },
    {
      name: "Blogs & Articles",
      href: links.blogs,
    },
    {
      name: "Contact",
      href: links.email,
    },
  ];
  return (
    <>
      <div
        id="headerNavigation"
        className="fixed left-0 top-0 z-[6000] hidden h-full w-full -translate-y-full flex flex-col items-center justify-center p-paddingX"
      >
        <Header
          mode="cross"
          className="headerAnimate flex-shrink-0"
          color={color == "Light" ? "Dark" : "Light"}
        />
        <nav className="flex-1 overflow-y-auto w-full custom-scrollbar flex items-center justify-center">
          <ul className="mask flex flex-col items-center justify-center px-8 py-[5vh]">
            {headerData.map((data) => (
              <li className="headerAnimate mb-4 last:mb-0" key={data.name}>
                <Magentic
                  className={`text-[clamp(32px,_3.3vw_+_32px,_88px)] font-bold text-color${
                    color == "Light" ? "Dark" : "Light"
                  }`}
                  scrambleParams={{
                    text: data.name,
                    chars: "-xx",
                  }}
                  href={data.href}
                  onClick={() => {
                    dispatch(toggleMenu({ isMenuOpen: false }));
                  }}
                >
                  <span className="scrambleText">{data.name}</span>
                </Magentic>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute left-0 top-0 -z-40 flex h-full w-full flex-col ">
          <div
            className={`${
              color == "Light" ? "lightGradient" : "darkGradient"
            } h-full w-full grow `}
          ></div>
          <div className="rounded__div__up  !relative z-50">
            <div
              className={`round__bg__up ${
                color == "Light" ? "lightGradient" : "darkGradient"
              }`}
            ></div>
          </div>
        </div>
        <Footer className="headerAnimate flex-shrink-0 bottom-2 z-10 w-full" />
      </div>
    </>
  );
}
