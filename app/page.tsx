import Image from "next/image";
import { Images } from "@/assets/images/images";
import SVGS from "@/assets";
import MovingText from "@/components/common/moving-text";
import TransparentButton from "@/components/common/transparent-button";
import { TSParticles } from "./components/navbar/particles-container";

export default function Home() {
  const rotationStrings: string[] = [
    "Full stack developer",
    "Devops",
    "Front end Developer",
  ];

  return (
    <>
      <TSParticles />
      <main className="relative min-h-[94%] py-8 mt-4 2xl:w-4/5 m-auto">
        <div className="mx-auto flex flex-col gap-5 justify-center items-center w-full 2xl:w-4/5">
          <div className="rounded-full py-5">
            <Image
              src={Images.MyPic}
              className="rounded-full"
              width={200}
              height={200}
              alt="Myavatar"
            />
          </div>

          {/* Introductory articles */}
          <div className="flex flex-col gap-5 w-full justify-center items-center ">
            <article className="prose prose-sm lg:prose-xl text-center 2xl:prose-2xl">
              <h1>Hi, I'm Ali Raza</h1>

              <MovingText rotationStrings={rotationStrings} />

              <h4>ReactJS | NodeJS | AWS | Docker | Database</h4>
            </article>
            {/* Know more button */}
            <TransparentButton text="Know more" />
          </div>
        </div>
      </main>
    </>
  );
}
