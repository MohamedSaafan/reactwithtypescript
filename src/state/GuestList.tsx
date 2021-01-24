import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  const handleAddGuest = () => {
    setName("");
    setGuests([...guests, name]);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <input value={name} onChange={onChange} />
      <br />
      <button onClick={handleAddGuest}>ADD Guest</button>
    </div>
  );
};

// you should use useState<yourtype>(initialValue) to avoid misInferring your type from typescript
// so if you used that
// const [guests,setGuest] = useState([]);
// then typescript will infer the type of guests to be never[]
// but we want it to by string[] and that will cause error
// if you tried to set the state of the type never[] to string[] then there will be and error

export default GuestList;
