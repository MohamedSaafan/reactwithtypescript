import React from "react";
import ReactDOM from "react-dom";
import Draggable from "./events/Draggable";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <Draggable />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
