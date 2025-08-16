"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const codeSnippets = [
  "const skills = ['React', 'TypeScript']",
  "function createAwesome() { return 'magic'; }",
  "import { passion } from 'coding';",
  "git commit -m 'Building the future'",
  "npm run build && npm start",
  "const developer = new Ankush();",
  "return <Innovation />;",
  "async function solve(problem) {}",
  "export default CreativeCode;",
  "useState([creativity, logic]);",
  "console.log('Hello World!');",
  "interface Developer { skills: string[] }",
  "firebase.auth().currentUser",
  "tailwind.config.js",
  "next.js | react.js",
  "{ transform: 'dreams into reality' }"
];

const colors = [
  "from-pink-500 to-violet-500",
  "from-blue-500 to-cyan-500", 
  "from-green-500 to-emerald-500",
  "from-yellow-500 to-orange-500",
  "from-red-500 to-pink-500",
  "from-purple-500 to-indigo-500",
  "from-teal-500 to-blue-500",
  "from-orange-500 to-red-500"
];

export function DigitalDNA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const helixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !helixRef.current) return;

    const helixItems = helixRef.current.querySelectorAll('.helix-item');
    
    // Create continuous rotation animation for the entire helix
    gsap.to(helixRef.current, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    // Animate each code snippet individually
    helixItems.forEach((item, index) => {
      // Floating animation
      gsap.to(item, {
        y: "+=20",
        duration: 2 + (index * 0.1),
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      });

      // Pulse effect
      gsap.to(item.querySelector('.code-text'), {
        scale: 1.05,
        duration: 1.5 + (index * 0.1),
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.3
      });

      // Glow intensity animation
      gsap.to(item.querySelector('.glow-effect'), {
        opacity: 0.8,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.4
      });
    });

    // Particle effects
    const particles = containerRef.current.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        rotation: 360,
        duration: 3 + Math.random() * 2,
        ease: "none",
        repeat: -1,
        delay: index * 0.5
      });
    });

  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      {/* Floating particles */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}

      {/* DNA Helix Structure */}
      <div ref={helixRef} className="relative w-96 h-96">
        {codeSnippets.map((code, index) => {
          const angle = (index / codeSnippets.length) * 360;
          const radius = 120;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const z = (index - codeSnippets.length / 2) * 15;
          
          return (
            <div
              key={index}
              className="helix-item absolute"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                left: '50%',
                top: '50%',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Glow effect */}
              <div 
                className={`glow-effect absolute -inset-2 bg-gradient-to-r ${colors[index % colors.length]} rounded-lg opacity-20 blur-sm`}
              ></div>
              
              {/* Code snippet container */}
              <div className={`code-text relative px-3 py-2 rounded-lg bg-gradient-to-r ${colors[index % colors.length]} bg-opacity-10 backdrop-blur-sm border border-white/10 shadow-lg`}>
                <span className="text-xs font-mono text-white/90 whitespace-nowrap">
                  {code}
                </span>
                
                {/* Connecting line to center */}
                <div 
                  className="absolute w-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  style={{
                    height: `${radius}px`,
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'top',
                    transform: `rotate(${angle + 180}deg)`
                  }}
                ></div>
              </div>
            </div>
          );
        })}

        {/* Central core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/50">
            <div className="w-full h-full bg-gradient-to-r from-white/20 to-white/5 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Digital DNA
        </h3>
        <p className="text-white/60 text-sm mt-2">Code that defines who I am</p>
      </div>
    </div>
  );
}
