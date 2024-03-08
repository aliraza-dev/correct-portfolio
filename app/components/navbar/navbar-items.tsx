import DOT_SEPARATOR from "@/assets";

export default function NavbarItems({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item: string, index: number) => {
        return (
          <>
            <li>
              <a href="/">
                <div className="text-sm text-gray-400 dark:text-gray-400 hover:text-gray-500">
                  {item}
                </div>
              </a>
            </li>
            {index !== items.length - 1 && (
              <li className="text-gray-300">{DOT_SEPARATOR}</li>
            )}
          </>
        );
      })}
    </>
  );
}
