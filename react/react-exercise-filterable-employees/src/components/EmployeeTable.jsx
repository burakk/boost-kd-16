import { DATA_EMPLOYEE } from "../data/data"



const sortedEmployeeData = DATA_EMPLOYEE.slice();

sortedEmployeeData.sort((a, b) => {

    if (a.profession < b.profession) return -1;
    if (a.profession > b.profession) return 1;
    return 0;
});


export function EmployeeTable({ searchTerm, onlyAvailableUsers }) {

    let lastProfession;

    let filteredEmployeeTable = [];
    sortedEmployeeData.forEach((employee) => {

        if (employee.name.toLocaleLowerCase("tr").indexOf(searchTerm.toLocaleLowerCase("tr")) == -1) return;

        if (onlyAvailableUsers && !employee.available) return;


        if (lastProfession != employee.profession) {
            filteredEmployeeTable.push(<tr key={employee.profession}><td colSpan="3"><strong style={{ color: "pink" }}>{employee.profession}</strong></td></tr>);
            lastProfession = employee.profession;
        }

        filteredEmployeeTable.push(
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.available.toString()}</td>
            </tr>
        );
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Available</th>
                </tr>
            </thead>
            <tbody>
                {filteredEmployeeTable}
            </tbody>
        </table>
    )
}