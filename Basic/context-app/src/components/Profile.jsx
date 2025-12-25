import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { user, logout } = useContext(UserContext);

  if (!user) return <p>Not logged in</p>;

  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
