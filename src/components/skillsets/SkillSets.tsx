import React from "react";
import { Separator } from "../ui/separator";
import { CircleCheck } from "lucide-react";
import { Progress } from "../ui/progress";

const SkillSets = () => {
  const skills = [
    { name: "HTML (Hypertext Markup Language)", level: 90, value: 9 },
    { name: "CSS/SASS", level: 70, value: 7 },
    { name: "Bootstrap", level: 60, value: 6 },
    { name: "Tailwind", level: 70, value: 7 },
    { name: "Javascript", level: 80, value: 8 },
    { name: "Typescript", level: 70, value: 7 },
    { name: "React Js", level: 80, value: 8 },
    { name: "Vue Js", level: 50, value: 5 },
    { name: "Next Js", level: 60, value: 6 },
    { name: "MongoDb", level: 50, value: 5 },
    { name: "Git", level: 60, value: 6 },
  ];

  const tools = [
    { name: "Visual Studio Code", level: 90, value: 9 },
    { name: "Webstorm", level: 80, value: 8 },
    { name: "Postman", level: 70, value: 7 },
    { name: "Jira", level: 60, value: 6 },
    { name: "Confluence", level: 60, value: 6 },
  ];
  return (
    <div className="w-2/3 mx-auto my-30">
      <div className="text-2xl">Skill Sets</div>
      <Separator />
      <div className="hidden md:flex items-center justify-between mt-4">
        <div className="text-xs text-gray-500">
          Programming Languages and Technologies
        </div>
        <div className="text-xs text-gray-500">Expert Level (1-10)</div>
      </div>
      <div className="space-y-2 my-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <CircleCheck width={15} height={15} color="green" />
              <span className="text-sm">{skill.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">{skill.value}</span>
              <Progress
                value={skill.level}
                className="w-[300px] [&>*]:bg-green-400"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center justify-between mt-8">
        <div className="text-xs text-gray-500">
          Development and Management Tools
        </div>
        <div className="text-xs text-gray-500">Expert Level (1-10)</div>
      </div>
      <div className="space-y-2 my-2">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col  items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <CircleCheck width={15} height={15} color="green" />
              <span className="text-sm">{tool.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">{tool.value}</span>
              <Progress
                value={tool.level}
                className="w-[300px] [&>*]:bg-green-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSets;
