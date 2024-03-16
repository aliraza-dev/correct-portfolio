export interface ExperienceDetailsProps {
  title: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  roleDetails: string[];
  accomplishments: string[];
  technologies: SkillPointProps[];
}

export interface SkillPointProps {
  content: string;
  textColor?: string | "text-gray-700";
  bgColor?: string | "bg-gray-400";
}
