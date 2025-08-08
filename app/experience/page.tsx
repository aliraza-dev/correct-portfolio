import { ExperienceDetailsProps } from "@/types";
import ExperienceDetails from "./components/experience-details";
import { pastExperiences } from "./data/skills-data";

const Experience = () => {
  return (
    <section className="prose mx-auto text-gray-900 w-full">
      <h1 className="text-3xl sm:px-4 lg:px-20 lg:py-6 text-center">
        My Experiences
      </h1>

      {pastExperiences &&
        pastExperiences.map(
          (experience: ExperienceDetailsProps, index: number) => (
            <ExperienceDetails
              key={index + "exp" + experience.title}
              {...experience}
            />
          )
        )}
    </section>
  );
};

export default Experience;
