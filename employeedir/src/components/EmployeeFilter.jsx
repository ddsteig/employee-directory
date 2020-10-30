import React from "react";
import ReactDOM from "react-dom";
import Employees from "../seed/employees.json";
import App from "../App";

const employees = Employees.map(employee => {
  return `${employee.first} ${employee.last}`
});

function EmployeeFilter() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = employees.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search By First Name"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeFilter;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);