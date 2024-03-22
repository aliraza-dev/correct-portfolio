import { MyProjectsType } from "@/types";

export const ProjectsData: MyProjectsType[] = [
  {
    title: "Numuworld",
    description: "An infulencer marketing platform",
    contributions: [
      "Designed and worked on resuable components",
      "Wrote backend APIs and middlewares",
      "Wrote awesome background jobs to offload a lot of stuff on worker nodes, thus imporving performance",
      "Designed DB schema for some features and wrote DB migrations",
    ],
    technologies: [
      {
        content: "PERL",
        textColor: "text-yellow-800",
        bgColor: "bg-yellow-200",
      },
      {
        content: "Bootstrap",
        textColor: "text-green-800",
        bgColor: "bg-green-50",
      },
      {
        content: "jQuery",
        textColor: "text-blue-800",
        bgColor: "bg-blue-50",
      },
      {
        content: "SASS",
        textColor: "text-pink-800",
        bgColor: "bg-pink-50",
      },
      {
        content: "ReactJS",
        textColor: "text-blue-700",
        bgColor: "bg-blue-200",
      },
      {
        content: "NodeJS",
        textColor: "text-green-600",
        bgColor: "bg-green-50",
      },
      {
        content: "PostgreSQL",
        textColor: "text-gray-800",
        bgColor: "bg-gray-200",
      },
    ],
  },
  {
    title: "Motorshow",
    description: "An ecommerce store for motorbikes and cars",
    contributions: [
      "Wrote backend APIs to be consumed by WordPress and React Dashboard",
      "Designed the DB schema and wrote Laravel's DB migrations",
      "Implemented Auth using passport JS for Laravel",
      "Integrated Stripe and managed DB for storing customers information",
    ],
    technologies: [
      {
        content: "PHP (Laravel)",
        textColor: "text-red-800",
        bgColor: "bg-red-200",
      },
      {
        content: "Bootstrap",
        textColor: "text-green-800",
        bgColor: "bg-green-50",
      },
      {
        content: "jQuery",
        textColor: "text-blue-800",
        bgColor: "bg-blue-50",
      },
      {
        content: "SASS",
        textColor: "text-pink-800",
        bgColor: "bg-pink-50",
      },
      {
        content: "ReactJS",
        textColor: "text-blue-700",
        bgColor: "bg-blue-200",
      },
      {
        content: "NodeJS",
        textColor: "text-green-600",
        bgColor: "bg-green-50",
      },
      {
        content: "PostgreSQL",
        textColor: "text-gray-800",
        bgColor: "bg-gray-200",
      },
    ],
  },
];
