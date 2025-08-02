import axios from "axios";
import { useState, useEffect } from "react";
interface User {
  id: number;
  firstName: string;
}
const App = () => {
  const [users, setUser] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUser(res.data.users));
  }, []);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
