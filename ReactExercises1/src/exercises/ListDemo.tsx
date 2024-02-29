import { BaseProps } from "../types";
import { users } from "../data/data";
import UserTable from "../components/UserTable";
type Props = BaseProps;

export default function ListDemo({ title }: Props) {
  return (
    <>
      <h2>{title}</h2>
      {/** DONE*/}
      <UserTable users={users} />

      {/**DONE */}
    </>
  );
}
