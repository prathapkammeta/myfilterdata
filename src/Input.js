import { useState, useMemo } from "react";
const Input = () => {
  const userData = [
    { id: 1, email: "jean@gmail.com" },
    { id: 2, email: "albert@gmail.com" },
    { id: 3, email: "kevin@gmail.com" }
  ];
  const [search, setSearch] = useState("");
  const filterUser = useMemo(() => {
    if (search) {
      return (
        userData.filter((item) =>
          item.email.toLowerCase().indexOf(search.toLocaleLowerCase)
        ) > -1
      );
    }
    return userData;
  }, [search]);
  return (
    <div>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filterUser.length > 0 ? (
          filterUser &&
          filterUser.map((item) => <li key={item.id}>{item.email}</li>)
        ) : (
          <div>dfdf</div>
        )}
      </ul>
    </div>
  );
};
export default Input;
