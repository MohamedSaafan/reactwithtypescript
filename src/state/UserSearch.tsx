import { useState } from "react";

const users = [
  { name: "Mohamed", age: 20 },
  { name: "Mahmoud", age: 30 },
  { name: "Eid", age: 16 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [foundUser, setFoundUser] = useState<
    { name: string; age: number } | undefined
  >();
  // you should put all possible types in mind in defining your type
  // so foundUser may be undefined ( it there is no user with the name that our client to search) or a user
  const handleFindUserClick = () => {
    setName("");
    const foundUser = users.find((user) => user.name === name);
    setFoundUser(foundUser);
  };
  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={handleFindUserClick}>Find User</button>
      <br />
      {foundUser && JSON.stringify(foundUser)}
    </div>
  );
};

export default UserSearch;
