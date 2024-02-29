import Profile, { ProfileProps } from "../components/Profile";

export default function MultipleProfiles({
  profiles,
}: {
  profiles: ProfileProps[];
}) {
  return (
    <div>
      {profiles.map((profile: ProfileProps, index: number) => (
        <Profile
          key={index}
          id={profile.id}
          name={profile.name}
          email={profile.email}
          isActive={profile.isActive}
          singleLine={profile.singleLine}
        />
      ))}
    </div>
  );
}
