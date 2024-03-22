import { SkillPointProps } from "@/types";

export function SkillPoint({
  content,
  textColor,
  bgColor,
  key,
}: SkillPointProps) {
  return (
    <div
      key={key}
      className={`text-xs px-3 mb-1 py-1.5 underline mr-2 rounded-2xl cursor-pointer ${textColor} ${bgColor}`}
    >
      {content}
    </div>
  );
}
