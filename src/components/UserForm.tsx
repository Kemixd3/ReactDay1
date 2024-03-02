import { BaseProps } from "../types";
import { FormEvent, useState } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    isActive: false,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Create a new User object with the form data
    const newUser: User = {
      name: formData.name,
      email: formData.email,
      isActive: formData.isActive,
    };
    // Submit the form to the parent component
    onSubmitUser(newUser);
    // Clear the form data
    setFormData({
      name: "",
      email: "",
      isActive: false,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name:{" "}
        <input name="name" value={formData.name} onChange={handleInputChange} />
        Email:{" "}
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        Active:{" "}
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleInputChange}
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
