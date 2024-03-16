import { AboutMeContent } from "@/types";

export default function InfoBox({
  aboutMeContent,
}: {
  aboutMeContent: AboutMeContent;
}) {
  return (
    <div className="prose border rounded-md shadow-md p-5 ">
      <h4 className={`text-2xl font-bold ${aboutMeContent.color}`}>
        {aboutMeContent.header}
      </h4>

      <div className="">{aboutMeContent.content}</div>
    </div>
  );
}
