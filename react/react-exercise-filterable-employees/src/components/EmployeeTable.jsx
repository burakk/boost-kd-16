import { DATA_EMPLOYEE } from "../data/data"

export function EmployeeTable({searchTerm, onlyAvailableUsers}){

    // const [employeeTable, setEmployeeTable] = useState(DATA_EMPLOYEE);
    console.log(onlyAvailableUsers)
    // let filteredTable = DATA_EMPLOYEE.filter((e) => e.name.includes(searchTerm))
    let filteredEmployeeTable = [];
    DATA_EMPLOYEE.forEach((employee) => {
        // if(onlyAvailableUsers == true){
        //     if(employee.name.includes(searchTerm) && employee.available == true){
        //         filteredEmployeeTable.push(employee)
        //     }
        // }
        // else {
        //     if(employee.name.includes(searchTerm)){
        //         filteredEmployeeTable.push(employee)
        //     }
        // }

        if(employee.name.toLocaleLowerCase("tr").indexOf(searchTerm.toLocaleLowerCase("tr")) == -1) return;

        if(onlyAvailableUsers && !employee.available) return;

        filteredEmployeeTable.push(employee);

        
    })
//Uncaught TypeError: Cannot read properties of undefined (reading 'push')
    return(
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Profession</th>
                <th>Available</th>
                </tr>
            </thead>
            <tbody>
                    {filteredEmployeeTable.map((employee)=>{return(
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.profession}</td>
                            <td>{employee.available.toString()}</td>
                        </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}