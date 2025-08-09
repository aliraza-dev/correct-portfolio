import Link from "next/link";
import NavbarItems from "./navbar-items";
import { NavbarType } from "@/types";

const Navbar = () => {
  const navItems: NavbarType[] = [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "/about",
      text: "About",
    },
    {
      url: "/experience",
      text: "Experience",
    },
    {
      url: "/projects",
      text: "Projects",
    },
  ];

  return (
    <nav className="z-50 relative top-0 p-4 lg:p-8 flex justify-between items-center bg-gray-100">
      <Link
        className="text-3xl font-bold leading-none flex flex-1 align-center items-center"
        href="/"
      >
        <span className="hidden lg:inline-block py-2 px-2 bg-gray-900  text-sm text-gray-50 font-bold  rounded-xl transition duration-200">
          AR
        </span>

        <span className="ml-3 text-lg xl:text-2xl md:text-xxl  md:block cursor-pointer">
          Ali Raza
        </span>
      </Link>

      {/* Nav items */}
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:flex lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        <NavbarItems items={navItems} />
      </ul>

      {/* Blog button, will create a microservice for that */}
      {/* <Link href="/blog">
        <span className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-3 px-6 bg-gray-900  text-sm text-gray-50  100font-bold  rounded-xl transition duration-200">
          Read Blog
        </span>
      </Link> */}
    </nav>
  );
};

export default Navbar;
