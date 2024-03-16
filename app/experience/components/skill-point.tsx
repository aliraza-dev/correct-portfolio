import { SkillPointProps } from "@/types";

export function SkillPoint({ content, textColor, bgColor }: SkillPointProps) {
  return (
    <div
      className={`text-xs px-3 py-1.5 underline mr-2 rounded-2xl cursor-pointer ${textColor} ${bgColor}`}
    >
      {content}
    </div>
  );
}
