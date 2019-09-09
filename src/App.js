import React from "react";
import logo from "./logo.svg";
import GetEmployees from "./components/GetEmployees";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="header">Employee List</h2>
      <GetEmployees />
    </div>
  );
}

export default App;
//ReactDOM.render(<Table />, document.getElementById("root"));
