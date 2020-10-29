import React from "react";
import { EmployeeDisplay } from "../components/EmployeeDisplay"
import Employees from "../seed/employees.json"

export default function Home() {

    return (
        <div >
            <h1>Employee Directory</h1>
            <table className="striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Id</th>
                        <th>Age</th>
                        <th>Phone #</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {Employees.map(employee => (

                        <EmployeeDisplay {...employee} />
                    ))}

                </tbody>
            </table>
        </div>
    )

}
