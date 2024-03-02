import { BaseProps } from "../types";
import { users as usersFromDB, User } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";

type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users, setUsers] = useState<User[]>(usersFromDB || []);
  //Derived value. No need for a useState here
  const nextId =
    1 +
    users.reduce((max, user) => (user.id && user.id > max ? user.id : max), 0); // Ensure that user.id exists before comparing

  const onSubmitUser = (newUser: User) => {
    newUser.id = nextId;
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log(users);
  };

  return (
    <>
      <h2>{title}</h2>
      <UserTable users={users} />
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
    </>
  );
}
