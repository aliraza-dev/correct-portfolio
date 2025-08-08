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
        content: "AWS (S3,RDS,EC2,Lambda)",
        textColor: "text-yellow-800",
        bgColor: "bg-yellow-200",
      },
      {
        content: "Bootstrap",
        textColor: "text-green-800",
        bgColor: "bg-green-50",
      },
      {
        content: "Nextjs",
        textColor: "text-blue-800",
        bgColor: "bg-blue-50",
      },
      {
        content: "BullMQ - Redis",
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
        content: "MySQL",
        textColor: "text-gray-800",
        bgColor: "bg-gray-200",
      },
    ],
  },
  {
    title: "Salam Telecom",
    description:
      "Playing role of a Technical Team Lead and Principal Software Engineer",
    contributions: [
      "Developed and deployed over 7 web applications",
      "Leading a team of fullstack, frontend, backend and ui developers",
      "Implemented SSO with SAML2.0 between AAD and Keycloak",
      "Developed Microservices in Nest.js",
    ],
    technologies: [
      {
        content: "Nestjs (Mono & Micro)",
        textColor: "text-red-800",
        bgColor: "bg-red-200",
      },
      {
        content: "Tailwind",
        textColor: "text-green-800",
        bgColor: "bg-green-50",
      },
      {
        content: "Reactjs",
        textColor: "text-blue-800",
        bgColor: "bg-blue-50",
      },
      {
        content: "GCP",
        textColor: "text-pink-800",
        bgColor: "bg-pink-50",
      },
      {
        content: "Vertex AI",
        textColor: "text-blue-700",
        bgColor: "bg-blue-200",
      },
      {
        content: "Keycloak",
        textColor: "text-green-600",
        bgColor: "bg-green-50",
      },
    ],
  },
];
