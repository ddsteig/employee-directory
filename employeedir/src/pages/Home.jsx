import React from 'react';
import EmployeeList from "../seed/employees"
import EmployeeTable from "../components/EmployeeTable"

// Pulls data from the seed and sent into the component

export default function App() {
  return (
    <div className="App">

      <EmployeeTable allemployees={EmployeeList} />

    </div>
  );
}
