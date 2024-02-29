type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};

export default function Profile({
  name,
  email,
  isActive,
  singleLine,
}: ProfileProps) {
  if (singleLine) {
    return (
      <>
        <h1>
          {name}, {email}, {isActive ? "Aktiv" : "ikke aktiv"}
        </h1>
      </>
    );
  }
  return <h1>hey</h1>;
}
