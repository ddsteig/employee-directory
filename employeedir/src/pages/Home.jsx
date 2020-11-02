import React from 'react';
import EmployeeList from "../seed/employees"
import EmployeeTable from "../components/EmployeeTable"
import ReactDOM from "react-dom";



export default function App() {
  return (
    <div className="App">

      <EmployeeTable allemployees={EmployeeList} />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));