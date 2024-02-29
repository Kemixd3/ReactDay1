export type ProfileProps = {
  id?: number;
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};

export default function Profile({
  id,
  name,
  email,
  isActive,
  singleLine,
}: ProfileProps) {
  if (singleLine) {
    return (
      <>
        <h1>
          {id}, {name}, {email}, {isActive ? "Aktiv" : "ikke aktiv"}
        </h1>
      </>
    );
  }
}
