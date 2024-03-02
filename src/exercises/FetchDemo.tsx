import { useEffect, useState } from "react";
import { BaseProps } from "../types";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;

type User = { id: number; name: string };

function fetchUser(userId: number, options?: object): Promise<User> {
  return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) =>
    res.json()
  );
}

export default function FetchDemo1({ title }: BaseProps) {
  // const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Use useEffect for the initial fetch
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchUser(1, { signal }); // Assuming initial user id is 1
        setUser(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []); // Empty dependency array to run only once on mount

  const fetchNextUser = async () => {
    // Check if user is not null before accessing its id property
    const nextUserId = user ? (user.id + 1 <= 15 ? user.id + 1 : 1) : 1;
    setLoading(true);
    const theUser = await fetchUser(nextUserId);
    setLoading(false);
    setUser(theUser);
  };

  return (
    <>
      <h2>{title}</h2>
      {loading ? "Loading..." : user && JSON.stringify(user)}
      <br />
      <button onClick={fetchNextUser} disabled={loading}>
        Next User
      </button>
    </>
  );
}
