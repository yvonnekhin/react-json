import React from "react";
import logo from "./logo.svg";
import EmployeesTable from "./components/EmployeesTable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="header">Employee List</h2>
      <EmployeesTable />
    </div>
  );
}

export default App;
//ReactDOM.render(<Table />, document.getElementById("root"));
