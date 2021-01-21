import React from "react";
import ReactDOM from "react-dom";
import Parent from "./props/Parent";

const App = () => {
  return (
    <div>
      Hello World!
      <Parent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
