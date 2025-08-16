import { cn } from "@/lib/utils";
import React from "react";
import Magentic from "@/components/ui/magentic";
import { Mail, Linkedin, MessageCircle, Github } from "lucide-react";

// Icon mapping for social links with brand colors
const getIcon = (text: string) => {
  const iconMap: { [key: string]: { icon: React.ReactNode; hoverColor: string; bgColor: string; glowColor: string } } = {
    Email: { 
      icon: <Mail size={18} className="transition-all duration-300" />, 
      hoverColor: "hover:text-red-400",
      bgColor: "hover:bg-red-500/20",
      glowColor: "group-hover:shadow-red-500/30"
    },
    LinkedIn: { 
      icon: <Linkedin size={18} className="transition-all duration-300" />, 
      hoverColor: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
      glowColor: "group-hover:shadow-blue-500/30"
    },
    Telegram: { 
      icon: <MessageCircle size={18} className="transition-all duration-300" />, 
      hoverColor: "hover:text-sky-400",
      bgColor: "hover:bg-sky-500/20",
      glowColor: "group-hover:shadow-sky-500/30"
    },
    Github: { 
      icon: <Github size={18} className="transition-all duration-300" />, 
      hoverColor: "hover:text-purple-400",
      bgColor: "hover:bg-purple-500/20",
      glowColor: "group-hover:shadow-purple-500/30"
    },
  };
  return iconMap[text] || { icon: null, hoverColor: "", bgColor: "", glowColor: "" };
};
export function FooterGroup({
  title,
  links,
  isMagnetic = false,
  className,
}: FooterGroupProps) {
  return (
    <div
      className={cn(
        "flex grow flex-col items-center justify-center pb-6 text-[clamp(20px,_1vw_+_14px,_24px)] text-[#ffffffbf] md:block md:grow-0 md:py-6",
        className,
      )}
    >
      <h3 className="text-[0.65em] font-semibold tracking-widest opacity-90 mb-4 text-center md:text-left text-white/90 uppercase">
        {title}
      </h3>
      <ul className="mt-[0.4em] flex w-full justify-between gap-4 md:mt-[0.2em] md:w-auto md:justify-normal md:gap-6">
        {links.map((link, index) => {
          const { icon, hoverColor, bgColor, glowColor } = getIcon(link.text);
          return (
            <li key={index} className="group relative">
              {isMagnetic ? (
                <Magentic
                  strength={60}
                  className="relative block"
                  href={link.href}
                  target="_blank"
                >
                  <div className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 backdrop-blur-sm",
                    "bg-white/5 transition-all duration-500 ease-out shadow-lg",
                    "hover:scale-110 hover:rotate-2 hover:shadow-2xl",
                    "group-hover:border-white/30",
                    bgColor,
                    glowColor
                  )}>
                    <div className={cn(
                      "text-white/80 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125",
                      hoverColor
                    )}>
                      {icon}
                    </div>
                    <span className={cn(
                      "text-[0.85em] font-medium tracking-wide text-white/80 transition-all duration-300",
                      "group-hover:text-white",
                      hoverColor
                    )}>
                      {link.text}
                    </span>
                  </div>
                  
                  {/* Individual Brand Color Glow Effect */}
                  <div className={cn(
                    "absolute -inset-1 rounded-xl opacity-0 blur transition-all duration-500 group-hover:opacity-100",
                    link.text === "Email" && "bg-gradient-to-r from-red-500/20 to-red-400/10",
                    link.text === "LinkedIn" && "bg-gradient-to-r from-blue-500/20 to-blue-400/10",
                    link.text === "Telegram" && "bg-gradient-to-r from-sky-500/20 to-sky-400/10",
                    link.text === "Github" && "bg-gradient-to-r from-purple-500/20 to-purple-400/10"
                  )}></div>
                  
                  {/* Floating Particles Effect with Brand Colors */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                    <div className={cn(
                      "absolute -top-2 -left-2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping",
                      link.text === "Email" && "bg-red-400/60",
                      link.text === "LinkedIn" && "bg-blue-400/60",
                      link.text === "Telegram" && "bg-sky-400/60",
                      link.text === "Github" && "bg-purple-400/60"
                    )}></div>
                    <div className={cn(
                      "absolute -top-1 -right-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:animate-ping",
                      link.text === "Email" && "bg-red-300/40",
                      link.text === "LinkedIn" && "bg-blue-300/40",
                      link.text === "Telegram" && "bg-sky-300/40",
                      link.text === "Github" && "bg-purple-300/40"
                    )}></div>
                    <div className={cn(
                      "absolute -bottom-1 -left-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-200 group-hover:animate-ping",
                      link.text === "Email" && "bg-red-400/50",
                      link.text === "LinkedIn" && "bg-blue-400/50",
                      link.text === "Telegram" && "bg-sky-400/50",
                      link.text === "Github" && "bg-purple-400/50"
                    )}></div>
                  </div>
                </Magentic>
              ) : (
                <div className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10",
                  "bg-white/5 text-white/80 font-medium tracking-wide"
                )}>
                  {icon}
                  <span className="text-[0.85em]">{link.text}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface FooterGroupProps {
  title: string;
  links: { href: string; text: string }[];
  isMagnetic?: boolean;
  className?: string;
}
