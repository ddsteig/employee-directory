import React from "react";

// Function to enable sorting of table data
const useSortableData = (employees, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  // useMemo used to memorize values
  const sortedEmployees = React.useMemo(() => {
    let sortableEmployees = [...employees];
    if (sortConfig !== null) {
      sortableEmployees.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEmployees;
  }, [employees, sortConfig]);
  // Sort by ascending and descending off the key
  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { employees: sortedEmployees, requestSort, sortConfig };
};

// Employee table to return data to page
// Contains sort, and filter functionality
const EmployeeTable = (props) => {
  const { employees, requestSort, sortConfig } = useSortableData(props.allemployees);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  // State used for filter
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  // Table display
  // onchange events for Name, Company, and Age for sorting
  return (

    <div>
      <div>
        <input
          type="text"
          placeholder="Search By First Name"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <table className="striped responsive-table">

        <thead>
          <tr>
            <th>Image</th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('first')}
                className={getClassNamesFor('first')}
              >
                Name
          </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('company')}
                className={getClassNamesFor('company')}
              >
                Company
          </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('age')}
                className={getClassNamesFor('age')}
              >
                Age
          </button>
            </th>
            <th>Phone #</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* Filters by first name and then maps the data */}
          {employees.filter((person => person.first.toLowerCase().includes(searchTerm.toLocaleLowerCase()))).map(newperson => (
            <tr key={newperson.id}>
              <td><img src={newperson.picture} className="card-img-top" alt="..." /></td>
              <td>{`${newperson.first} ${newperson.last}`}</td>
              <td>{newperson.company}</td>
              <td>{newperson.age}</td>
              <td>{newperson.phone}</td>
              <td>{newperson.email}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
};

export default EmployeeTable;