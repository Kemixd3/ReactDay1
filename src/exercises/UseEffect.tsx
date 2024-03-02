/*
Exercise
part one --> provide the useEffect without a dependency array and clearInterval and see what happens
part two --> provide the useEffect with an empty dependency array and see what happens
part three --> add an return function  to clear the interval ()
part four --> Add a button to start and stop the interval via a boolean state variable to see what happens with values in the dependency array
*/
import { useState, useEffect } from "react";
import { BaseProps } from "../types";

export default function UseEffectDemo({ title }: BaseProps) {
  const [count, setCount] = useState(0);
  const [shouldCount, setShouldCount] = useState(false);

  useEffect(() => {
    // Cleaner counting
    let intervalId: NodeJS.Timeout;

    if (shouldCount) {
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    // !CLEANUP :) - Clear the interval when shouldCount becomes false or on unmount
    return () => {
      clearInterval(intervalId);
    };
    // Specify shouldCount as a dependency runs when changes
  }, [shouldCount]);

  return (
    <>
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={() => setShouldCount((prev) => !prev)}>
        {shouldCount ? "Stop Count" : "Start Count"}
      </button>
    </>
  );
}
