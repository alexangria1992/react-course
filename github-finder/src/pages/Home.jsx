import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div>
      {/* SEACH RESULTS */}
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
