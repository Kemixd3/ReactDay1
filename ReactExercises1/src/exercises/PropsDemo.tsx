import { BaseProps } from "../types";
import { useState } from "react";
import MultipleProfiles from "./MultipleProfiles";
import { users } from "../data/data";

export default function PropsDemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      Direction:{" "}
      <input
        type="checkbox"
        checked={showHorizontal}
        onChange={() => setShowHorizontal(!showHorizontal)}
      />
      <div>
        <MultipleProfiles
          profiles={users.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            isActive: user.isActive,
            singleLine: showHorizontal,
          }))}
        />
      </div>
    </>
  );
}
