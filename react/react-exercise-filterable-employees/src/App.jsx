import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { EmployeeTable } from "./components/EmployeeTable";
import { DATA_EMPLOYEE } from "./data/data";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [onlyAvailableUsers, setOnlyAvailableUsers] = useState(false);

    function onSearchTermChange(term) {
        setSearchTerm(term);
    }

    return (
        <div className="search-container">
            <h2>Employee Table</h2>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={onSearchTermChange}
                onlyAvailableUsersChange = {setOnlyAvailableUsers}
            />
            <EmployeeTable searchTerm={searchTerm} onlyAvailableUsers = {onlyAvailableUsers}/>
        </div>
    );
}

export default App;
