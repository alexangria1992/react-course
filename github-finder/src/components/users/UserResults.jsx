import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    // console.log(data);
    setUsers(data);
    setIsLoading(false);
  };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user, index) => (
          <h3 key={index}>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}

export default UserResults;
