import { useEffect, useState } from "react";
import Table from "./Table";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <Table data={users} />
    </div>
  );
}

export default Users;