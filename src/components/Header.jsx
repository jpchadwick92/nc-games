import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <h1>NC Games</h1>
      <section className="user">
        <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
        <p>User: {user.username}</p>
      </section>
    </header>
  );
};

export default Header;
