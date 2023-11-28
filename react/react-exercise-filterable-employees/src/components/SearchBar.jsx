import { useState } from "react";
import { DATA_EMPLOYEE } from "../data/data";

export function SearchBar({ searchTerm, onSearchTermChange, onlyAvailableUsersChange }) {
    
    return (
        <>
            <input
                type="text"
                name="searchTerm"
                id="searchTerm"
                value={searchTerm}
                onChange={(e) => {
                    onSearchTermChange(e.target.value);
                }}
                placeholder="Search an employee"
            />
            <label>
                Only Available <input type="checkbox" name="" id="" onChange={(e) => {onlyAvailableUsersChange(e.target.checked)}}/>
            </label>
        </>
    );
}
