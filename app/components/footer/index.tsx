import Link from "next/link";
import SVGS from "@/assets";

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="relative bottom-0 p-3 lg:p-5 flex justify-between items-center bg-gray-100 text-slate-500">
      <div className="text-left text-gray-500">
        © Copyright - {thisYear} Ali Raza —
      </div>

      {/* important urls */}
      <div className="bg-gray-100 flex gap-3">
        <Link href={"https://github.com/aliraza-dev"} target="_blank">
          <div className="w-5">{SVGS.GITHUB || "Github"}</div>
        </Link>

        <Link href={"https://www.linkedin.com/in/mr-aliraza/"} target="_blank">
          <div className="w-5">{SVGS.LINKEDIN || "Linedin"}</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
