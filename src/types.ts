export type BaseProps = {
  title: string;
};

export type UserPropsArray = {
  users: [];
};

export type User = {
  id?: number;
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};
