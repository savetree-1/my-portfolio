import React from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "JavaScript", level: 90, color: "#F7DF1E" },
  { name: "TypeScript", level: 85, color: "#3178C6" },
  { name: "React", level: 88, color: "#61DAFB" },
  { name: "Next.js", level: 82, color: "#000000" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "Python", level: 75, color: "#3776AB" },
  { name: "Firebase", level: 78, color: "#FFCA28" },
  { name: "MongoDB", level: 70, color: "#47A248" },
  { name: "HTML/CSS", level: 92, color: "#E34F26" },
  { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
  { name: "Git", level: 83, color: "#F05032" },
  { name: "Figma", level: 80, color: "#F24E1E" },
];

export function SkillsGrid() {
  return (
    <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="skill-item bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-medium text-white">{skill.name}</h3>
            <span className="text-sm text-white/60">{skill.level}%</span>
          </div>
          
          <div className="skill-bar-container bg-white/10 rounded-full h-2 overflow-hidden">
            <div
              className="skill-bar h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                backgroundColor: skill.color,
                "--skill-width": `${skill.level}%`,
              } as React.CSSProperties & { "--skill-width": string }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
