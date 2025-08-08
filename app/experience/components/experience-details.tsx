import Link from "next/link";
import { ExperienceDetailsProps } from "@/types";
import { BulletCheck } from "@/components/common/bullet-check/bullet-check";
import { SkillPoint } from "@/components/common/skill-point/skill-point";

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  title,
  companyName,
  startDate,
  endDate = "Present",
  roleDetails,
  accomplishments,
  technologies,
}) => {
  return (
    <div className="flex justify-start mt-6">
      <div className="flex relative mx-auto mb-4">
        <div className="absolute w-4 mb-auto inset-0 flex text-center items-center justify-center">
          <div className="h-full w-0.5 bg-slate-200"></div>
        </div>
        <div className="flex flex-shrink-0 rounded-full bg-gray-500 h-4 w-4 mb-48 justify-center relative"></div>
      </div>
      <div className="flex flex-row md:flex-col flex-grow md:pl-8 pl-6">
        <h2 className="text-gray-900 mb-2 text-2xl">{title}</h2>
        <div className="flex content-center text-gray-500">
          <Link href={""} className="mx-1 font-bold text-blue-600">
            @{companyName}
          </Link>
          <div className="ml-1">:</div>
          <h4 className="mx-1 my-1 font-bold flex text-gray-500">
            {startDate} - {endDate}
          </h4>
        </div>
        <h3 className="mt-4 mb-2 text-gray-800">Role</h3>
        <div className="grid">
          {roleDetails &&
            roleDetails.map((role, index: number) => (
              <BulletCheck key={"roleBullets" + index} content={role} />
            ))}
        </div>

        <h3 className="mt-4 mb-2 text-gray-800">Accomplishments</h3>
        <div className="grid">
          {accomplishments &&
            accomplishments.map((accomplishment, index: number) => (
              <BulletCheck
                content={accomplishment}
                key={index + "accomplishments"}
              />
            ))}
        </div>

        <h3 className="mt-4 mb-2 text-gray-800">Skills</h3>
        <div className="flex flex-wrap">
          {technologies &&
            technologies.map((tech, index: number) => (
              <SkillPoint key={"techSkillpoint" + index} {...tech} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
