"use client";

import { useEffect, useState } from "react";

interface MovingTextProps {
  rotationStrings: string[];
}

/**
 * ! Takes an array of strings;
 * * Converts the array into rotatable values
 * * Keeps on rotating at said interval;
 * @returns
 *  <React.ReactNode> rotating divs.
 */
export default function MovingText({
  rotationStrings,
}: MovingTextProps): React.ReactNode {
  const [currentDiv, setCurrentDiv] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (rotationStrings) {
      interval = setInterval(() => {
        setCurrentDiv((prevDiv) => {
          if (prevDiv !== rotationStrings.length - 1) {
            return prevDiv + 1;
          }

          return 0;
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {rotationStrings &&
        rotationStrings.map((rotationString: string, index: number) => {
          let usableClass =
            "transition transition-opacity hover:-translate-y-1  delay-500 animate-bounce duration-500 ease-in-out";

          if (currentDiv !== index) {
            usableClass += " hidden";
          }

          return (
            <div key={index + "rotationString"} className={usableClass}>
              <h2>{rotationString}</h2>
            </div>
          );
        })}
    </>
  );
}
