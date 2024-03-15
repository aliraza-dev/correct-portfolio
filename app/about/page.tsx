import { Images } from "@/assets/images/images";
import MyAvatar from "@/components/common/avatar";
import Image from "next/image";
import Link from "next/link";
import InfoBox from "./components/info-box";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row w-full my-10 ">
      {/* right side */}
      <div className="md:w-1/3 justify-center text-center mx-5">
        <div className="border shadow-md  bg-[rgba(255,255,255,0.7)] mx-4 md:mx-16 px-6 text-center justify-center">
          <MyAvatar />

          <div className="text-3xl font-bold text-center text-gray-800 my-4">
            <h2>Who am I</h2>
          </div>

          <div className="my-4">
            Hi, I am <span className="font-bold">Ali Raza</span>, A full-stack
            developer currently working for{" "}
            <Link
              href={"https://www.systemsltd.com"}
              className="text-blue-600 font-bold"
              target="_blank"
            >
              @Systems ltd
            </Link>
            . I have good hands-on experience on Php(laravel, core), PERL and
            JavaScript. I am MS in SE and AWS developer associate certified
          </div>

          <div className="my-4">
            I am most experienced in{" "}
            <span className="text-blue-400 font-bold">ReactJS</span>,{" "}
            <span className="text-green-700 font-bold">NodejS</span>,{" "}
            <span className="text-blue-600 font-bold">Tailwind</span> and some
            experience in <span className="text-red-400 font-bold">Docker</span>{" "}
            and{" "}
            <span className="text-purple-700 font-bold">
              Cloud native development
            </span>
          </div>
        </div>
      </div>

      {/* Left side */}
      <div className="md:w-2/3 justify-center">
        <div className="prose text-3xl font-bold text-center text-gray-800 my-4">
          <h2 className="font-bold">What do I do?</h2>
        </div>

        {/* Array of what I do */}
        <div className="flex flex-col gap-5 w-full md:w-2/3 mx-auto">
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
        </div>
      </div>
    </section>
  );
}
