import SVGS from "@/assets";
import { NavbarType } from "@/types";
import Link from "next/link";

export default function NavbarItems({ items }: { items: NavbarType[] }) {
  return (
    <>
      {items.map((item: NavbarType, index: number) => {
        return (
          <>
            <li key={"navbarItem" + index}>
              <Link href={item.url}>
                <div className="text-sm text-gray-400 dark:text-gray-400 hover:text-gray-500">
                  {item.text}
                </div>
              </Link>
            </li>
            {index !== items.length - 1 && (
              <li className="text-gray-300 w-4 text-center m-0">
                {SVGS.DOT_SEPARATOR}
              </li>
            )}
          </>
        );
      })}
    </>
  );
}
