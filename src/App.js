import React, { useMemo, useState } from "react";
import "./styles.css";
import Input from "./Input";
const usersData = [
  { id: 1, email: "jean@gmail.com" },
  { id: 2, email: "albert@gmail.com" },
  { id: 3, email: "kevin@gmail.com" }
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    if (search) {
      return usersData.filter(
        (item) =>
          item.email.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
      );
    }
    return usersData;
  }, [search]);

  return (
    <div className="App">
      <h1>users list</h1>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers &&
          filteredUsers.map((item) => <li key={item.id}>{item.email}</li>)
        ) : (
          <div>empty</div>
        )}
      </ul>
      <Input />
    </div>
  );
}
