import Image from "next/image";
import { Images } from "@/assets/images/images";
import SVGS from "@/assets";

export default function Home() {
  return (
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

            <h2>Full stack developer</h2>

            <h4>ReactJS | NodeJS | AWS | Docker | Database</h4>
          </article>
          {/* Know more button */}
          <div className="flex flex-row rounded ring-1 gap-2 ring-black px-7 py-2 cursor-pointer">
            Know More
            <div className="w-5">{SVGS.RIGHT_ARROW}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
