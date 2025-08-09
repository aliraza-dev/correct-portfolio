import { MyProjectsType } from "@/types";
import ProjectBox from "./components/project-box";
import { ProjectsData } from "./data/projects-data";

const Projects = () => {
  const myProjects: MyProjectsType[] = ProjectsData;

  return (
    <section className="w-full my-10">
      <div className="w-full justify-center text-center flex mb-10">
        <div className="prose">
          <h1 className="prose text-3xl sm:px-4 lg:px-20 text-center">
            {"Projects I've worked on"}
          </h1>
        </div>
      </div>

      {/* Project boxes */}
      <div className="flex p-2 md:p-10 flex-wrap gap-y-8 w-full gap-4">
        {myProjects?.map((project: MyProjectsType, index: number) => (
          <ProjectBox projectDetails={project} key={index + "projects-data"} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
