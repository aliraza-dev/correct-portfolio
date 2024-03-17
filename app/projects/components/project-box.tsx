import { BulletCheck } from "@/components/common/bullet-check/bullet-check";
import { SkillPoint } from "@/components/common/skill-point/skill-point";
import { MyProjectsType, SkillPointProps } from "@/types";

export default function ProjectBox({
  projectDetails: { title, description, contributions, technologies },
}: {
  projectDetails: MyProjectsType;
}) {
  return (
    <div className="prose flex flex-col mx-auto overflow-hidden w-96 bg-white shadow-lg rounded-lg text-gray-500">
      <div className="flex items-center bg-gray-900 w-full px-5 py-1">
        <div className="text-white text-lg font-bold">{title}</div>
      </div>
      {/* card body */}
      <div className="px-5 py-6">
        <h1 className="text-lg font-extrabold text-gray-900">{description}</h1>

        <h3 className="mx-0 my-2 text-xl text-gray-700">Contributions</h3>

        {contributions?.map((contribution, index: number) => (
          <BulletCheck
            content={contribution}
            key={index + "bullet-project-box"}
          />
        ))}

        <h3 className="mx-0 my-2 text-xl text-gray-700">Technologies</h3>

        <div className="flex flex-wrap">
          {technologies?.map((technology: SkillPointProps, index: number) => (
            <SkillPoint
              {...technology}
              key={"skill-point-project-box" + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
