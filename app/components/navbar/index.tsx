import NavbarItems from "./navbar-items";

const Navbar = () => {
  const navItems: string[] = ["Home", "About", "Projects"];

  return (
    <nav className="relative top-0 p-4 lg:p-8 flex justify-between items-center bg-gray-100">
      <a
        className="text-3xl font-bold leading-none flex flex-1 align-center"
        href="/"
      >
        <span className="hidden lg:inline-block py-2 px-2 bg-gray-900  text-sm text-gray-50 font-bold  rounded-xl transition duration-200">
          AR
        </span>

        <span className="ml-3 text-lg xl:text-2xl md:text-xxl  md:block cursor-pointer">
          Ali Raza
        </span>
      </a>

      {/* Nav items */}
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:flex lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        <NavbarItems items={navItems} />
      </ul>

      {/* Blog button, will create a microservice for that */}
      <a href="/blog">
        <span className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-3 px-6 bg-gray-900  text-sm text-gray-50  100font-bold  rounded-xl transition duration-200">
          Read Blog
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
