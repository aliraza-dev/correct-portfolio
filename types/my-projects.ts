import { SkillPointProps } from "./";

export type MyProjectsType = {
  title: string;
  description: string;
  contributions: string[];
  technologies: SkillPointProps[];
  linkToProject?: string;
};
